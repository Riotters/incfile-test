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
import Articles from "../../atomic/sections/articles";
//Texts
import { top, about, requirements, whatyouget, researchpackage, cta } from "../../static/manage-your-company/business-license";

const BusinessLicence = () => (
  <Layout>
    <SEO title="Business License Research Package - Incfile" description="As a business owner, you are responsible for making sure your business has the proper federal, state and local licenses and permits to operate legally." />
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
