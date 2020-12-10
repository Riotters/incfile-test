import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/entity-search/delaware-entity-search/about";
import Search from "../atomic/sections/entity-search/delaware-entity-search/search";
import Faq from "../atomic/sections/entity-search/delaware-entity-search/faq";
import { scrollToElement } from "../helpers/utils";

//Texts
import {
	top,
	about,
	search,
	faq,
} from "../static/entity-search/delaware-entity-search";

const GeneralResearchTopics = () => {
	return (
		<Layout>
			<SEO
				title="Delaware Corporation & Business Entity Search | Incfile"
				description="Starting a business in Delaware? Use our tool to search Delaware companies to see if your business name is available."
			/>
			<Top
				imageName="mrs-bulb-state-ilustrations-3893"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="green"
				headlineWidth="700"
				textWidth="520"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button
						onClick={(e) => scrollToElement(e, "js-business-name-search-form")}
						content={top.button[0]}
						theme="primary56"
						arrow
					/>
				</Buttonsbox>
			</Top>
			<About content={about} />
			<Search content={search} id="js-business-name-search-form" />
			<Faq content={faq} />
		</Layout>
	);
};

export default GeneralResearchTopics;
