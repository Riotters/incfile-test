import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Top from "../atomic/partials/top";
import Benefits from "../atomic/sections/manage-your-company/manage-your-company/benefits";
import Certificates from "../components/partials/sections/certificates";
import Articles from "../atomic/sections/articles";
import Help from "../components/partials/sections/help";
//Texts
import { top, help, certificates } from "../static/manage-your-company";

const ManageYourCompany = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-final-paper-stock" imageAlt="Mr Bulb with a briefcase holding a sign pointing foward" ovalColor="purple" tabletVariantClass="tablet--shopper" tabletImgScale={.8} tabletImgPosX={40}>
      <h1>{top.header}</h1>
      <p>{top.text}</p>
    </Top>
    <Benefits />
    <Certificates content={certificates} />
    <Help content={help} />
    <Articles oval />
  </Layout>
);

export default ManageYourCompany;
