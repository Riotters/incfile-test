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
import About from "../../atomic/sections/manage-your-company/annual-report/about";
import Help from "../../atomic/sections/manage-your-company/annual-report/help";
import Faq from "../../atomic/sections/manage-your-company/annual-report/faq";
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/annual-report";

const AnnualReport = () => (
  <Layout>
    <SEO title="File LLC Annual Report | Business Annual Reports | Information on Filling Annual Business Reports" description="File LLC and Corporation Annual Reports using Incfile for all your document needs." />
    <Top imageName="mrs-bulb-annual-report" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Help content={help} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default AnnualReport;
