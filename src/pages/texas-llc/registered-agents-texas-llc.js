import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import styled from 'styled-components'

// Components
import TaxesHeader from '../../atomic/states-llc/taxes-header'
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import WrapperContent from '../../atomic/states-llc/wrapper-content'
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import RegisteredAgentSection from '../../atomic/states-llc/texas/registered-agents'
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";

// Content
import { agentPageContent } from "../../static/states-llc/texas/ra";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
        flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
    }
`

const RegisteredAgentTexas = () => (
    <Layout>
        <SEO
        title="Registered Agents for Your Texas LLC | Incfile.com"
        description="Do you need a registered agent for your Texas LLC? Learn what registered agents do and how to get one with Incfile's helpful guide."/>

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
        
        <Rocket content={rocket} />

    </Layout>
);

export default RegisteredAgentTexas;