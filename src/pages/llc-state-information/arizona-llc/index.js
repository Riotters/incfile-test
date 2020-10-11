import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import styled from "styled-components";

// Components
import { color } from "../../../components/styles/colors";
import LinearBgHeader from "../../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../../atomic/states-llc/home-header";
import Top from "../../../atomic/partials/top";
import Buttonsbox from "../../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../../atomic/molecules/buttons/button";
import WrapperContent from "../../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../../atomic/states-llc/page-content";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import HowToGuide from "../../../atomic/states-llc/arizona/how-to-guide";
import Requirements from "../../../atomic/sections/learning-center-entity/state-information-california/requirements";
import Compare from "../../../atomic/sections/learning-center-entity/state-information-california/compare";
import Variants from "../../../atomic/sections/learning-center-entity/state-information-california/variants";
import Subscription from "../../../atomic/sections/learning-center-entity/state-information-california/subscription";
import Articles from "../../../atomic/sections/articles";
// Content
import { top, homePageContent, compare, requirements } from "../../../static/states-llc/arizona/home";
import { tabPages, rocket } from "../../../static/states-llc/non-diy/general";
import { learnMore, quickLinks, variants, subscription } from "../../../static/learning-center-entity/state-information-california";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }
`;

function LLCIndex() {
  return (
    <Layout>
      <SEO title="LLCs in Texas | Guide to Forming an LLC in Texas" description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
      <Top imageName="mr-bulb-state-information-llc-7342" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" textWidth="530">
        <h1>{top.header}</h1>
        <p>{top.text}</p>
        <Buttonsbox>
          <Button content={top.buttons[0]} theme="primary56" arrow />
        </Buttonsbox>
      </Top>
      <WrapperContent>
        <Wrapper>
          <LeftTabPages content={tabPages} nonDIY />
          <MainPageContent>
            <HowToGuide content={homePageContent.content} />
          </MainPageContent>
        </Wrapper>
      </WrapperContent>
      <Rocket content={rocket} />
      <Requirements content={requirements} />
      <Variants content={variants} />
      <Compare content={compare} />
      <Subscription content={subscription} />
      <Articles />
    </Layout>
  );
}

export default LLCIndex;
