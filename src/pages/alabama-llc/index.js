import React from "react";
import { getFullPricesAndFilings } from '../../api/Api';
import ContentMap from "../../atomic/partials/content-map";
import LLCLayout from "../../atomic/partials/states-llc/louisiana";
// Components
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { tabPages } from "../../static/states-llc/alabama/general";
// Content
import { howToGuide, top } from "../../static/states-llc/alabama/home";


function AlabamaIndexPage() {
    const [dataApi, setDataApi] = React.useState({});

    React.useEffect(() => {
        getFullPricesAndFilings('Alabama').then(data => {
            setDataApi(data);
        });
    }, []);
    
    return (
        <Layout>
            <SEO title="Alabama LLCs | Forming an LLC in Alabama"
                description="Ready to register your AL LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
            <LLCLayout data={dataApi} top={top}>
                <LeftTabPages content={tabPages} nonDIY />
                <MainPageContent>
                    <ContentMap content={howToGuide} data={dataApi} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
}

export default AlabamaIndexPage;
