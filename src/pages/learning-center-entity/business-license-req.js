import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/business-license-req/about"
import SearchTool from "../../atomic/sections/learning-center-entity/business-license-req/search-tool"
import Help from "../../atomic/sections/manage-your-company/annual-report/help"
import Categories from "../../atomic/sections/learning-center-entity/help-center/categories"
import Tools from "../../atomic/sections/learning-center-entity/help-center/tools"
import Service from "../../atomic/sections/learning-center-entity/help-center/service"
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket"
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, about, searchTool, help, faq, rocket, categories, service, tools } from "../../static/learning-center-enitity/business-license-req"

const BusinessLicenseReq = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-license-requirements" imageAlt="Mrs Bulb and with checklist" ovalColor="sun">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <SearchTool content={searchTool} />
    <Articles />
  </Layout>
);

export default BusinessLicenseReq;
