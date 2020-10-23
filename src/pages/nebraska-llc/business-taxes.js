import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { businessTaxes } from "../../static/states-llc/nebraska/home";
import { tabPages } from "../../static/states-llc/nebraska/general";

const BusinessTaxesPage = () => (
  <Layout>
    <SEO
    title="Nebraska Sales & Business Tax Registration for LLCs"
    description="Do you have a NE LLC? Learn about the required federal, state and sales taxes you might need to pay. Read more.""
    />
    <LLCLayout>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
            <ContentMap content={businessTaxes} />
        </MainPageContent>
    </LLCLayout>
  </Layout>
);

export default BusinessTaxesPage;