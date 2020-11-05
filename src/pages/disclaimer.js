import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import { legal_sections, top } from "../static/legal-disclaimer";
//Sections
import Top from "../atomic/sections/manage-your-company/compare-state-filling-time/top";
import LegalSections from "../atomic/sections/legal-disclaimer/legal-sections";

const CompareStateTimes = () => (
  <Layout>
    <SEO title="Incfile Disclaimer Page" description="Incfile Legal Disclaimer" />
    <Top content={top} />
    <LegalSections content={legal_sections} />
  </Layout>
);

export default CompareStateTimes;
