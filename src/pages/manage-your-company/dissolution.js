import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/dissolution/about";
import Requirements from "../../atomic/sections/manage-your-company/dissolution/requirements";
import Faq from "../../atomic/sections/manage-your-company/dissolution/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, requirements, faq } from "../../static/manage-your-company/dissolution";

const Dissolution = () => (
  <Layout>
    <SEO title="Company Dissolution | How to Dissolve an LLC or Corporation" description="To legally close a corporation or LLC, the company must file Articles of Dissolution with the state of incorporation. Learn more." />
    <Top imageName="mrs-bulb-dissolution" imageAlt="Mrs Bulb holding a closed sign" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Requirements content={requirements} />
    <Faq content={faq} />
    <Benefits />
    <Articles />
  </Layout>
);

export default Dissolution;
