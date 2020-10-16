import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/c-corporation/about";
import Adventages from "../atomic/sections/review-entity-types/c-corporation/adventages";
import Disdventages from "../atomic/sections/review-entity-types/c-corporation/disadventages";
import Differences from "../atomic/sections/review-entity-types/c-corporation/differences";
import Requirements from "../atomic/sections/review-entity-types/c-corporation/requirements";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";
import Forming from "../atomic/sections/review-entity-types/c-corporation/forming";
import Articles from "../components/partials/sections/articles";
import Cta from "../atomic/sections/general/cta";
//Texts
import { top, about, adventages, disadventages, differences, requirements, rocket, cta, forming } from "../static/review-entity-types/c-corporation";

const CCorporation = () => (
  <Layout>
    <SEO title="What is a C Corporation? Your Guide to C Corps | Incfile" description="A C Corporation is one of several ways to legally recognize a business for tax, regulatory and official reasons. See if starting a C Corp is right for you." />
    <Top imageName="review-entity-type-c-corp" imageAlt="Mrs Bulb and with checklist" ovalColor="green">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Adventages content={adventages} />
    <Disdventages content={disadventages} />
    <Differences content={differences} />
    <Requirements content={requirements} />
    <Rocket content={rocket} />
    <Forming content={forming} />
    <Articles />
    <Cta cta={cta} />
  </Layout>
);

export default CCorporation;
