import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
	top,
	about,
	characteristics,
	differences,
	prosAndCons,
	faq,
} from "../../static/business-entity-quiz/scorporation";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import About from "../../atomic/sections/business-entity-quiz/scorporation/about";
import WhatIs from "../../atomic/sections/business-entity-quiz/scorporation/what-is";
import Characteristics from "../../atomic/sections/business-entity-quiz/scorporation/characteristics";
import Differences from "../../atomic/sections/business-entity-quiz/scorporation/differences";
import ProsAndCons from "../../atomic/sections/business-entity-quiz/scorporation/pros-and-cons";
import Checklist from "../../atomic/sections/business-entity-quiz/llc/checklist";
import Requirements from "../../atomic/sections/business-entity-quiz/llc/requirements";
import Rocket from "../../atomic/sections/rocket";

const BusinessEntityQuizSCorp = () => (
	<Layout>
		<SEO
			title="Quiz Result: You Should Form an LLC"
			description="Your answers suggest an LLC is the right business entity for your new business. Learn more about LLCs here."
		/>
		<TopSection content={top} padding="220px 0" />
		<About content={about} />
		<WhatIs />
		<Characteristics content={characteristics} />
		<Differences content={differences} />
		<ProsAndCons content={prosAndCons} />
		<Rocket />
	</Layout>
);

export default BusinessEntityQuizSCorp;
