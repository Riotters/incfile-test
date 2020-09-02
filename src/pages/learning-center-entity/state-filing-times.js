import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import Tables from "../../atomic/sections/learning-center-entity/state-filing-times/tables";
import Cta from "../../atomic/sections/general/cta";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, tables } from "../../static/learning-center-entity/state-filing-times";

const StateFilingTimes = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-state-filing-times-3289" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" textWidth="530">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <Tables content={tables} />
    <Cta />
    <Articles />
  </Layout>
);

export default StateFilingTimes;
