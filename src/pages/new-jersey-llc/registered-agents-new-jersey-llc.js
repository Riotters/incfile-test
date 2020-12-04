import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, registeredAgent } from "../../static/states-llc/new-jersey/home";
import { tabPages } from "../../static/states-llc/new-jersey/general";
import { getFullPricesAndFilings } from '../../api/Api';
import { Helmet } from 'react-helmet';

const RegisteredAgentPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('New Jersey').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Registered Agents for Your New Jersey LLC | Incfile.com"
                description="Do you need a registered agent for your New Jersey LLC? Learn what registered agents do and how to get one with Incfile&#039;s helpful guide."
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={registeredAgent} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
}

export default RegisteredAgentPage;