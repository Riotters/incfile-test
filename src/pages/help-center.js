import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import Categories from "../atomic/sections/learning-center-entity/help-center/categories";
import Tools from "../atomic/sections/learning-center-entity/help-center/tools";
import Service from "../atomic/sections/learning-center-entity/help-center/service";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../atomic/molecules/form/help-center-searchbar";
//Texts
import {
	top,
	rocket,
	categories,
	service,
	tools,
} from "../static/learning-center-entity/help-center";

const HelpCenter = () => (
	<Layout>
		<SEO
			title="Incfile Business Help Center for LLC, Incorporating | Q & A"
			description="Q & A for LLC and other forms of corporations. Learning Center for Incorporating in every state."
		/>
		<Top
			imageName="mrs-bulb-question-7726"
			imageAlt="q & a for llc and incorporating"
			ovalColor="darkblue"
			overflowMD
		>
			<h1>{top.header}</h1>
			<p>{top.text}</p>
			<Searchbar />
		</Top>
		<Categories content={categories} />
		<Service content={service} />
		<Tools content={tools} />
		<Rocket content={rocket} />
	</Layout>
);

export default HelpCenter;
