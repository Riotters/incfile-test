import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/ongoing-filing-requirements/about";
import EntityTypeAndState from "../atomic/sections/learning-center-entity/ongoing-filing-requirements/entity-type-and-state";
import Requirements from "../atomic/sections/learning-center-entity/ongoing-filing-requirements/requirements";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
//Texts
import { top, about, entityTypeAndState, requirements, rocket } from "../static/learning-center-entity/ongoing-filing-requirements";

const OngoingFilingRequirements = () => (
  <Layout>
    <SEO title="Research State by State Compliance Filing Requirements" description="Research State by State Compliance Filing Requirements" />
    <Top imageName="mrs-bulb-ongoing-filing-requirements-7487" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
    </Top>
    <About content={about} />
    <EntityTypeAndState content={entityTypeAndState} />
    <Requirements content={requirements} />
    <Rocket content={rocket} />
  </Layout>
);

export default OngoingFilingRequirements;
