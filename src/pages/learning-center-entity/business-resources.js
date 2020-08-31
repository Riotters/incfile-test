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
import About from "../../atomic/sections/learning-center-entity/business-resources/about";
import Resources from "../../atomic/sections/learning-center-entity/business-resources/resources";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, resources } from "../../static/learning-center-entity/business-resources";

const BusinessResources = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-business-downloads-tools-7829" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" headlineWidth="550">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Resources content={resources} />
    <Articles />
  </Layout>
);

export default BusinessResources;
