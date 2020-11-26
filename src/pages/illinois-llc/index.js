import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import HomeHeader from "../../atomic/states-llc/home-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import HowToGuide from "../../atomic/states-llc/illinois/how-to-guide";

// Content
import { top, HomePageContent } from "../../static/states-llc/illinois/home";
import { tabPages } from "../../static/states-llc/illinois/general";

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

function IllinoisLLCIndex() {
  const [dataApi, setDataApi] = React.useState({});

  React.useEffect(() => {
    getFullPricesAndFilings("Illinois").then((data) => {
      setDataApi(data);
    });
  }, []);

  return (
    <Layout>
      <SEO title="LLCs in Illinois | Guide to Forming an LLC in Illinois" description="Ready to form your Illinois LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />

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

      <Rocket url="?entityType=LLC&entityState=IL" />

      <Helmet>
        <script type="application/ld+json">{`
                {
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Forming an LLC in Illinois by Incfile",
                    "description": "Starting your business in Illinois has never been easier!  Home to the amazing city of Chicago and a critical ground for culture and politics, Illinois is a great state for LLC formation. When you create an LLC in Illinois, you get the protection and advantages of a corporation with much simpler rules to follow.  Ready to learn all about starting an LLC in Illinois?  Step 1: Gather Information for Your Members Step 2: Choose a Unique Business Name and Complete a Business Entity Search Step 3: Provide an Official Illinois Address Step 4: Assign a Registered Agent in Illinois Step 5: Get an Employer Identification Number (EIN) Step 6: File your Articles of Organization with the Illinois Secretary of State  For more information on how to start an LLC in IL, check out the following resources:   - File Your LLC Paperwork for Free: https://www.incfile.com - Incfile's Guide to Illinois LLCs: https://www.incfile.com/illinois-llc/ - Business Name Search tool: https://www.incfile.com/business-name - Virtual Business Address: https://www.incfile.com/virtual-mailbox/ - Registered Agent Service: https://www.incfile.com/manage-your-company/registered-agent/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/Rx9Ns_xqp2A/default.jpg",
                    "uploadDate": "2020-07-28T18:58:23Z",
                    "duration": "PT1M53S",
                    "embedUrl": "https://www.youtube.com/embed/Rx9Ns_xqp2A",
                    "interactionCount": "4"
                }
            `}</script>
      </Helmet>
    </Layout>
  );
}

export default IllinoisLLCIndex;
