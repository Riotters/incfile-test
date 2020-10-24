import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { feesAndRequirments, ongoingFilingRequirement } from "../../static/states-llc/wisconsin/home";
import { tabPages } from "../../static/states-llc/wisconsin/general";
import { getFullPricesAndFilings } from '../../api/Api';

const FillingRequirementsPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Wisconsin').then(data => {
            setDataApi(data);
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Wisconsin LLC Forms, Costs & License Requirements"
                description="Make sense of the required forms, fees and filing procedures for your WI LLC with Incfile’s easy-to-use guide. Read more."
            />
            <LLCLayout data={dataApi} ongoingFilingRequirement={ongoingFilingRequirement}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={feesAndRequirments} data={dataApi} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
}

export default FillingRequirementsPage;