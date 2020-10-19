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
import BusinessTaxesSection from "../../atomic/states-llc/california/business-taxes";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";

// Content
import { businessTaxesPageContent } from "../../static/states-llc/california/business-taxes";
import { tabPages, rocket } from "../../static/states-llc/california/general";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }
`;

const CaliforniaBusinessTaxes = () => (
  <Layout>
    <SEO title="California Business & Sales Taxes | Incfile.com" description="Do you have an California LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more." />

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

    <Rocket content={rocket} />
  </Layout>
);

export default CaliforniaBusinessTaxes;
