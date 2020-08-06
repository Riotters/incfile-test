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
import Register from "../../atomic/sections/manage-your-company/fictitious-business/register";
import Behalf from "../../atomic/sections/manage-your-company/fictitious-business/behalf";
import Protect from "../../atomic/sections/manage-your-company/fictitious-business/protect";
import States from "../../atomic/sections/manage-your-company/fictitious-business/states";
import Help from "../../atomic/sections/manage-your-company/fictitious-business/help";
import Faq from "../../atomic/sections/manage-your-company/fictitious-business/faq";
import Articles from "../../components/partials/sections/articles";
//texts
import { top, about, businessesChoose, otherTerms, register, behalf, protect, states, help, faq } from "../../static/fictitious-business";

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
    <Register content={register} />
    <Behalf content={behalf} />
    <Protect content={protect} />
    <States content={states} />
    <Help content={help} />
    <Faq content={faq} />
    <Articles />
  </Layout>
);

export default FictitiousBusiness;
