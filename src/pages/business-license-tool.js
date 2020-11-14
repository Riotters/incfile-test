import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/business-license-req/about";
import SearchTool from "../atomic/sections/learning-center-entity/business-license-req/search-tool";
import Articles from "../components/partials/sections/articles";
//Texts
import { top, about, searchTool, businessIndustryList } from "../static/learning-center-entity/business-license-req";

const BusinessLicenseReq = () => (
  <Layout>
    <SEO title="Do I Need a Business License? Business License Search Tool" description="Wondering what licenses you need to start your business? Incfile's license search tool tells you what the requirements are for your industry. Try it now." />
    <Top imageName="mrs-bulb-business-license-requirements" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="460" textWidth="480">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <SearchTool content={searchTool} businessIndustryList={businessIndustryList} />
    <Articles />
  </Layout>
);

export default BusinessLicenseReq;
