import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/research-topics/state-info";
import Related from "../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, rocket, categories, service, tools } from "../../static/learning-center-entity/help-center-article";
import { about, related } from "../../static/research-topics/state-info";

const HelpCenter = () => (
  <Layout>
    <SEO title="State Business Information | Incfile" description="Find individual resources for forming a business in your specific state. Learn how to start a business today!" />
    <Top imageName="mrs-bulb-help-center-article" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Searchbar />
    </Top>
    {/* <About content={about} /> */}
    <Related content={related} />
    <Categories content={categories} />
    <Service content={service} />
    <Tools content={tools} />
    <Rocket content={rocket} />
  </Layout>
);

export default HelpCenter;
