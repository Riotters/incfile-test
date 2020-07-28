import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../components/button";
import styled from "styled-components";
import Top from "../../components/partials/sections/top";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import OvalSVG from "../../images/oval-blue.inline.svg";
import Container from "../../components/container";
import AirBnb1Tabs from "../../fragments/type-of-business/airbnb-1/airbnb-1-tabs";

const AirBnb1 = () => (
    <Layout>
        <SEO title="What is a Nonprofit Organization? How to Start a Nonprofit"
             description="Learn all about nonprofit corporations, including the benefits & disadvantages, getting 501c3 status, and what's needed to get your company off the ground."/>
        <Top imageName="nonprofit" imageAlt="Mr Bulb with seedling" headlineWidth={700}>
            <h1>How to Start an Airbnb</h1>
            <p>Airbnb has only been with us since 2008, but over the last few years,
                it’s turned over half a million people into entrepreneurs.</p>
            <Buttonsbox>
                <Button theme="primary56" marginMD="0 24px 0 0" arrow>
                    Start Now
                </Button>
            </Buttonsbox>

            <RatingRow>
                <CartBlock/>
                <RatingBlock/>
            </RatingRow>
        </Top>

        <Wrapper>
            <Oval>
                <OvalSVG/>
            </Oval>
            <Container>
                <AirBnb1Tabs />
            </Container>
        </Wrapper>

    </Layout>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 115px;

  @media (min-width: 768px) {
    flex-direction: ${props => (props.layout !== "grid" ? "row" : "column")};
  }

  .accordion-panel {
    overflow: hidden;
  }

  .ReactCollapse--collapse {
    width: 100%;
    transition: height 500ms;
    margin-left: auto;

    @media (min-width: 768px) {
      max-width: ${props => (props.layout !== "grid" ? "55%" : "")};
    }

    @media (min-width: 1200px) {
      max-width: ${props => (props.layout !== "grid" ? "670px" : "")};
    }
  }
`

const Oval = styled.div`
  height: 100%;
  width: 100%;
  max-height: 460px;
  max-width: 370px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(40%);

  svg {
    moz-transform: scale(-1,1);
    -o-transform: scale(-1,1);
    -webkit-transform: scale(-1,1);
    transform: scale(-1,1);
`

const Buttonsbox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default AirBnb1;
