import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { businessTaxes } from "../../static/states-llc/arkansas/home";
import { tabPages } from "../../static/states-llc/arkansas/general";
import { getFullPricesAndFilings } from '../../api/Api';

const BusinessTaxesPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Arkansas').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Arkansas Business Taxes & Sales Tax for LLCs"
                description="Do you have an AZ LLC? Learn about the required federal, state and sales taxes you might need to pay. Read more."
            />
            <LLCLayout data={dataApi}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={businessTaxes} data={dataApi} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
};

export default BusinessTaxesPage;