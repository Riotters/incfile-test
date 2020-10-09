import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import Listings from "../../atomic/sections/other/arizona-publication-newspaper-list/listings";
//Texts
import { top, listings, start, industry, isCatch } from "../../static/other/arizona-publication-newspaper-list";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-arizona-publication-newspaper-list-8115" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" contentWidth="52" headlineWidth="800">
      <h1>{top.header}</h1>
      <RatingRow topMargin="8">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <Listings content={listings} />
  </Layout>
);

export default GeneralResearchTopics;
