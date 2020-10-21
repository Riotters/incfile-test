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
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import FeeFilingRequirementSection from "../../atomic/states-llc/texas/fee-filing-requirement";

// Content
import { filingFeeAndRequirementContent } from "../../static/states-llc/texas/filingFeeAndRequirement";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

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

const filingFeeAndRequirementPage = () => (
  <Layout>
    <SEO title="Filing Requirements & Fees for Texas LLCs | Incfile.com" description="Make sense of the required forms, fees, and filing procedures for your Texas LLC with Incfile's easy-to-use guide. Read more." />

    <LinearBgHeader position="to top" imageMapName="tx-map-2x">
      <ContentHeader content={filingFeeAndRequirementContent.header} />
    </LinearBgHeader>

    <WrapperContent>
      <Wrapper>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
          <FeeFilingRequirementSection content={filingFeeAndRequirementContent.content} />
        </MainPageContent>
      </Wrapper>
    </WrapperContent>

    <Rocket content={rocket} />
  </Layout>
);

export default filingFeeAndRequirementPage;
