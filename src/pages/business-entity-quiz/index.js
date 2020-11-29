import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {choose, top} from "../../static/learning-center-entity/business-entity-quiz";
import TopSection from "../../atomic/sections/learning-center-entity/business-entity-quiz/top-section";
import ChooseEntitySection from "../../atomic/sections/learning-center-entity/business-entity-quiz/choose-entity";

const BusinessEntityQuiz = () => (
    <Layout>
        <SEO title="Choosing a Business Structure: Our Business Entity Quiz" description="We’ve created an easy-to-use quiz to determine what type of legal entity would work best for your new business venture. Take the quiz now." />
        <TopSection content={top}/>
        <ChooseEntitySection content={choose}/>
    </Layout>
);


export default BusinessEntityQuiz;