import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/change-registered-agent/about";
import Help from "../../atomic/sections/manage-your-company/change-registered-agent/help";
import Faq from "../../atomic/sections/manage-your-company/change-registered-agent/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import {
  top,
  about,
  help,
  faq,
} from "../../static/manage-your-company/change-registered-agent";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";
import { HeadingP } from "../../atomic/atoms/typography/heading-to-p";

const ChangeOfRegisteredAgent = () => (
  <Layout>
    <SEO
      title="Change Your Registered Agent | How to File a Change of Agent"
      description="Find out how to change your business's Registered Agent with your state, or have Incfile file the forms for you for only $0. Learn more"
    />
    <ProductSchema
      productUrl={`${process.env.ORDER_URL}/change-agent.php`}
      productName="Change of Agent"
      productPrice={servicePrice.coa}
      productDescription="Officially change your Registered Agent with your Secretary of State."
    />
    <Top
      imageName="mrs-bulb-change-agent"
      imageAlt="change of agent"
      ovalColor="lightpurple"
    >
      <h1>{top.header}</h1>
      <HeadingP size={2} big left>
        {top.text}
      </HeadingP>
      <Buttonsbox>
        <Button
          externalLink
          content={top.button[0]}
          theme="primary56"
          width="200px"
          arrow
        />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <Faq content={faq} />
    <Benefits page="change-of-registered-agent" />
    <Articles oval categoryId={5119} />
  </Layout>
);

export default ChangeOfRegisteredAgent;
