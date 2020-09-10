import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import HomeHeader from '../../atomic/states-llc/home-header';
import { color } from '../../components/styles/colors';

// Content
import { texasPage } from "../../static/states-llc/texas";

const TexasLLCIndex = () => (
  <Layout>
    <SEO
      title="LLCs in Texas | Guide to Forming an LLC in Texas"
      description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
    />

    <LinearBgHeader>
      <HomeHeader content={texasPage.home}/>
    </LinearBgHeader>

  </Layout>
);

export default TexasLLCIndex;