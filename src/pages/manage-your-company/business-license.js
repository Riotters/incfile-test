import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/business-license/about";
import Requirements from "../../atomic/sections/manage-your-company/business-license/requirements";
import WhatYouGet from "../../atomic/sections/manage-your-company/business-license/what-you-get";
import ResearchPackage from "../../atomic/sections/manage-your-company/business-license/research-package";
import Cta from "../../atomic/sections/manage-your-company/business-license/cta";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, requirements, whatyouget, researchpackage, cta } from "../../static/manage-your-company/business-license";

const BusinessLicence = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-business-license" imageAlt="Mr Bulb with business license" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Requirements content={requirements} />
    <WhatYouGet content={whatyouget} />
    <ResearchPackage content={researchpackage} />
    <Cta content={cta} />
    <Articles />
  </Layout>
);

export default BusinessLicence;
