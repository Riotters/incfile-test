import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/sales-tax-calculator/about";
import Calculator from "../../atomic/sections/learning-center-entity/sales-tax-calculator/calculator";
import TaxRates from "../../atomic/sections/learning-center-entity/sales-tax-calculator/tax-rates";
//Texts
import { top, about, calculator, taxRates } from "../../static/learning-center-entity/sales-tax-calculator";

const SalesTaxCalculator = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-sales-tax-calculator-8937" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Calculator content={calculator} />
    <TaxRates content={taxRates} />
  </Layout>
);

export default SalesTaxCalculator;
