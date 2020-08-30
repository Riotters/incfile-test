import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../components/partials/sections/about";
import Search from "../../atomic/sections/review-entity-type/nonprofit/search";
import Faq from "../../atomic/sections/review-entity-type/nonprofit/faq";
import Cta from "../../atomic/sections/general/cta";
import Articles from "../../components/partials/sections/articles";
//Texts
import { top, about, adventages, disadventages, differences, requirements, rocket, faq } from "../../static/review-entity-type/nonprofit";

const IndexPage = () => (
  <Layout>
    <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit" description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground." />
    <Top imageName="mr-bulb-nonprofit-7282" imageAlt="Mr Bulb with seedling" ovalColor="yellow">
      <h1>Starting a nonprofit can truly help make the world better</h1>
      <p>Start for $0 + state fee. Learn how forming an LLC, an S-Corporation, an C-Corporation, or a Non Profit will impact both your liability and taxation.</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" width="200px" arrow />
        <Button content={top.button[1]} theme="secondary56" width="200px" arrow2 margin="16px 0 0 0" marginMD="0 0 0 16px" />
      </Buttonsbox>
    </Top>
    <About />
    <Search />
    <Faq content={faq} />
    <Cta />
    <Articles />
  </Layout>
);

export default IndexPage;
