import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import styled from "styled-components";

// Components
import Top from "../../atomic/states-llc/top";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import LeftTabPages from "../../atomic/states-llc/left-tab-pages";
import MainPageContent from "../../atomic/states-llc/page-content";
import WrapperContent from "../../atomic/states-llc/wrapper-content";
import FaqSection from "../../atomic/states-llc/texas/faq";
import Rocket from "../../atomic/sections/rocket";

// Content
import { tabPages } from "../../static/states-llc/texas/general";
import { faqContent } from "../../static/states-llc/texas/faq";
import FAQSchemaTX from "../../atomic/states-llc/texas/faq-schema";

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

const TexasFaq = () => (
    <Layout>
        <SEO title="Frequently Asked Questions About Forming a Texas LLC" description="Getting ready to start an LLC in the Lone Star state? Here are the most frequently asked questions to help your business get up and running. Read more." />

        <Top imageName="mrs-bulb-question" imageAlt="Frequently question" headlineWidth={700} stateName="TX">
            <h1>{faqContent.header.title}</h1>
            <p>{faqContent.header.subline}</p>

            <RatingRow topMargin="0">
                <CartBlock />
                <RatingBlock />
            </RatingRow>
        </Top>

        <WrapperContent>
            <Wrapper>
                <LeftTabPages content={tabPages} />
                <MainPageContent>
                    <FaqSection content={faqContent.content} />
                </MainPageContent>
            </Wrapper>
        </WrapperContent>

        <Rocket url="?entityType=LLC&entityState=TX" />

        <FAQSchemaTX />
    </Layout>
);

export default TexasFaq;
