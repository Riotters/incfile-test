import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import { color } from "../../components/styles/colors";
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../atomic/states-llc/home-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import HowToGuide from "../../atomic/states-llc/new-york/how-to-guide";

// Content
import { HomePageContent } from "../../static/states-llc/new-york/home";
import { tabPages, rocket } from "../../static/states-llc/new-york/general";

import { getFullPricesAndFilings } from "../../api/Api";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 769px) {
      max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`;

function NewYorkLLCIndex() {
  const [dataApi, setDataApi] = React.useState({});

  React.useEffect(() => {
    getFullPricesAndFilings("New York").then((data) => {
      setDataApi(data);
    });
  }, []);

  return (
    <Layout>
      <SEO title="Forming a New York LLC | A How-to Guide to LLCs in NY" description="Ready to form your New York LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />

      <LinearBgHeader imageMapName="tx-map-2x">
        <HomeHeader content={HomePageContent.header} data={dataApi} />
      </LinearBgHeader>

      <WrapperContent>
        <Wrapper>
          <LeftTabPages content={tabPages} />
          <MainPageContent>
            <HowToGuide content={HomePageContent.content} data={dataApi} />
          </MainPageContent>
        </Wrapper>
      </WrapperContent>

          <Rocket url="?entityType=LLC&entityState=NY" />
          
          <Helmet>
              <script type="application/ld+json">{`
            {
                "@context": "http://schema.org",
                "@type": "VideoObject",
                "name": "Forming an LLC in NY by Incfile",
                "description": "New York is home to some big-time industries and has the population to support almost any market, making it an excellent choice for starting an LLC.   How to Start a New York LLC:  When you're ready to start a new business, forming an LLC is your best bet for creating a quick, legal and protected company in the Empire State. It usually only takes about six steps to get you from start to finish.  1) Compile your business member information. Gather a list of everyone involved with your LLC, including their names, addresses and the roles they’ll fulfill.  2) Name your LLC. Pick a name for your LLC that’s unique to your business. Incfile offers a business name search tool that can help you find a name that’s legally available (link below).  3) Pick a Registered Agent: That’s just a fancy term for the person you’ll designate to handle your business’s legal and tax documentation. The Registered Agent could be you or another member of the LLC, or we can appoint one for you. In fact, with a $0 LLC formation, Incfile offers one full year of Registered Agent service for free!  4) File for a Tax ID number/EIN. You’ll need to apply for an EIN. This is used to identify your business when you pay your employees and file taxes.  5) File your Articles of Organization. Every LLC must file Articles of Organization with the New York Department of State. These are the official documents that declare your business name and who’s in charge of the nitty-gritty details.  6) Make it official. New York State has an extra LLC publication requirement that you need to make sure you meet within 120 days of filing your Articles of Organization. To meet this requirement, publish your Articles of Organization in two newspapers designated by your county clerk. You get a Certificate of Publication to hold onto as a testament to this momentous achievement.   Ready to form your LLC? Here are a few resources to get you started:  - Read a detailed guide to starting an LLC in New York: https://www.incfile.com/new-york-llc/ - Check to see if your business name is available in New York: https://www.incfile.com/business-name-search/ - Get a Registered Agent: https://www.incfile.com/manage-your-company/registered-agent/  - Get a Federal Tax ID / EIN Number: https://www.incfile.com/manage-your-company/tax-id-ein/",
                "thumbnailUrl": "https://i.ytimg.com/vi/8ddZw2R7Hig/default.jpg",
                "uploadDate": "2020-09-20T23:13:54Z",
                "duration": "PT1M47S",
                "embedUrl": "https://www.youtube.com/embed/8ddZw2R7Hig",
                "interactionCount": "25"
            }
          `}</script>
          </Helmet>
    </Layout>
  );
}

export default NewYorkLLCIndex;
