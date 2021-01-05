import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import TaxesHeader from "../../atomic/states-llc/taxes-header";
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import RegisteredAgentSection from "../../atomic/states-llc/georgia/registered-agents";
import Rocket from "../../atomic/sections/rocket";

// Content
import { agentPageContent } from "../../static/states-llc/georgia/ra";
import { tabPages } from "../../static/states-llc/georgia/general";
import RASchemaGA from "../../atomic/states-llc/georgia/ra-ga-schema";

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

const RegisteredAgentGeorgia = () => (
  <Layout>
    <SEO
      title="Registered Agents for Your Georgia LLC | Incfile.com"
      description="Do you need a Registered Agent for your Georgia LLC? Learn what Registered Agents do and how to get one with Incfile's helpful guide."
    />

    <RASchemaGA />

    <LinearBgHeader imageMapName="tx-map-2x">
      <TaxesHeader content={agentPageContent.header} />
    </LinearBgHeader>

    <WrapperContent>
      <Wrapper>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
          <RegisteredAgentSection content={agentPageContent.content} />
        </MainPageContent>
      </Wrapper>
    </WrapperContent>

    <Rocket url="?entityType=LLC&entityState=GA" />
  </Layout>
);

export default RegisteredAgentGeorgia;
