import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/annual-report/about";
import NextState from "../../atomic/sections/learning-center-entity/annual-report/next-state";
import Faq from "../../atomic/sections/learning-center-entity/annual-report/faq";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, nextStateDue, faq } from "../../static/learning-center-entity/annual-raport";

const AnnualReport = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mr-bulb-annual-report-due-date-tool" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="560">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.buttons[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <NextState content={nextStateDue} />
    <Faq content={faq} />
    <Articles />
  </Layout>
);

export default AnnualReport;
