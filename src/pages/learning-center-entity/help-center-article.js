import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import Help from "../../atomic/sections/manage-your-company/annual-report/help";
import About from "../../atomic/sections/learning-center-entity/help-center-article/about";
import Related from "../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../atomic/sections/learning-center-entity/help-center-article/tools";
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
import Rocket from "../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, about, related, faq, rocket, categories, service, tools } from "../../static/learning-center-entity/help-center-article";

const HelpCenter = () => (
  <Layout>
    <SEO title="Incfile Business Help Center for LLC, Incorporating| Q & A" description="Q & A for LLC and other forms of corporations. Learning Center for Incorporating in every state." />
    <Top imageName="mrs-bulb-help-center-article" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Searchbar />
    </Top>
    <About content={about} />
    <Related content={related} />
    <Categories content={categories} />
    <Service content={service} />
    <Tools content={tools} />
    <Rocket content={rocket} />
  </Layout>
);

export default HelpCenter;
