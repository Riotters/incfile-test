import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import Listings from "../atomic/sections/other/arizona-publication-newspaper-list/listings";
//Texts
import { top, listings } from "../static/other/arizona-publication-newspaper-list";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="Arizona Newspaper List from the AZ Corporation Commission" description="View the list of publishers that meet the statutory requirements for publishing documents filed with the Arizona Corporation Commission." />
    <Top imageName="mrs-bulb-arizona-publication-newspaper-list-8115" imageAlt="arizona corporation commission" ovalColor="purple-2" contentWidth="52" headlineWidth="800">
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
