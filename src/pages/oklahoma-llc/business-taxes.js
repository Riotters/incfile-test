import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { businessTaxes } from "../../static/states-llc/oklahoma/home";
import { tabPages } from "../../static/states-llc/oklahoma/general";

const BusinessTaxesPage = () => (
  <Layout>
    <SEO
    title="Oklahoma Business & Sales Taxes for LLCs"
    description="Do you have an Oklahoma LLC? Learn about the required federal, state and sales taxes you might need to pay. Read more."
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