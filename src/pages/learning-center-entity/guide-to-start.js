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
import About from "../../atomic/sections/learning-center-entity/guide-to-start/about";
import TableOfContent from "../../atomic/sections/learning-center-entity/guide-to-start/table-of-content";
import NeedMore from "../../atomic/sections/learning-center-entity/guide-to-start/need-more";
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, about, tableOfContent, needMore } from "../../static/learning-center-enitity/guide-to-start";

const GuideToStart = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-complete-guide-to-starting-a-business" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue">
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
    <TableOfContent content={tableOfContent} />
    <NeedMore content={needMore} />
  </Layout>
);

export default GuideToStart;
