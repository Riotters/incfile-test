import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/learning-center-entity/ongoing-filing-requirements/about";
import EntityTypeAndState from "../../atomic/sections/learning-center-entity/ongoing-filing-requirements/entity-type-and-state";
import Requirments from "../../atomic/sections/learning-center-entity/ongoing-filing-requirements/requirments";
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";
//Texts
import { top, about, entityTypeAndState, requirments, rocket } from "../../static/learning-center-entity/ongoing-filing-requirements";

const OngoingFilingRequirments = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-ongoing-filing-requirements-7487" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
    </Top>
    <About content={about} />
    <EntityTypeAndState content={entityTypeAndState} />
    <Requirments content={requirments} />
    <Rocket content={rocket} />
  </Layout>
);

export default OngoingFilingRequirments;
