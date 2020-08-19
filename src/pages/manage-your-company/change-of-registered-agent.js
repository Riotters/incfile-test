import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/change-registered-agent/about"
import Help from "../../atomic/sections/manage-your-company/change-registered-agent/help"
import Faq from "../../atomic/sections/manage-your-company/change-registered-agent/faq"
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, help, faq } from "../../static/manage-your-company/change-registered-agent"

const ChangeOfRegisteredAgent = () => (
  <Layout>
    <SEO title="Change Your Registered Agent | How to File a Change of Agent" description="Find out how to change your business's registered agent with your state, or have Incfile file the forms for you for only $0. Learn more" />
    <Top imageName="mrs-bulb-change-agent" imageAlt="Mrs Bulb is changing her agent" ovalColor="lightpurple">
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

export default ChangeOfRegisteredAgent;
