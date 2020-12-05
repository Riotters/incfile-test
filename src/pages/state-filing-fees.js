import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import Layout from "../components/layout";
import FeesTable from "../atomic/sections/state-filing-fees/fees-table";
import Rocket from "../atomic/sections/rocket";

const StateFilingFees = () => (
  <Layout>
    <SEO title="LLC Filing Fees By State | How Much Does an LLC Cost?" description="Want to know the cost for filing an LLC or Corporation in any state? Easily research and compare fees state-by-state with this tool." />
    <Top imageName="state-filling-fees-main-image" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" textWidth="530">
      <h1>Review State Filing Fees & LLC Costs</h1>
      <p>Filing costs for forming an LLC or corporation can vary from state to state. Use this filing fees tool to easily research and compare state fees before you start your business.</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>

    <FeesTable />
    {/* <IncludedInAll content={content.included} /> */}
    <Rocket text1="Launch Your Business Only $0 + State Fee." text2="Clear Pricing. No Contracts. No Surprises." textButton="See Detailed Pricing" />
  </Layout>
);

export default StateFilingFees;
