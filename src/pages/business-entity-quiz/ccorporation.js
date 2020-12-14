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
	differences,
	advancesAndDisadvances,
	howForm,
} from "../../static/business-entity-quiz/ccorporation";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import WhatIs from "../../atomic/sections/business-entity-quiz/ccorporation/what-is";
import HowFormed from "../../atomic/sections/business-entity-quiz/ccorporation/how-formed";
import Types from "../../atomic/sections/business-entity-quiz/llc/types";
import ProsAndCons from "../../atomic/sections/business-entity-quiz/llc/pros-and-cons";
import AdvancesAndDisadvances from "../../atomic/sections/business-entity-quiz/ccorporation/advances-and-disadvances";
import Requirements from "../../atomic/sections/business-entity-quiz/ccorporation/requirements";
import HowForm from "../../atomic/sections/business-entity-quiz/ccorporation/how-form";
import Rocket from "../../atomic/sections/rocket";

const BusinessEntityQuizCCorp = () => (
	<Layout>
		<SEO
			robots="none"
			title="Quiz Result: You Should Form an LLC"
			description="Your answers suggest an LLC is the right business entity for your new business. Learn more about LLCs here."
		/>
		<TopSection content={top} padding="220px 0" />
		<WhatIs />
		<Types content={types} />
		<ProsAndCons content={prosAndCons} />
		<HowFormed content={differences} />
		<AdvancesAndDisadvances content={advancesAndDisadvances} />
		<Requirements
		//content={requirements}
		/>
		<HowForm content={howForm} />
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

export default BusinessEntityQuizCCorp;
