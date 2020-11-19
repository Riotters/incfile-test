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
import FaqSection from "../../atomic/states-llc/florida/faq";
import Rocket from "../../sections/rocket";

// Content
import { tabPages, rocket } from "../../static/states-llc/florida/general";
import { faqContent } from "../../static/states-llc/florida/faq";

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

const FloridaFaq = () => (
  <Layout>
    <SEO title="Frequently Asked Questions About Forming a Florida LLC" description="Getting ready to start an LLC in the Lone Star state? Here are the most frequently asked questions to help your business get up and running. Read more." />

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

    <Rocket url="?entityType=LLC&entityState=FL" />
  </Layout>
);

export default FloridaFaq;
