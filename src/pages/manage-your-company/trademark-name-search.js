import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import Colorbox from "../../components/color-box";
import TextCenterLayout from "../../components/partials/blocks/heading-center";
import styled from "styled-components";
import Top from "../../atomic/partials/top";
import ImageContent from "../../atomic/partials/left-image-right-content";
import Articles from "../../components/partials/sections/articles";
import { color, gradient } from "../../components/styles/colors";
import { shadow } from "../../components/styles/shadows";
import Container from "../../components/container";
import ShieldSVG from "../../images/icons/shield.inline.svg";
import Helpo from "../../components/partials/blocks/left-content-right-object";
import Accordion from "../../components/accordion";
import Benefits from "../../components/partials/sections/benefits";
//Sections
import About from "../../atomic/sections/manage-your-company/trademark-name-search/about"
import Help from "../../atomic/sections/manage-your-company/trademark-name-search/help"
import HowItWorks from "../../atomic/sections/manage-your-company/trademark-name-search/how-it-works"
import Faq from "../../atomic/sections/manage-your-company/trademark-name-search/faq"
import Cta from "../../atomic/sections/manage-your-company/trademark-name-search/cta"
//Texts
import { top, about, help, howitworks, faq, cta } from "../../static/manage-your-company/trademark-name-search"

const TrademarkNameSearch = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-trademark" imageAlt="Mr Bulb holding a certificate and tossing an orginal and a trademark sign" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Help content={help} />
    <HowItWorks content={howitworks} />
    <Benefits />
    <Faq content={faq} />
    <Cta content={cta} />
    <Articles />
  </Layout>
);

export default TrademarkNameSearch;
