import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import { color } from "../../components/styles/colors";
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../atomic/states-llc/home-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import HowToGuide from "../../atomic/states-llc/georgia/how-to-guide";

// Content
import { HomePageContent } from "../../static/states-llc/georgia/home";
import { tabPages, rocket } from "../../static/states-llc/georgia/general";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`;

function GeorgiaLLCIndex() {
  return (
    <Layout>
      <SEO title="LLCs in Georgia | Guide to Forming an LLC in Georgia" description="Ready to form your Georgia LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />

      <LinearBgHeader imageMapName="tx-map-2x">
        <HomeHeader content={HomePageContent.header} />
      </LinearBgHeader>

      <WrapperContent>
        <Wrapper>
          <LeftTabPages content={tabPages} />
          <MainPageContent>
            <HowToGuide content={HomePageContent.content} />
          </MainPageContent>
        </Wrapper>
      </WrapperContent>

      <Rocket content={rocket} />
    </Layout>
  );
}

export default GeorgiaLLCIndex;