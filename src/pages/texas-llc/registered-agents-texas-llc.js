import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import ContentHeader from '../../atomic/states-llc/taxes-header';
import { color } from '../../components/styles/colors';

// Content
import { texasPage } from "../../static/states-llc/texas";

const RegisteredAgentTexas = () => (
  <Layout>
    <SEO
      title="Registered Agents for Your Texas LLC | Incfile.com"
      description="Do you need a registered agent for your Texas LLC? Learn what registered agents do and how to get one with Incfile's helpful guide."/>

    <LinearBgHeader>
      <ContentHeader content={texasPage.agent}/>
    </LinearBgHeader>

  </Layout>
);

export default RegisteredAgentTexas;