import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, businessTaxes } from "../../static/states-llc/north-dakota/home";
import { tabPages } from "../../static/states-llc/north-dakota/general";
import { getFullPricesAndFilings } from '../../api/Api';

const BusinessTaxesPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('North Dakota').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="North Dakota Business Taxes & Sales Tax for LLCs"
                description="Do you have an ND LLC? Learn about the required federal, state and sales taxes you might need to pay. Read more."
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={businessTaxes} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
}

export default BusinessTaxesPage;