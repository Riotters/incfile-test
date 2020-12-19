import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Helmet } from "react-helmet";
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
				imageAlt="business entity comparison"
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
            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "Is an LLC a Corporation? by Incfile",
                        "description": "“Is an LLC a corporation?”  We get this question a lot.  The short answer: LLCs are not corporations.  We know this answer can be confusing— but here at Incfile, we have a team of experts who will help you navigate this legal maze.   If you’re looking to start your own business, we even have an option for a $0 LLC formation plus state fees.   Check out the links below to get started.  Links:  File an LLC for free: https://www.incfile.com/free-llc/ Should you form a limited liability company?: https://www.incfile.com/limited-liability-company/ LLC vs. Corporations: https://www.incfile.com/research-topics/llc-info/llcs-vs-c-corporation-which-is-best-for-your-business/",
                        "thumbnailUrl": "https://i.ytimg.com/vi/CIueyW-pWhQ/default.jpg",
                        "uploadDate": "2020-12-11T17:47:29Z",
                        "duration": "PT1M20S",
                        "embedUrl": "https://www.youtube.com/embed/CIueyW-pWhQ",
                        "interactionCount": "9"
                    }`}
                </script>
            </Helmet>
		</Layout>
	);
};

export default ComparisonChart;
