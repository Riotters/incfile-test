import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
	top,
	about,
	whatIs,
	forWho,
	types,
	prosAndCons,
	requirements,
	faq,
} from "../../static/business-entity-quiz/nonprofit";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import About from "../../atomic/sections/business-entity-quiz/nonprofit/about";
import WhatIs from "../../atomic/sections/business-entity-quiz/nonprofit/what-is";
import ForWho from "../../atomic/sections/business-entity-quiz/nonprofit/for-who";
import ProsAndCons from "../../atomic/sections/business-entity-quiz/nonprofit/pros-and-cons";
import Types from "../../atomic/sections/business-entity-quiz/nonprofit/types";
import Requirements from "../../atomic/sections/business-entity-quiz/nonprofit/requirements";
import Faq from "../../atomic/sections/business-entity-quiz/nonprofit/faq";
import Rocket from "../../atomic/sections/rocket";
// temp //

const BusinessEntityQuizNonprofit = () => (
	<Layout>
		<SEO
			robots="none"
			title="Quiz Result: You should form a Nonprofit!"
			description="Your answers suggest a Nonprofit is the right business entity for your new business. Learn more about Nonprofits here."
		/>
		<TopSection content={top} padding="220px 0" />
		<About content={about} />
		<WhatIs content={whatIs} />
		<ForWho content={forWho} />
		<ProsAndCons content={prosAndCons} />
		<Types content={types} />
		<Requirements content={requirements} />
		<Faq content={faq} />
		<Rocket />
	</Layout>
);

export default BusinessEntityQuizNonprofit;
