import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import Steps from "../atomic/sections/other/how-it-works/steps";
import Next from "../atomic/sections/other/how-it-works/next";
import Essentials from "../atomic/sections/other/how-it-works/essentials";
import Info from "../atomic/sections/other/how-it-works/info";
//Texts
import { top, steps, next, essentials, info } from "../static/other/how-it-works";

const GeneralResearchTopics = () => (
  <Layout>
    <SEO title="How Incfile Works | Using a Business Formation Service" description="LLC formation, registered agent, compliance, and startup services — all in one place.  Learn how to make forming a business easy." />
    <Top imageName="mr-bulb-how-it-works-2002" imageAlt="how it works" ovalColor="purple-2" headlineWidth="500" textWidth="800">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <RatingRow topMargin="0">
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <Steps content={steps} />
    <Next content={next} />
    <Essentials content={essentials} />
    <Info content={info} />
  </Layout>
);

export default GeneralResearchTopics;
