import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/entity-search/delaware-entity-search/about";
import Search from "../../atomic/sections/entity-search/delaware-entity-search/search";
import Faq from "../../atomic/sections/entity-search/delaware-entity-search/faq";
//Texts
import { top, about, search, faq } from "../../static/entity-search/delaware-entity-search";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="Daleware Entity Search" description="aaa" />
    <Top imageName="mr-bulb-state-ilustrations-1722" imageAlt="Mrs Bulb and with checklist" ovalColor="green" headlineWidth="700" textWidth="520">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Search content={search} />
    <Faq content={faq} />
  </Layout>
);

export default GeneralResearchTopics;
