import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/other/after-forming-llc/about";
import Guide from "../atomic/sections/other/after-forming-llc/guide";
import Articles from "../atomic/sections/articles";
//Texts
import { top, about, guide } from "../static/other/after-forming-llc";

const AfterForming = () => (
  <Layout>
    <SEO title="What to Do After Forming Your LLC | Incfile " description="You started your LLC—now what? Here are the common next steps to ensuring your business is successful. Read more." />
    <Top imageName="mr-bulb-compass-3979" imageAlt="Mrs Bulb and with checklist" ovalColor="sun" headlineWidth="550">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <Guide content={guide} />
    <Articles />
  </Layout>
);

export default AfterForming;
