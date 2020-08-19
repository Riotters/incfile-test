import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/tax-id-ein/about";
import Help from "../../atomic/sections/manage-your-company/tax-id-ein/help";
import Faq from "../../atomic/sections/manage-your-company/tax-id-ein/faq";
import Articles from "../../components/partials/sections/articles";
import Benefits from "../../atomic/sections/benefits";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/ein-tax-id";

const TaxIdEin = () => (
  <Layout>
    <SEO title="EIN / Tax ID Number | How to Apply for a Federal EIN" description="Also known as a “Tax ID number,” the EIN is a business federal tax ID that works like a Social Security Number for your business. Learn more." />
    <Top imageName="mrs-bulb-tax-number" imageAlt="Mrs Bulb with tax numbers" ovalColor="blackpink">
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
