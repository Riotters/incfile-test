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
import RegisteredAgentSection from "../../atomic/states-llc/florida/registered-agents";
import Rocket from "../../atomic/sections/rocket";

// Content
import { agentPageContent } from "../../static/states-llc/florida/ra";
import { tabPages } from "../../static/states-llc/florida/general";
import RASchemaFL from "../../atomic/states-llc/florida/ra-fl-schema";

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

const RegisteredAgentFlorida = () => (
    <Layout>
        <SEO title="Registered Agents for Your Florida LLC | Incfile.com" description="Do you need a registered agent for your Florida LLC? Learn what registered agents do and how to get one with Incfile's helpful guide." />
        
        <RASchemaFL />

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

        <Rocket url="?entityType=LLC&entityState=FL" />
    </Layout>
);

export default RegisteredAgentFlorida;
