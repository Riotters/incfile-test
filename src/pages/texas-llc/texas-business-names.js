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
import { businessNamesContent } from "../../static/states-llc/texas/business-names";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const TexasBusinessNames = () => (
  <Layout>
    <SEO
      title="Texas Business Search | How to Name Your TX LLC"
      description="Learn what you need to know about naming an LLC in Texas with Incfile's helpful resources. Pick your perfect business name today!"
    />

    <LinearBgHeader position="to top">
      <ContentHeader content={businessNamesContent.header}/>
    </LinearBgHeader>

    <WrapperContent content={{ tabs: tabPages.pages, content: "" }} />
    
    {/**Rocket section */}
    <Rocket content={rocket} />

  </Layout>
);

export default TexasBusinessNames;