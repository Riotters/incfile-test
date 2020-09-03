import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/s-corp-tax-calculator/about";
import Differences from "../../atomic/sections/learning-center-entity/s-corp-tax-calculator/differences";
import Compare from "../../atomic/sections/learning-center-entity/s-corp-tax-calculator/compare";
//Texts
import { top, about, differences, compare } from "../../static/learning-center-entity/s-corp-tax-calculator";

const SCorpTaxCalculator = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-s-corp-tax-0214" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue" contentWidth="55" headlineWidth="700">
      <h1>{top.header}</h1>
      <RatingRow topMargin="48">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Differences content={differences} />
    <Compare content={compare} />
  </Layout>
);

export default SCorpTaxCalculator;
