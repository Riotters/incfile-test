import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import LeftTabPages from "../atomic/states-llc/left-tab-pages";
import MainPageContent from "../atomic/states-llc/page-content";
import LLCLayout from "../atomic/partials/states-llc/louisiana";
import ContentMap from "../atomic/partials/content-map";

// Content
import { howToGuide } from "../static/states-llc/minnesota/home";
import { tabPages } from "../static/states-llc/minnesota/general";
import { getFullPricesAndFilings } from '../api/Api';

function LLCIndex() {
    const [dataApi, setDataApi] = React.useState({});
    
    React.useEffect(() => {
        getFullPricesAndFilings('Minnesota').then(data => {
            setDataApi(data);
        });
    }, []);

    return (
        <Layout>
            <SEO title="LLCs in Minnesota | Guide to Forming an LLC in Minnesota" description="Ready to form your Minnesota LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
            <LLCLayout data={dataApi}>
                <LeftTabPages content={tabPages} nonDIY />
                <MainPageContent>
                    <ContentMap content={howToGuide} />
                </MainPageContent>
            </LLCLayout>
        </Layout>
    );
}

export default LLCIndex;
