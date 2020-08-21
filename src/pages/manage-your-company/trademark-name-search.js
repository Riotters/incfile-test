import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/trademark-name-search/about";
import Help from "../../atomic/sections/manage-your-company/trademark-name-search/help";
import HowItWorks from "../../atomic/sections/manage-your-company/trademark-name-search/how-it-works";
import Faq from "../../atomic/sections/manage-your-company/trademark-name-search/faq";
import Benefits from "../../atomic/sections/benefits";
import Cta from "../../atomic/sections/manage-your-company/trademark-name-search/cta";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, help, howitworks, faq, cta } from "../../static/manage-your-company/trademark-name-search";

const TrademarkNameSearch = () => (
  <Layout>
    <SEO title="File a Trademark | Trademark Search & Registration" description="Protect your brand and reputation with a legal trademark. From trademark searches to registration, Incfile makes it easy. Learn more." />
    <Top imageName="mrs-bulb-trademark" imageAlt="Mr Bulb holding a certificate and tossing an orginal and a trademark sign" ovalColor="darkblue">
      <h1 style={{ maxWidth: "100%" }}>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <HowItWorks content={howitworks} />
    <Benefits />
    <Faq content={faq} />
    <Cta content={cta} />
    <Articles />
  </Layout>
);

export default TrademarkNameSearch;
