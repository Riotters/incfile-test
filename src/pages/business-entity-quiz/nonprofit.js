import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Helmet } from "react-helmet";
import {
	choose,
	top,
	about,
	types,
	prosAndCons,
	requirements,
	faq,
} from "../../static/business-entity-quiz/nonprofit";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import About from "../../atomic/sections/business-entity-quiz/nonprofit/about";
import WhatIs from "../../atomic/sections/business-entity-quiz/nonprofit/what-is";
import ProsAndCons from "../../atomic/sections/business-entity-quiz/nonprofit/pros-and-cons";
import Types from "../../atomic/sections/business-entity-quiz/nonprofit/types";
import Checklist from "../../atomic/sections/business-entity-quiz/llc/checklist";
import Requirements from "../../atomic/sections/business-entity-quiz/nonprofit/requirements";
import Faq from "../../atomic/sections/business-entity-quiz/nonprofit/faq";
import Rocket from "../../atomic/sections/rocket";
// temp //

const BusinessEntityQuizNonprofit = () => (
	<Layout>
		<SEO
			robots="none"
			title="Quiz Result: You Should Form an LLC"
			description="Your answers suggest an LLC is the right business entity for your new business. Learn more about LLCs here."
		/>
		<TopSection content={top} padding="220px 0" />
		<About content={about} />
		<WhatIs
		//content={whatIs}
		/>
		{/* <ChooseEntitySection content={choose} /> */}
		<ProsAndCons content={prosAndCons} />
		<Types content={types} />
		<Requirements content={requirements} />
		<Faq content={faq} />
		<Rocket />

		<Helmet>
			<script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "What Does LLC Mean by Incfile",
                    "description": "LLC stands for Limited Liability Company and it means exactly what it says. Forming an LLC limits the liability or risk your personal assets have related to your business. Learn more",
                    "thumbnailUrl": "https://i.ytimg.com/vi/ZuadTwgek5U/default.jpg",
                    "uploadDate": "2020-04-26T19:50:16.000Z",
                    "duration": "PT1M25S",
                    "embedUrl": "https://www.youtube.com/embed/ZuadTwgek5U",
                    "interactionCount": "8"
                }
            `}</script>
		</Helmet>
	</Layout>
);

export default BusinessEntityQuizNonprofit;
