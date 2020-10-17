import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { businessTaxes } from "../../static/states-llc/west-virginia/home";
import { tabPages } from "../../static/states-llc/west-virginia/general";

const BusinessTaxesPage = () => (
    <Layout>
        <SEO
            title="West Virginia Business Search | How to Name Your WV LLC"
            description="Learn what you need to know about naming an LLC in West Virginia with Incfile's helpful resources. Pick your perfect business name today!"
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