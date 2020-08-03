import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import styled from "styled-components";
//sections
import Top from "../../components/partials/sections/top";
import TypesOfTaxes from "../../atomic/sections/manage-your-company/filling-business-taxes/types-of-taxes";
import GetFormationKit from "../../atomic/sections/manage-your-company/corporate-llc-kit/get-formation-kit";
import Articles from "../../components/partials/sections/articles";
//texts
import { top, typesOfTaxes, getFormationKit } from "../../static/filling-business-taxes"

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FillingBusinessTaxes = () => (
  <Layout>
    <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
    <Top imageName="mrs-bulb-filling-taxes" imageAlt="image alt" ovalColor="orange">
      <h1>{top.header}</h1>
      <p>{top.text}</p>
    </Top>
    <TypesOfTaxes content={typesOfTaxes}/>
    <Articles />
  </Layout>
);

export default FillingBusinessTaxes;
