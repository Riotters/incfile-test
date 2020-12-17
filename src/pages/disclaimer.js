import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

//Sections
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import LegalSections from "../atomic/sections/legal-disclaimer/legal-sections";

const CompareStateTimes = () => (
	<Layout>
		<SEO
			title="Incfile Disclaimer Page"
			description="Incfile Legal Disclaimer "
		/>
		<Top content={{header: "Legal Disclaimer"}} />
		<LegalSections />
	</Layout>
);

export default CompareStateTimes;
