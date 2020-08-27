import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../components/button";
import Top from "../../components/partials/sections/top";
import About from "../../components/partials/sections/about";
import Search from "../../components/partials/sections/search";
import Faq from "../../components/partials/sections/faq";
import Cta from "../../components/partials/sections/cta";
import Articles from "../../components/partials/sections/articles";

const IndexPage = () => (
  <Layout>
    <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit" description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground." />
    <Top imageName="nonprofit" imageAlt="Mr Bulb with seedling">
      <h1>Starting a nonprofit can truly help make the world better</h1>
      <p>Start for $0 + state fee. Learn how forming an LLC, an S-Corporation, an C-Corporation, or a Non Profit will impact both your liability and taxation.</p>
      <Buttonsbox>
        <Button theme="primary56" marginMD="0 24px 0 0" arrow>
          Start Now
        </Button>
        <Button theme="secondary56" margin="24px 0 0 0" marginMD="0 auto 0 0" arrow>
          How it works
        </Button>
      </Buttonsbox>
    </Top>
    <About />
    <Search />
    <Faq />
    <Cta />
    <Articles />
  </Layout>
);

export default IndexPage;
