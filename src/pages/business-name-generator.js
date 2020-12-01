import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TopSection from "../atomic/sections/other/business-name-generator/top";
import UniqueSection from "../atomic/sections/other/business-name-generator/unique";
import WhyBrandNameSection from "../atomic/sections/other/business-name-generator/why-brand-name";

// text
import {
  seo,
  top,
  whyBrandName,
} from "../static/other/business-name-generator";

const BusinessNameGenerator = () => (
  <Layout>
    <SEO title={seo.title} description={seo.desc} />
    <TopSection content={top} />
    <WhyBrandNameSection content={whyBrandName} />
    <UniqueSection />
  </Layout>
);

export default BusinessNameGenerator;
