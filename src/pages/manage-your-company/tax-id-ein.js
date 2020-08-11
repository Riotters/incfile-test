import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/tax-id-ein/about";
import Help from "../../atomic/sections/manage-your-company/tax-id-ein/help";
import Faq from "../../atomic/sections/manage-your-company/tax-id-ein/faq";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Articles from "../../components/partials/sections/articles";
import Benefits from "../../atomic/sections/benefits";
import { top, about, help, faq } from "../../static/manage-your-company/ein-tax-id";

const TaxIdEin = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-tax-number" imageAlt="Mrs Bulb with numbers" ovalColor="blackpink">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default TaxIdEin;
