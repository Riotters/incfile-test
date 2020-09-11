import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import ContentHeader from '../../atomic/states-llc/taxes-header';
import { color } from '../../components/styles/colors';
import WrapperContent from '../../atomic/states-llc/wrapper-content';
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";

// Content
import { filingFeeAndRequirementContent } from "../../static/states-llc/texas/filingFeeAndRequirement";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const filingFeeAndRequirementPage = () => (
  <Layout>
    <SEO
      title="Filing Requirements & Fees for Texas LLCs | Incfile.com"
      description="Make sense of the required forms, fees, and filing procedures for your Texas LLC with Incfile's easy-to-use guide. Read more."
    />

    {/*Header Section*/}
    <LinearBgHeader>
      <ContentHeader content={filingFeeAndRequirementContent.header}/>
    </LinearBgHeader>

    {/** Content section*/}
    <WrapperContent content={{ tabs: tabPages.pages, content: "" }} />
    
    {/**Rocket section */}
    <Rocket content={rocket} />

  </Layout>
);

export default filingFeeAndRequirementPage;