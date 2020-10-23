import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { namingYourBusiness } from "../../static/states-llc/oklahoma/home";
import { tabPages } from "../../static/states-llc/oklahoma/general";

const BusinessNamesPage = () => (
  <Layout>
    <SEO
    title="Oklahoma Entity Search | Register a Business Name in OK"
    description="Learn what you need to know about naming an LLC in Oklahoma with Incfile’s helpful resources. Pick your perfect business name today!"
    />
    <LLCLayout>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
            <ContentMap content={namingYourBusiness} />
        </MainPageContent>
    </LLCLayout>
  </Layout>
);

export default BusinessNamesPage;