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
import BusinessTaxesSection from "../../atomic/states-llc/illinois/business-taxes";
import Rocket from "../../atomic/sections/rocket";

// Content
import { businessTaxesPageContent } from "../../static/states-llc/illinois/business-taxes";
import { tabPages, rocket } from "../../static/states-llc/illinois/general";
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

const IllinoisBusinessTaxes = () => (
  <Layout>
    <SEO title="Illinois Business & Sales Taxes | Incfile.com" description="Do you have an Illinois LLC? Learn about the required federal, state, and sales taxes you might need to pay. Read more." />

    <LinearBgHeader imageMapName="tx-map-2x">
      <ContentHeader content={businessTaxesPageContent.header} />
    </LinearBgHeader>

    <WrapperContent>
      <Wrapper>
        <LeftTabPages content={tabPages} />
        <MainPageContent>
          <BusinessTaxesSection content={businessTaxesPageContent.content} />
        </MainPageContent>
      </Wrapper>
    </WrapperContent>

        <Rocket url="?entityType=LLC&entityState=IL" />
        
        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Illinois Have Sales Tax?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Illinois does have a sales tax, which may vary among cities and counties. You can find more information above.</p>"}},{"@type":"Question","name":"Does Illinois Have a State Tax?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. Illinois does have a general state income tax. You can find more information above.</p>"}},{"@type":"Question","name":"What Is the Sales Tax Rate in Illinois?","acceptedAnswer":{"@type":"Answer","text":"<p>We have listed common sales tax rates in Illinois cities above.</p>"}},{"@type":"Question","name":"Do I Need to Pay Estimated Taxes?","acceptedAnswer":{"@type":"Answer","text":"<p>Yes. In most cases you must pay estimated taxes on your Illinois tax, federal income tax and self-employment tax. Speak to your accountant for more information.</p>"}}]
                }`}
            </script>
        </Helmet>
  </Layout>
);

export default IllinoisBusinessTaxes;
