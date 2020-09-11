import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

// Components
import LinearBgHeader from '../../atomic/states-llc/linear-bg-header';
import HomeHeader from '../../atomic/states-llc/home-header';
import { color } from '../../components/styles/colors';
import WrapperContent from '../../atomic/states-llc/wrapper-content';
import Rocket from "../../atomic/sections/review-entity-type/c-corporation/rocket";

// Content
import { HomePageContent } from "../../static/states-llc/texas/home";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

const TexasLLCIndex = () => (
  <Layout>
    <SEO
      title="LLCs in Texas | Guide to Forming an LLC in Texas"
      description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more."
    />

    <LinearBgHeader>
      <HomeHeader content={HomePageContent.header}/>
    </LinearBgHeader>

    <WrapperContent content={{ tabs: tabPages.pages, content: HomePageContent.content }} />
    
    <Rocket content={rocket} />

  </Layout>
);

export default TexasLLCIndex;