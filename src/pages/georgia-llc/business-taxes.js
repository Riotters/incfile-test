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
import BusinessTaxesSection from "../../atomic/states-llc/georgia/business-taxes";
import Rocket from "../../sections/rocket";

// Content
import { businessTaxesPageContent } from "../../static/states-llc/georgia/business-taxes";
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

const GeorgiaBusinessTaxes = () => (
  <Layout>
    <SEO title="Georgia Business & Sales Taxes | Incfile.com" description="Do you have an Georgia LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more." />

    <LinearBgHeader imageMapName="tx-map-2x">
      <ContentHeader content={businessTaxesPageContent.header} />
    </LinearBgHeader>

    <WrapperContent>
      <Wrapper>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
          <BusinessTaxesSection content={businessTaxesPageContent.content} />
        </MainPageContent>
      </Wrapper>
    </WrapperContent>

    <Rocket url="?entityType=LLC&entityState=GA" />
  </Layout>
);

export default GeorgiaBusinessTaxes;
