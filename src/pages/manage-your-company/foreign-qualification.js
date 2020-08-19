import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/foreign-qualification/about";
import Basics from "../../atomic/sections/manage-your-company/foreign-qualification/basics";
import Help from "../../atomic/sections/manage-your-company/foreign-qualification/help";
import Faq from "../../atomic/sections/manage-your-company/foreign-qualification/faq";
import Articles from "../../components/partials/sections/articles";
import Benefits from "../../components/partials/sections/benefits";
//Text
import { top, about, basics, help, faq } from "../../static/manage-your-company/foreign-qualification"

const ForeignQualification = () => (
  <Layout>
    <SEO title="File Foreign LLC Qualification | Certificate of Authority" description="To do business in another state, you may need to file a foreign qualification for a certificate of authority. Have Incfile file the paperwork for you." />
    <Top imageName="mrs-bulb-foreign-qualification" imageAlt="Mrs Bulb choosing a destination of his next business on a map of USA" headlineWidth="515" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Basics content={basics} />
    <Help content={help} />
    <Benefits />
    <Faq content={faq} />
    <Articles />
  </Layout>
);

export default ForeignQualification;
