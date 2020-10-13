import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/sales-tax-calculator/about";
import Calculator from "../atomic/sections/learning-center-entity/sales-tax-calculator/calculator";
import TaxRates from "../atomic/sections/learning-center-entity/sales-tax-calculator/tax-rates";
import Explore from "../atomic/sections/learning-center-entity/sales-tax-calculator/explore";
import Articles from "../atomic/sections/articles";
//Texts
import { top, about, calculator, taxRates, explore } from "../static/learning-center-entity/sales-tax-calculator";

const SalesTaxCalculator = () => (
  <Layout>
    <SEO title="Sales Tax Calculator | Check Your State Sales Tax Rate" description="Need to know what sales tax to charge your customers? Our easy-to-use calculator helps you look up the sales tax rates for your area. Try it now." />
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
    <Explore content={explore} />
    <Articles />
  </Layout>
);

export default SalesTaxCalculator;
