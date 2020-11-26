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
import HowToGuide from "../../atomic/states-llc/texas/how-to-guide";

// Content
import { top, HomePageContent } from "../../static/states-llc/texas/home";
import { tabPages, rocket } from "../../static/states-llc/texas/general";

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

function TexasLLCIndex() {
  const [dataApi, setDataApi] = React.useState({});

  React.useEffect(() => {
    getFullPricesAndFilings("Texas").then((data) => {
      setDataApi(data);
    });
  }, []);

    return (
        <Layout>
            <SEO title="LLCs in Texas | Guide to Forming an LLC in Texas" description="Ready to form your Texas LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />

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

            <Rocket url="?entityType=LLC&entityState=TX" />

            <Helmet>
                <script type="application/ld+json">{`
                    {
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "Forming an LLC in Texas by Incfile",
                        "description": "Want to form a Texas LLC but not sure where to start? We'll walk you through the steps to starting your Texas business, including securing a unique business name, getting a registered agent, writing an operating agreement, and filing Form 501 (your certificate of formation) with the Texas Secretary of State. Incorporate your new Texas LLC today!  Here are a few additional resources that are useful for forming an LLC in the state of Texas: Incfile’s Business Name Search tool: https://www.incfile.com/business-name-search/.   Incfile Information Regarding Registered Agents: https://www.incfile.com/registered-agents/.  Incfile Register Your LLC Packages: https://www.incfile.com/form-order-now.php?entityType=&entityState=.",
                        "thumbnailUrl": "https://i.ytimg.com/vi/wGAzGRmy6m8/default.jpg",
                        "uploadDate": "2020-06-03T14:52:33Z",
                        "duration": "PT1M49S",
                        "embedUrl": "https://www.youtube.com/embed/wGAzGRmy6m8",
                        "interactionCount": "5"
                    }
                `}</script>
            </Helmet>

        </Layout>
    );
}

export default TexasLLCIndex;
