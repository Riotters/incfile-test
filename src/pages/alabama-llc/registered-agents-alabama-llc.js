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
import { registeredAgent, top } from "../../static/states-llc/alabama/home";

const RegisteredAgentPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Alabama').then(data => {
            setDataApi(data);
        });
    }, []);
    
    return (
        <Layout>
            <SEO
                title="Alabama Registered Agents for LLCs"
                description="Do you need a Registered Agent for your AL LLC? Learn what Registered Agents do and how to get one with Incfile’s helpful guide."
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={registeredAgent} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    )
};

export default RegisteredAgentPage;