import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { businessTaxes } from "../../static/states-llc/mississippi/home";
import { tabPages } from "../../static/states-llc/mississippi/general";
import { getFullPricesAndFilings } from '../../api/Api';

const BusinessTaxesPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Mississippi').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Mississippi Business & Sales Taxes | Incfile.com"
                description="Do you have an Mississippi LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more."
            />
            <LLCLayout data={dataApi}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={businessTaxes} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
};

export default BusinessTaxesPage;