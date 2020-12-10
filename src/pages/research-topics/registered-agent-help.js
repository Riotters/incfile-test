import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import Related from "../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../atomic/molecules/form/help-center-searchbar";
//Texts
import {
	top,
	rocket,
	categories,
	service,
	tools,
} from "../../static/learning-center-entity/help-center-article";
import { related } from "../../static/research-topics/registered-agent";
import { Heading } from "../../atomic/atoms/typography/heading";
import { HeadingP } from "../../atomic/atoms/typography/heading-to-p";

const HelpCenter = () => (
	<Layout>
		<SEO
			title="Registered Agent Resources & Articles | Incfile Help Center"
			description="Find helpful information about Registered Agents, from why your company needs one to their responsibilities and requirements. "
		/>
		<Top
			imageName="mrs-bulb-help-center-article"
			imageAlt="Mrs Bulb and with checklist"
			ovalColor="green"
		>
			<Heading size={2} template={1} left>
				{top.header}
			</Heading>
			<HeadingP size={3}>{top.text}</HeadingP>
			<Searchbar />
		</Top>
		{/* <About content={about} /> */}
		<Related content={related} headingSize={1} headingSizeTemplate={2} />
		<Categories content={categories} />
		<Service content={service} />
		<Tools content={tools} />
		<Rocket content={rocket} />
	</Layout>
);

export default HelpCenter;
