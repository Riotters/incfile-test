import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {choose, top} from "../../static/learning-center-entity/business-entity-quiz";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import ChooseEntitySection from "../../atomic/sections/learning-center-entity/business-entity-quiz/choose-entity";

const BusinessEntityQuiz = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <TopSection content={top}/>
        <ChooseEntitySection content={choose}/>
    </Layout>
);


export default BusinessEntityQuiz;