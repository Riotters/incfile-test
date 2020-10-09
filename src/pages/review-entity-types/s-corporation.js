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
import About from "../../atomic/sections/review-entity-types/s-corporation/about";
import Adventages from "../../atomic/sections/review-entity-types/s-corporation/adventages";
import Disdventages from "../../atomic/sections/review-entity-types/s-corporation/disadventages";
import Requirements from "../../atomic/sections/review-entity-types/s-corporation/requirements";
import Differences from "../../atomic/sections/review-entity-types/s-corporation/differences";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Faq from "../../atomic/sections/review-entity-types/s-corporation/faq";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, adventages, disadventages, differences, requirements, rocket, faq } from "../../static/review-entity-types/s-corporation";

const SCorporation = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-s-corp-calculator-4821" imageAlt="Mrs Bulb and with checklist" ovalColor="purple" textWidth="550">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
        <Button content={top.button[1]} theme="secondary56" width="200px" arrow2 margin="16px 0 0 0" marginMD="0 0 0 16px" />
      </Buttonsbox>
      <RatingRow>
        <CartBlock />
        <RatingBlock />
      </RatingRow>
    </Top>
    <About content={about} />
    <Adventages content={adventages} />
    <Disdventages content={disadventages} />
    <Requirements content={requirements} />
    <Differences content={differences} />
    <Rocket content={rocket} />
    <Faq content={faq} />
    <Articles />
  </Layout>
);

export default SCorporation;
