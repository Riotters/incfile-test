import React from 'react';
import { getFullPricesAndFilings } from '../../api/Api';
import ContentMap from "../../atomic/partials/content-map";
import LLCLayout from "../../atomic/partials/states-llc/arizona";
// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages';
import MainPageContent from '../../atomic/states-llc/page-content';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { tabPages } from "../../static/states-llc/alabama/general";
// Content
import { businessTaxes, top } from "../../static/states-llc/alabama/home";


const BusinessTaxesPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Alabama').then(data => {
            setDataApi(data);
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Alabama Business Taxes & Sales Tax for LLCs"
                description="Do you have an AL LLC? Learn about the required federal, state and sales taxes you might need to pay. Read more."
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={businessTaxes} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
};

export default BusinessTaxesPage;