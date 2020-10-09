import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
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
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
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