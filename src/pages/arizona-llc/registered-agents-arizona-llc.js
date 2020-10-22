import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { registeredAgent } from "../../static/states-llc/arizona/home";
import { tabPages } from "../../static/states-llc/arizona/general";

const RegisteredAgentPage = () => (
  <Layout>
    <SEO
    title="Arizona Business Search | How to Name Your AZ LLC"
    description="Learn what you need to know about naming an LLC in Arizona with Incfile's helpful resources. Pick your perfect business name today!"
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