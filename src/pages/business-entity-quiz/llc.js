import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
	choose,
	top,
	about,
	types,
	prosAndCons,
	faq,
} from "../../static/business-entity-quiz/llc";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import About from "../../atomic/sections/business-entity-quiz/llc/about";
import WhatIs from "../../atomic/sections/business-entity-quiz/llc/what-is";
import Types from "../../atomic/sections/business-entity-quiz/llc/types";
import ProsAndCons from "../../atomic/sections/business-entity-quiz/llc/pros-and-cons";
import Checklist from "../../atomic/sections/business-entity-quiz/llc/checklist";
import Requirements from "../../atomic/sections/business-entity-quiz/llc/requirements";
import Faq from "../../atomic/sections/business-entity-quiz/llc/faq";
import ChooseEntitySection from "../../atomic/sections/learning-center-entity/business-entity-quiz/choose-entity";
// temp //

const BusinessEntityQuizLLC = () => (
	<Layout>
		<SEO
			title="Quiz Result: You Should Form an LLC"
			description="Your answers suggest an LLC is the right business entity for your new business. Learn more about LLCs here."
		/>
		<TopSection content={top} padding="220px 0" />
		<About content={about} />
		<WhatIs
		//content={whatIs}
		/>
		{/* <ChooseEntitySection content={choose} /> */}
		<Types content={types} />
		<ProsAndCons content={prosAndCons} />
		<Requirements
		//content={requirements}
		/>
		<Faq content={faq} />
		<Checklist />
	</Layout>
);

export default BusinessEntityQuizLLC;
