import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import Help from "../../atomic/sections/manage-your-company/annual-report/help";
import About from "../../atomic/sections/learning-center-entity/registered-agents/about";
import WhatAgentDo from "../../atomic/sections/learning-center-entity/registered-agents/what-agent-do";
import OtherNames from "../../atomic/sections/learning-center-entity/registered-agents/other-names";
import Need from "../../atomic/sections/learning-center-entity/registered-agents/need";
import CheckType from "../../atomic/sections/learning-center-entity/start-a-business/check-type";
import BusinessStructure from "../../atomic/sections/learning-center-entity/start-a-business/business-structure";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, about, whatAgentDo, otherNames, need } from "../../static/learning-center-entity/registered-agents";

const RegisteredAgents = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-registered-agents" imageAlt="Mrs Bulb and with checklist" ovalColor="sun">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.buttons[0]} theme="primary56" arrow />
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <WhatAgentDo content={whatAgentDo} />
    <OtherNames content={otherNames} />
    <Need content={need} />
  </Layout>
);

export default RegisteredAgents;
