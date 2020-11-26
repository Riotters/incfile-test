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
import HowToGuide from "../../atomic/states-llc/georgia/how-to-guide";

// Content
import { top, HomePageContent } from "../../static/states-llc/georgia/home";
import { tabPages, rocket } from "../../static/states-llc/georgia/general";

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

function GeorgiaLLCIndex() {
  const [dataApi, setDataApi] = React.useState({});

  React.useEffect(() => {
    getFullPricesAndFilings("Georgia").then((data) => {
      setDataApi(data);
    });
  }, []);

  return (
    <Layout>
      <SEO title="LLCs in Georgia | Guide to Forming an LLC in Georgia" description="Ready to form your Georgia LLC? Here are the steps you need to take, plus helpful tips and resources to make it easy. Read more." />

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

      <Rocket url="?entityType=LLC&entityState=GA" />

      <Helmet>
        <script type="application/ld+json">{`
                    {
                        "@context": "http://schema.org",
                        "@type": "VideoObject",
                        "name": "Forming an LLC in Georgia by Incfile",
                        "description": "Starting an LLC in Georgia is the quickest way to create a new business. An LLC, or limited liability company, will protect you from financial and legal liabilities that could otherwise sink your ship before you even sail.  Top brands like Coca-Cola, The Home Depot and UPS have all chosen Georgia to be their headquarters. If you’re only as good as the company you keep, it would be pretty hard to lose in the “Empire State of the South.” Luckily, forming an LLC in Georgia is a breeze. The paperwork is minimal and you still get all the legal protections of a big corporation.  Steps to Starting an LLC in Georgia: 1) To begin with, make sure you’ve got the names of all your business partners as well as their addresses.  2) Next, pick a name for your LLC that’s unique to your business. Incfile offers a business name search tool that can help you find a name that’s legally available.   3) Every LLC in Georgia must have a Registered Agent who receives all your official business documents. You can be your own Registered Agent or pick an individual you trust. In fact, when you create an LLC with Incfile, you get one full year of Registered Agent service for free!   4) Next, you’ll need to apply for an EIN. This is used to identify your business when you pay taxes and your employees.  5) Finally, file your Articles of Organization with the Georgia Secretary of State to make your business official.  Let Incfile be your guide to setting up shop in the Peach State. We can help you find a Registered Agent, apply for an EIN and even file your Articles of Organization.   Links:  https://www.incfile.com/business-name-search/ https://www.incfile.com/manage-your-company/registered-agent/  https://www.incfile.com/manage-your-company/tax-id-ein/ https://www.incfile.com/ https://www.incfile.com/manage-your-company/",
                        "thumbnailUrl": "https://i.ytimg.com/vi/teObxHzLcxE/default.jpg",
                        "uploadDate": "2020-09-07T16:42:51Z",
                        "duration": "PT1M36S",
                        "embedUrl": "https://www.youtube.com/embed/teObxHzLcxE",
                        "interactionCount": "9"
                    }
                `}</script>
      </Helmet>
    </Layout>
  );
}

export default GeorgiaLLCIndex;
