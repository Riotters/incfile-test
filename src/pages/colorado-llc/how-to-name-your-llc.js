import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { namingYourBusiness } from "../../static/states-llc/colorado/home";
import { tabPages } from "../../static/states-llc/colorado/general";

const BusinessNamesPage = () => (
  <Layout>
    <SEO
    title="Colorado Business Search & Registering a Business Name"
    description="Learn what you need to know about naming an LLC in Colorado with Incfile's helpful resources. Pick your perfect business name today!"
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