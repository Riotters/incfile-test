import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import ContentHeader from '../../atomic/states-llc/taxes-header';
import { color } from '../../components/styles/colors';

// Content
import { texasPage } from "../../static/states-llc/texas";

const TexasBusinessTaxes = () => (
  <Layout>
    <SEO
      title="Texas Business & Sales Taxes | Incfile.com"
      description="Do you have an Texas LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more."
    />

    <LinearBgHeader>
      <ContentHeader content={texasPage.taxes}/>
    </LinearBgHeader>

  </Layout>
);

export default TexasBusinessTaxes;