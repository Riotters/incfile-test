import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { feesAndRequirments } from "../../static/states-llc/minnesota/home";
import { tabPages } from "../../static/states-llc/minnesota/general";

const FillingRequirementsPage = () => (
  <Layout>
    <SEO
    title="Minnesota Business Licenses, Fees & LLC Requirements<"
    description="Make sense of the required forms, costs and filing procedures for your MN LLC with Incfile’s easy-to-use guide. Read more."
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