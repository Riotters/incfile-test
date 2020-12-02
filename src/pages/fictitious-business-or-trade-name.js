import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/manage-your-company/fictitious-business/about";
import BusinessesChoose from "../atomic/sections/manage-your-company/fictitious-business/businesses-choose";
import OtherTerms from "../atomic/sections/manage-your-company/fictitious-business/other-terms";
import Register from "../atomic/sections/manage-your-company/fictitious-business/register";
import Behalf from "../atomic/sections/manage-your-company/fictitious-business/behalf";
import Protect from "../atomic/sections/manage-your-company/fictitious-business/protect";
import States from "../atomic/sections/manage-your-company/fictitious-business/states";
import Help from "../atomic/sections/manage-your-company/fictitious-business/help";
import Faq from "../atomic/sections/manage-your-company/fictitious-business/faq";
import Articles from "../atomic/sections/articles";
//texts
import { top, about, businessesChoose, otherTerms, register, behalf, protect, states, help, faq } from "../static/fictitious-business";

const FictitiousBusiness = () => (
  <Layout>
    <SEO title="DBA Filing | Create a Fictitious Business or Trade Name" description="If you want to do business with a name other than your legal business name, you might need to file an assumed business name with your state. Learn more." />
    <Top imageName="mrs-bulb-dba" imageAlt="Mr. Bulb choosing his fictitious business name" ovalColor="purple">
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
    <Articles categoryId={317} />
  </Layout>
);

export default FictitiousBusiness;
