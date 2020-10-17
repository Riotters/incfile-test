import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

// Components
import LeftTabPages from "../../atomic/sections/choose-your-business/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import ContentMap from "../../atomic/partials/content-map";

// Content
import { security, tabPages } from "../../static/choose-business-name";
import ChapterLayout from "../../atomic/partials/chapter-layout";

function LLCIndex() {
    return (
        <Layout>
            <SEO title="LLCs in Texas | Guide to Forming an LLC in Texas" description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
            <ChapterLayout>
                <LeftTabPages content={tabPages} nonDIY />
                <MainPageContent>
                    <ContentMap content={security} />
                </MainPageContent>
            </ChapterLayout>
        </Layout>
    );
}

export default LLCIndex;
