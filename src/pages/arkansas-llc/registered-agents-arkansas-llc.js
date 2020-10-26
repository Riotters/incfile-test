import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { registeredAgent } from "../../static/states-llc/arkansas/home";
import { tabPages } from "../../static/states-llc/arkansas/general";
import { getFullPricesAndFilings } from '../../api/Api';

const RegisteredAgentPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Arkansas').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Arkansas Registered Agents for LLCs<"
                description="Do you need a Registered Agent for your AR LLC? Learn what Registered Agents do and how to get one with Incfile’s helpful guide."
            />
            <LLCLayout data={dataApi}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={registeredAgent} data={dataApi} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
};

export default RegisteredAgentPage;