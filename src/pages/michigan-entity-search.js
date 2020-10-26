import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/entity-search/michigan-entity-search/about";
import Search from "../atomic/sections/entity-search/michigan-entity-search/search";
import NewRules from "../atomic/sections/entity-search/michigan-entity-search/new-rules";
import OtherRules from "../atomic/sections/entity-search/michigan-entity-search/other-rules";
import StartBusiness from "../atomic/sections/entity-search/michigan-entity-search/start-business";
import Faq from "../atomic/sections/entity-search/delaware-entity-search/faq";
//Texts
import { top, about, search, newRules, otherRules, startBusiness, faq } from "../static/entity-search/michigan-entity-search";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="Michigan Business Entity Search | Is Your Name Available?" description="Starting a new business in MI? Check to see if your preferred business name is available with Incfile’s easy name search tool. Try it now." />
    <Top imageName="mrs-bulb-state-ilustrations-9948" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="700" textWidth="520">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Search content={search} />
    <NewRules content={newRules} />
    <OtherRules content={otherRules} />
    <StartBusiness content={startBusiness} />
    <Faq content={faq} />
  </Layout>
);

export default GeneralResearchTopics;
