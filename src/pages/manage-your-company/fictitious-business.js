import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//sections
import Top from "../../components/partials/sections/top";
import About from "../../atomic/sections/manage-your-company/fictitious-business/about";
import BusinessesChoose from "../../atomic/sections/manage-your-company/fictitious-business/businesses-choose";
import OtherTerms from "../../atomic/sections/manage-your-company/fictitious-business/other-terms";
import Articles from "../../components/partials/sections/articles";
//texts
import { top, about, businessesChoose, otherTerms } from "../../static/fictitious-business";

const FictitiousBusiness = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-dba" imageAlt="image alt" ovalColor="purple">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
      <Buttonsbox>
        <Button content={top.button[0]} theme="primary56" arrow />
      </Buttonsbox>
    </Top>
    <About content={about} />
    <BusinessesChoose content={businessesChoose} />
    <OtherTerms content={otherTerms} />
    <Articles />
  </Layout>
);

export default FictitiousBusiness;
