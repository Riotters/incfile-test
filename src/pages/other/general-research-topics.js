import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../../atomic/partials/top";
import General from "../../atomic/sections/other/general-research-topics/general";
import Service from "../../atomic/sections/other/general-research-topics/service";
import Tools from "../../atomic/sections/other/general-research-topics/tools";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
//Texts
import { top, general, service, tools, rocket } from "../../static/other/general-research-topics";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-question-7726" imageAlt="Mrs Bulb and with checklist" ovalColor="blue" headlineWidth="500" textWidth="800">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <General content={general} />
    <Service content={service} />
    <Tools content={tools} />
    <Rocket content={rocket} />
  </Layout>
);

export default GeneralResearchTopics;
