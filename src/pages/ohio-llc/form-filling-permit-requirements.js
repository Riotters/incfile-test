import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { feesAndRequirments } from "../../static/states-llc/ohio/home";
import { tabPages } from "../../static/states-llc/ohio/general";
import { getFullPricesAndFilings } from '../../api/Api';

const FillingRequirementsPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Ohio').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Ohio LLC Forms, Costs, & Filing Requirements"
                description="Make sense of the required forms, fees, and filing procedures for your OH LLC with Incfile’s easy-to-use guide. Read more."
            />
            <LLCLayout data={dataApi}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={feesAndRequirments} data={dataApi} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
}

export default FillingRequirementsPage