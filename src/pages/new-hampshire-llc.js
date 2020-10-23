import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import LeftTabPages from "../atomic/states-llc/left-tab-pages";
import MainPageContent from "../atomic/states-llc/page-content";
import LLCLayout from "../atomic/partials/states-llc/louisiana";
import ContentMap from "../atomic/partials/content-map";

// Content
import { howToGuide } from "../static/states-llc/new-hampshire/home";
import { tabPages } from "../static/states-llc/new-hampshire/general";

function LLCIndex() {
  return (
    <Layout>
      <SEO title="LLCs in Texas | Guide to Forming an LLC in New Hampshire" description="Ready to form your New Hampshire LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />
      <LLCLayout>
        <LeftTabPages content={tabPages} nonDIY />
        <MainPageContent>
            <ContentMap content={howToGuide} />
        </MainPageContent>
      </LLCLayout>
    </Layout>
  );
}

export default LLCIndex;