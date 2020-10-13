import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/comparison-chart/about";
import BusinessStructure from "../atomic/sections/learning-center-entity/comparison-chart/business-structure";
import EntityType from "../atomic/sections/learning-center-entity/comparison-chart/entity-type";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import Guide from "../atomic/sections/learning-center-entity/comparison-chart/guide";
import Service from "../atomic/sections/learning-center-entity/comparison-chart/service";
//Texts
import { top, about, businessStructure, entityType, rocket, guide, service } from "../static/learning-center-entity/comparison-chart";

const ComparisonChart = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-business-entity-comparison-9338" imageAlt="Mrs Bulb and with checklist" ovalColor="sun">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.buttons[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <BusinessStructure content={businessStructure} />
    <EntityType content={entityType} />
    <Rocket content={rocket} />
    <Guide content={guide} />
    <Service content={service} />
  </Layout>
);

export default ComparisonChart;
