import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/entity-search/california-entity-search/about";
import Search from "../atomic/sections/entity-search/california-entity-search/search";
import NewRules from "../atomic/sections/entity-search/california-entity-search/new-rules";
import LLCRules from "../atomic/sections/entity-search/california-entity-search/specific-rules";
import CorpRules from "../atomic/sections/entity-search/california-entity-search/specific-rules";
import StartBusiness from "../atomic/sections/entity-search/california-entity-search/start-business";
import Faq from "../atomic/sections/entity-search/california-entity-search/faq";
//Texts
import { top, about, search, newRules, llcRules, corporationRules, startBusiness, faq } from "../static/entity-search/california-entity-search";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="California Business Entity Search | Is Your Name Available?" description="Starting a new business in CA? Check to see if your preferred business name is available with Incfile’s easy name search tool. Try it now." />
    <Top imageName="mrs-bulb-state-ilustrations-9948" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="700" textWidth="400">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Search content={search} />
    <NewRules content={newRules} />
    <LLCRules content={llcRules} />
    <CorpRules content={corporationRules} />
    <StartBusiness content={startBusiness} />
    <Faq content={faq} />
  </Layout>
);

export default GeneralResearchTopics;