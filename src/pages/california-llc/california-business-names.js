import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import LinearBgHeader from "../../atomic/states-llc/linear-bg-header";
import ContentHeader from "../../atomic/states-llc/taxes-header";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import Rocket from "../../atomic/sections/rocket";
import BusinessNames from "../../atomic/states-llc/california/business-names";

// Content
import { businessNamesContent } from "../../static/states-llc/california/business-names";
import { tabPages, rocket } from "../../static/states-llc/california/general";
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

const CaliforniaBusinessNames = () => (
    <Layout>
        <SEO title="California Business Search | How to Name Your TX LLC" description="Learn what you need to know about naming an LLC in California with Incfile's helpful resources. Pick your perfect business name today!" />

        <LinearBgHeader position="to top" imageMapName="tx-map-2x">
            <ContentHeader content={businessNamesContent.header} />
        </LinearBgHeader>

        <WrapperContent>
            <Wrapper>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <BusinessNames content={businessNamesContent.content} />
                </MainPageContent>
            </Wrapper>
        </WrapperContent>

        <Rocket url="?entityType=LLC&entityState=CA" />
        
        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How Do I Make Sure My Business Name Isn’t Already Taken?","acceptedAnswer":{"@type":"Answer","text":"<p>You can use Incfile’s <a href='https://www.incfile.com/business-name-search/'>Business Name Search tool</a> or search the California business registry yourself on the <a href='https://businesssearch.sos.ca.gov/'>Secretary of State</a> website. Just go to the business name search tool and enter your proposed business name.</p>"}},{"@type":"Question","name":"Are There Any Rules on Naming My California  LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in California). We’ve detailed these rules above.</p>"}},{"@type":"Question","name":"Can I Do Business Under a Different Name Than My LLC Name in California ?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. In California, these are known as “fictitious names.”</p>"}},{"@type":"Question","name":"Can I Reserve a Name for My California  LLC?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. The California Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.</p>"}}]
                }`}
            </script>
        </Helmet>
    </Layout>
);

export default CaliforniaBusinessNames;
