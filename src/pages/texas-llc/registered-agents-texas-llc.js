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
import { agentPageContent } from "../../static/states-llc/texas/ra";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const RegisteredAgentTexas = () => (
  <Layout>
    <SEO
      title="Registered Agents for Your Texas LLC | Incfile.com"
      description="Do you need a registered agent for your Texas LLC? Learn what registered agents do and how to get one with Incfile's helpful guide."/>

    <LinearBgHeader>
      <ContentHeader content={agentPageContent.header}/>
    </LinearBgHeader>

    <WrapperContent content={{ tabs: tabPages.pages, content: "" }} />
    
    {/**Rocket section */}
    <Rocket content={rocket} />

  </Layout>
);

export default RegisteredAgentTexas;