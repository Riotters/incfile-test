import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../atomic/states-llc/home-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import HowToGuide from "../../atomic/states-llc/texas/how-to-guide";

// Content
import { HomePageContent } from "../../static/states-llc/texas/home";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

import { getFullPricesAndFilings } from "../../api/Api";

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

function TexasLLCIndex() {
  const [dataApi, setDataApi] = React.useState({});

  React.useEffect(() => {
    getFullPricesAndFilings("Texas").then((data) => {
      setDataApi(data);
    });
  }, []);

  return (
    <Layout>
      <SEO title="LLCs in Texas | Guide to Forming an LLC in Texas" description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />

      <LinearBgHeader imageMapName="tx-map-2x">
        <HomeHeader content={HomePageContent.header} data={dataApi} />
      </LinearBgHeader>

      <WrapperContent>
        <Wrapper>
          <LeftTabPages content={tabPages} />
          <MainPageContent>
            <HowToGuide content={HomePageContent.content} data={dataApi} />
          </MainPageContent>
        </Wrapper>
      </WrapperContent>

      <Rocket url="?entityType=LLC&entityState=TX" />
    </Layout>
  );
}

export default TexasLLCIndex;
