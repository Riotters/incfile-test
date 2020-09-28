import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/other/new-jersey-entity-search/about";
import Search from "../../atomic/sections/other/new-jersey-entity-search/search";
import NewRules from "../../atomic/sections/other/new-jersey-entity-search/new-rules";
import SpecificRules from "../../atomic/sections/other/new-jersey-entity-search/specific-rules";
import StartBusiness from "../../atomic/sections/other/new-jersey-entity-search/start-business";
import Faq from "../../atomic/sections/other/new-jersey-entity-search/faq";
//Texts
import { top, about, search, newRules, specificRules, startBusiness, faq } from "../../static/other/new-jersey-entity-search";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="New Jersey Entity Search" description="aaa" />
    <Top imageName="mr-bulb-corporation-california-8302" imageAlt="Mrs Bulb and with checklist" ovalColor="love" headlineWidth="560" textWidth="500">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Search content={search} />
    <NewRules content={newRules} />
    <SpecificRules content={specificRules} />
    <StartBusiness content={startBusiness} />
    <Faq content={faq} />
  </Layout>
);

export default GeneralResearchTopics;
