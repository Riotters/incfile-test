import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//sections
import Top from "../../components/partials/sections/top";
import Unboxnig from "../../atomic/sections/manage-your-company/corporate-llc-kit/unboxing";
import GetFormationKit from "../../atomic/sections/manage-your-company/corporate-llc-kit/get-formation-kit";
import Articles from "../../components/partials/sections/articles";
//texts
import { top, unboxing, getFormationKit } from "../../static/corporate-llc-kit"

const CorporateLlcKit = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-llc-corporate-kit" imageAlt="Mr. Bulb creating a business " ovalColor="blue">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <Unboxnig content={unboxing} />
    <GetFormationKit content={getFormationKit} />
    <Articles />
  </Layout>
);

export default CorporateLlcKit;
