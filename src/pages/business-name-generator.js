import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopSection from "../atomic/sections/other/business-name-generator/top";
import UniqueSection from "../atomic/sections/other/business-name-generator/unique";
import WhyBrandNameSection from "../atomic/sections/other/business-name-generator/why-brand-name";
import Brainstorm from "../atomic/sections/other/business-name-generator/brainstorm";

// text
import {
	brainstorm,
	seo,
	top,
	whyBrandName,
} from "../static/other/business-name-generator";
import Characteristics from "../atomic/sections/other/business-name-generator/characteristics";

const BusinessNameGenerator = () => (
	<Layout>
		<SEO title={seo.title} description={seo.desc} />
		<TopSection content={top} />
		<WhyBrandNameSection content={whyBrandName} />
		<UniqueSection />
		<Brainstorm content={brainstorm} />
		<Characteristics content={brainstorm} />
	</Layout>
);

export default BusinessNameGenerator;
