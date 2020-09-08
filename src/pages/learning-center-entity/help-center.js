import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import Categories from "../../atomic/sections/learning-center-entity/help-center/categories";
import Tools from "../../atomic/sections/learning-center-entity/help-center/tools";
import Service from "../../atomic/sections/learning-center-entity/help-center/service";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, about, help, faq, rocket, categories, service, tools } from "../../static/learning-center-entity/help-center";

const HelpCenter = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-question" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Searchbar />
    </Top>
    <Categories content={categories} />
    <Service content={service} />
    <Tools content={tools} />
    <Rocket content={rocket} />
  </Layout>
);

export default HelpCenter;
