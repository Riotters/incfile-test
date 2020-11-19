import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import ContentHeader from "../../atomic/states-llc/taxes-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../sections/rocket";
import BusinessNames from "../../atomic/states-llc/illinois/business-names";

// Content
import { businessNamesContent } from "../../static/states-llc/illinois/business-names";
import { tabPages, rocket } from "../../static/states-llc/illinois/general";

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

const IllinoisBusinessNames = () => (
  <Layout>
    <SEO title="Illinois Business Search | How to Name Your TX LLC" description="Learn what you need to know about naming an LLC in Illinois with Incfile's helpful resources. Pick your perfect business name today!" />

    <LinearBgHeader position="to top" imageMapName="tx-map-2x">
      <ContentHeader content={businessNamesContent.header} />
    </LinearBgHeader>

    <WrapperContent>
      <Wrapper>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
          <BusinessNames content={businessNamesContent.content} />
        </MainPageContent>
      </Wrapper>
    </WrapperContent>

    <Rocket url="?entityType=LLC&entityState=IL" />
  </Layout>
);

export default IllinoisBusinessNames;
