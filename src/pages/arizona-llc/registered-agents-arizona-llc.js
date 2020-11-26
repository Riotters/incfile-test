import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { top, registeredAgent } from "../../static/states-llc/arizona/home";
import { tabPages } from "../../static/states-llc/arizona/general";
import { getFullPricesAndFilings } from '../../api/Api';

const RegisteredAgentPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Arizona').then(data => {
            setDataApi(data);
        });
    }, []);
    return (
        <Layout>
            <SEO
                title="Arizona Statutory Agents & Your LLC | Registered Agents in AZ"
                description="Do you need a statutory agent for your AZ LLC? Learn what statutory agents do and how to get one with Incfile's helpful guide."
            />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <ContentMap content={registeredAgent} data={dataApi} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
};

export default RegisteredAgentPage;