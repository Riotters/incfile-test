import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import Help from "../atomic/sections/manage-your-company/annual-report/help";
import About from "../atomic/sections/learning-center-entity/registered-agents/about";
import WhatAgentDo from "../atomic/sections/learning-center-entity/registered-agents/what-agent-do";
import OtherNames from "../atomic/sections/learning-center-entity/registered-agents/other-names";
import Need from "../atomic/sections/learning-center-entity/registered-agents/need";
import Requirements from "../atomic/sections/learning-center-entity/registered-agents/requirements";
import WhatHappens from "../atomic/sections/learning-center-entity/registered-agents/what-happens";
import Faq from "../atomic/sections/learning-center-entity/registered-agents/faq";
import Service from "../atomic/sections/learning-center-entity/registered-agents/service";
import LearnMore from "../atomic/sections/learning-center-entity/registered-agents/learn-more";
import Articles from "../atomic/sections/articles";
//Texts
import { top, about, whatAgentDo, otherNames, need, requirements, whatHappens, faq, service, learnMore } from "../static/learning-center-entity/registered-agents";

const RegisteredAgents = () => (
  <Layout>
    <SEO title="What is a Registered Agent? Everything You Need to Know" description="Every formal business entity in the United States, whether it’s an LLC, S corp or C corp, must have a Registered Agent. Learn more." />
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
    <Requirements content={requirements} />
    <WhatHappens content={whatHappens} />
    <Faq content={faq} />
    <Service content={service} />
    <LearnMore content={learnMore} />
    <Articles />
  </Layout>
);

export default RegisteredAgents;
