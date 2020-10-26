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
import About from "../atomic/sections/learning-center-entity/start-a-business/about";
import CheckType from "../atomic/sections/learning-center-entity/start-a-business/check-type";
import BusinessStructure from "../atomic/sections/learning-center-entity/start-a-business/business-structure";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
//Texts
import { top, about, checkType, businessStructure, launchBusiness } from "../static/learning-center-entity/start-a-business";

const HelpCenter = () => (
  <Layout>
    <SEO
      title="Business Ideas & Tips - Guides to Starting Your Own Business"
      description='From running an Amazon business to opening your own restaurant, our "Start a Business" guides have ideas, industry tips, and more. Start your business now!' />
    <Top imageName="mr-bulb-business-startup-guides" imageAlt="Mrs Bulb and with checklist" ovalColor="sun">
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
    <CheckType content={checkType} />
    <BusinessStructure content={businessStructure} />
    <Rocket content={launchBusiness} />
  </Layout>
);

export default HelpCenter;
