import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/home/about";
import Rocket from "../atomic/sections/review-entity-types/home/rocket";
import BusinessStructure from "../atomic/sections/learning-center-entity/comparison-chart/business-structure";
import Articles from "../components/partials/sections/articles";
import Cta from "../atomic/sections/general/cta";
//Texts
import { top, about, businessStructure, rocket, cta } from "../static/review-entity-types";

const ReviewEntityType = () => (
    <Layout>
        <SEO title="Start a Company | Learn about Business Entity Types" description="Want to start a business? Learn about different types of business structures—from LLC to S Corp to non profit—and find the entity that suits your needs." />
        <Top imageName="mr-bulb-main-header-illustration-7201" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2" headlineWidth="560" textWidth="450">
            <h1>{top.header}</h1>
            <p>{top.text}</p>
        </Top>
        <About content={about} />
        <Rocket content={rocket} />
        <BusinessStructure content={businessStructure} />
        <Cta cta={cta} />
        <Articles />
    </Layout>
);

export default ReviewEntityType;