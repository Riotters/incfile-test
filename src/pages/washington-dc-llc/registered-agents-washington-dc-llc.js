import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { registeredAgent } from "../../static/states-llc/washington-dc/home";
import { tabPages } from "../../static/states-llc/washington-dc/general";

const RegisteredAgentPage = () => (
    <Layout>
        <SEO
            title="Washington DC Registered Agents for LLCs"
            description="Do you need a Registered Agent for your DC LLC? Learn what Registered Agents do and how to get one with Incfile’s helpful guide."
        />
        <LLCLayout>
            <LeftTabPages content={tabPages} />
            <MainPageContent>
                <ContentMap content={registeredAgent} />
            </MainPageContent>
        </LLCLayout>
    </Layout>
);

export default RegisteredAgentPage;