import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import Help from "../../atomic/sections/manage-your-company/annual-report/help"
import About from "../../atomic/sections/learning-center-entity/help-center-article/about"
import Related from "../../atomic/sections/learning-center-entity/help-center-article/related"
import Categories from "../../atomic/sections/learning-center-entity/help-center-article/categories"
import Tools from "../../atomic/sections/learning-center-entity/help-center/tools"
import Service from "../../atomic/sections/learning-center-entity/help-center/service"
import Benefits from "../../components/partials/sections/benefits";
import Articles from "../../components/partials/sections/articles";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket"
import Searchbar from "../../atomic/molecules/form/searchbar";
//Texts
import { top, about, related, faq, rocket, categories, service, tools } from "../../static/learning-center-enitity/help-center-article"

const HelpCenter = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-help-center-article" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Searchbar />
    </Top>
    <About content={about} />
    <Related content={related} />
    <Categories content={categories} />
    <Service content={service} />
    <Rocket content={rocket} />
  </Layout>
);

export default HelpCenter;
