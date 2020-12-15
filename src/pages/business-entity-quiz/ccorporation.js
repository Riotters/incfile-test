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
			title="Quiz Results: You Should Form a C Corp!"
			description="Your answers suggest a C corporation is the right business entity for your new business. Learn more about C Corps here."
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
	</Layout>
);

export default BusinessEntityQuizCCorp;
