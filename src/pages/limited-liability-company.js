import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/review-entity-types/llc/about"
import Faq from "../atomic/sections/review-entity-types/llc/faq";
import Articles from "../components/partials/sections/articles";
//Texts
import { top, about, faq } from "../static/review-entity-types/llc"

const LLC = () => (
  <Layout>
    <SEO title="Limited Liability Company | Should I start an LLC for my Business?" description="Learn about the benefits of forming an LLC, the legal protections it offers you, and if an LLC is the right choice for your business." />
    <Top imageName="mr-bulb-llc" imageAlt="Mrs Bulb and with checklist" ovalColor="darkblue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Faq content={faq} />
    <Articles />
  </Layout>
);

export default LLC;
