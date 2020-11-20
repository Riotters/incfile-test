import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import ButtonsBox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import Resources from "../atomic/sections/learn-more/resources";
import Video from "../atomic/sections/learn-more/video";
import ToolsSection from "../atomic/sections/learn-more/tools";
import { tools, help } from "../static/learn-more";
import Comparison from "../atomic/sections/learn-more/comparison";
import Help from "../components/partials/sections/help";

const LearnMore = () => (
  <Layout>
    <SEO title="LLC, Nonprofit and Incorporation Resource Center | Incfile" description="Learn about the LLC (Limited Liability Company) and Corporation are filed as well as other reporting and compliance requirements" />

    <Top ovalColor="purple-2" imageName="research-tools" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
      <h1>Everything about forming a business at your fingertips.</h1>
      <p>Learn about the LLC (Limited Liability Company) and Corporation are filed as well as other reporting and compliance requirements</p>
      {/*<ButtonsBox>*/}
        {/*<Button theme="primary56" marginMD="0 24px 0 0" arrow content={{ text: `Read FAQ`, url: `/` }} />*/}
      {/*</ButtonsBox>*/}
    </Top>

    <Resources />
    <Video />
    <ToolsSection content={tools} />
    <Comparison />
    <Help content={help} />
  </Layout>
);

export default LearnMore;
