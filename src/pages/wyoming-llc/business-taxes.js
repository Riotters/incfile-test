import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { businessTaxes } from "../../static/states-llc/wyoming/home";
import { tabPages } from "../../static/states-llc/wyoming/general";

const BusinessTaxesPage = () => (
  <Layout>
    <SEO
    title="Wyoming Sales Tax & Business Taxes for LLCs"
    description="Do you have a WY LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more."
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