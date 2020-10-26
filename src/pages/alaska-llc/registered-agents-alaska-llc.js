import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LeftTabPages from '../../atomic/states-llc/left-tab-pages'
import MainPageContent from '../../atomic/states-llc/page-content'
import LLCLayout from "../../atomic/partials/states-llc/arizona"
import ContentMap from "../../atomic/partials/content-map";

// Content
import { registeredAgent } from "../../static/states-llc/alaska/home";
import { tabPages } from "../../static/states-llc/alaska/general";
import { getFullPricesAndFilings } from '../../api/Api';

const RegisteredAgentPage = () => {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Alaska').then(data => {
            setDataApi(data);
        });
    }, []);

    return (
        <Layout>
            <SEO
                title="Alaska Business Search | How to Name Your Alaska LLC"
                description="Learn what you need to know about naming an LLC in Alaska with Incfile's helpful resources. Pick your perfect business name today!"
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