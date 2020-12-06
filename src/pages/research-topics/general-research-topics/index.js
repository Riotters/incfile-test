import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import {
	top,
	rocket,
	categories,
	service,
	tools,
} from "../../../static/learning-center-entity/help-center-article";
import { related } from "../../../static/research-topics/general-research";

const HelpCenter = () => (
	<Layout>
		<SEO
			title="General Articles & Information on Forming an LLC or Corporation"
			description="Q & A for LLC and other forms of corporations. Learning Center for Incorporating in every state."
		/>
		<Top
			imageName="mrs-bulb-help-center-article"
			imageAlt="Mrs Bulb and with checklist"
			ovalColor="green"
		>
			<Heading size={2} template={1} left>
				{top.header}
			</Heading>
			<p>{top.text}</p>
			<Searchbar />
		</Top>
		{/* <About content={about} /> */}
		<Related content={related} />
		<Categories content={categories} />
		<Service content={service} />
		<Tools content={tools} />
		<Rocket content={rocket} />
	</Layout>
);

export default HelpCenter;
