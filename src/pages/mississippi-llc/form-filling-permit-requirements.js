import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { feesAndRequirments } from "../../static/states-llc/mississippi/home";
import { tabPages } from "../../static/states-llc/mississippi/general";

const FillingRequirementsPage = () => (
  <Layout>
    <SEO
    title="Filing Requirements & Fees for Mississippi LLCs | Incfile.com"
    description="Make sense of the required forms, fees, and filing procedures for your Mississippi LLC with Incfile&#039;s easy-to-use guide. Read more."
    />
    <LLCLayout>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
            <ContentMap content={feesAndRequirments} />
        </MainPageContent>
    </LLCLayout>
  </Layout>
);

export default FillingRequirementsPage;