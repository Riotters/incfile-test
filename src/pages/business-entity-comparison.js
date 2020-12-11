import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/comparison-chart/about";
import BusinessStructure from "../atomic/sections/learning-center-entity/comparison-chart/business-structure";
import EntityType from "../atomic/sections/learning-center-entity/comparison-chart/entity-type";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import Guide from "../atomic/sections/learning-center-entity/comparison-chart/guide";
import Service from "../atomic/sections/learning-center-entity/comparison-chart/service";
import { scrollToElement } from "../helpers/utils";
//Texts
import {
	top,
	about,
	businessStructure,
	entityType,
	rocket,
	guide,
	service,
} from "../static/learning-center-entity/comparison-chart";

const ComparisonChart = () => {
	return (
		<Layout>
			<SEO
				title="Types of Corporations & Business Structures | Entity Chart"
				description="Confused about what type of corporation is best for you? Compare business entities like LLCs, C corps, S corps, and nonprofits."
			/>
			<Top
				imageName="mr-bulb-business-entity-comparison-9338"
				imageAlt=""
				ovalColor="sun"
				tabletVariantClass="tablet--shopper"
				tabletImgPosX={35}
				tabletImgScale={0.9}
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button
						content={top.buttons[0]}
						theme="primary56"
						arrow
						onClick={(e) => scrollToElement(e, "jsDownloadForm")}
					/>
				</Buttonsbox>
			</Top>
			<About content={about} />
			<BusinessStructure content={businessStructure} />
			<EntityType content={entityType} />
			<Rocket content={rocket} />
			<Guide content={guide} />
			<Service content={service} />
		</Layout>
	);
};

export default ComparisonChart;
