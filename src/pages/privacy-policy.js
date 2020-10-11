import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import {legal_sections, top} from "../static/privacy-policy";
//Sections
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import LegalSections from "../atomic/sections/legal-disclaimer/legal-sections";

const CompareStateTimes = () => (
    <Layout>
        <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
        <Top content={top} />
        <LegalSections content={legal_sections} contentWidth={1170} />
    </Layout>
);

export default CompareStateTimes;