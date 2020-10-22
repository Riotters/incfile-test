import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import {legal_sections, top} from "../static/cancellation-policy";
//Sections
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import LegalSections from "../atomic/sections/legal-disclaimer/legal-sections";

const CompareStateTimes = () => (
    <Layout>
        <SEO title="Incfile Cancellation Policy | How Do I Cancel my Incfile Order" description="To cancel your Incfile order, contact customer service with 24 hrs of your order. Learn more." />
        <Top content={top} />
        <LegalSections content={legal_sections} contentWidth={970} />
    </Layout>
);

export default CompareStateTimes;