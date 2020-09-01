import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/state-information-california/about";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import Requirements from "../../atomic/sections/learning-center-entity/state-information-california/requirements";
import LearnMore from "../../atomic/sections/learning-center-entity/state-information-california/learn-more";
import QuickLinks from "../../atomic/sections/learning-center-entity/state-information-california/quick-links";
import Cta from "../../atomic/sections/general/cta";
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, launchBusiness, requirements, learnMore, quickLinks } from "../../static/learning-center-entity/state-information-california";

const StateFilingTimes = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-corporation-california-8302" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" textWidth="530">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.buttons[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Rocket content={launchBusiness} />
    <Requirements content={requirements} />
    <LearnMore content={learnMore} />
    <QuickLinks content={quickLinks} />
    <Cta />
    <Articles />
  </Layout>
);

export default StateFilingTimes;
