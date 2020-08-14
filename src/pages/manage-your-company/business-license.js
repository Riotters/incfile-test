import React from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import Top from "../../atomic/partials/top";
import ImageContent from "../../components/partials/blocks/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import ArrowLink from "../../components/arrow-link";
import { color } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";

import Container from "../../components/container";
import Image from "../../components/image_nobase64";
import LeftImageRightContent from "../../components/partials/blocks/left-content-right-image";

import BusinessLicenseSVG from "../../images/icons/business-license.inline.svg";

import CurveSVG from "../../images/orange-curve.inline.svg";
import LicenseSVG from "../../images/icons/license.inline.svg";
import PermitSVG from "../../images/icons/permit.inline.svg";
import TaxRegistrationSVG from "../../images/icons/tax-registration.inline.svg";
import ApplicationFormSVG from "../../images/icons/application-form.inline.svg";
import ArrowCircleOrangeSVG from "../../images/icons/arrow-circle-orange.inline.svg";

//Sections
import About from "../../atomic/sections/manage-your-company/business-license/about";
import Requirements from "../../atomic/sections/manage-your-company/business-license/requirements";
import WhatYouGet from "../../atomic/sections/manage-your-company/business-license/what-you-get";
import ResearchPackage from "../../atomic/sections/manage-your-company/business-license/research-package";
import Cta from "../../atomic/sections/manage-your-company/business-license/cta";
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
