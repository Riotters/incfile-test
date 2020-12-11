import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/s-corp-tax-calculator/about";
import Differences from "../atomic/sections/learning-center-entity/s-corp-tax-calculator/differences";
import Calculator from "../atomic/sections/learning-center-entity/s-corp-tax-calculator/calculator";
import Compare from "../atomic/sections/learning-center-entity/s-corp-tax-calculator/compare";
//Texts
import { top, about, differences, calculator, compare } from "../static/learning-center-entity/s-corp-tax-calculator";

const SCorpTaxCalculator = () => (
  <Layout>
    <SEO title="S-Corporation Tax Calculator" description="Use the S-Corporaton Tax Calculator to compare self employment tax savings over a sole proprietorship" />
    <Top imageName="mr-bulb-s-corp-tax-0214" imageAlt="" ovalColor="darkblue" contentWidth="55" headlineWidth="700" imageMobilePosition="0">
      <h1>{top.header}</h1>
      <RatingRow topMargin="48">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Differences content={differences} paragraphHeader />
    <Calculator content={calculator} />
    <Compare content={compare} />
  </Layout>
);

export default SCorpTaxCalculator;
