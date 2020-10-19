import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import LeftTabPages from "../../atomic/sections/choose-your-business/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import ContentMap from "../../atomic/partials/content-map";

// Content
import { choseNameGuide, tabPages } from "../../static/choose-business-name";
import CorporationLayout from "../../atomic/partials/corporation-layout";

function LLCIndex() {
    return (
        <Layout>
            <SEO title="LLCs in Texas | Guide to Forming an LLC in Texas" description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
            <CorporationLayout>
                <LeftTabPages content={tabPages} nonDIY />
                <MainPageContent>
                    <ContentMap content={choseNameGuide} />
                </MainPageContent>
            </CorporationLayout>
        </Layout>
    );
}

export default LLCIndex;
