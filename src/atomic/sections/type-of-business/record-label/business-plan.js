import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSmallSVG from "../../../../images/ovals/bottom-left-transparent-green3.inline.svg";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  width: 100%;

  @media (min-width: 770px) {
    width: 770px;
    margin: 0 auto;
  }

  h4.title {
    font-size: 40px;
    padding-bottom: 56px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Wrapper = styled.section`
  position: relative;
  background: white;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: -50px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 38%;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;
const BusinessPlan = () => (
  <Wrapper>
    <Oval>
      <OvalSmallSVG />
    </Oval>
    <OvalCenter>
      <OvalSVG />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <TextCenterLayout headline="Your Record Label Business Needs a Plan" />

        <Paragraph big>Business plans are easily overlooked by record label businesses — after all, if it’s solely creativity and music, you don’t need a business plan, right? Wrong.</Paragraph>
        <Paragraph big>
          You need to define how you’re going to run your record label business, market your artists, get sales, make a profit and grow. This can only come about by creating a watertight business plan. It will help you get your thinking in order and show your commitment to your record label
          business.
        </Paragraph>
        <Paragraph big>All businesses need a business model, which is how you will generate music sales, pay for services and make money. Think about your business model now in order to start selling music and generating revenue from day one.</Paragraph>
        <Paragraph big>
          You will also need to look at financial projections for your record label business. What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself, your artists and others?
        </Paragraph>
        <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your record label business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your record label business, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand for music
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your record label business is structured
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={6}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your business model
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={7}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            How you will market and sell your music
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={8}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Financial projections, revenue and profitability
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={9}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Appendices
          </Paragraph>
        </CountingTextBoxed>

        <Paragraph big style={{ marginTop: "50px" }} mixed={true}>
          We’ve got the perfect <Link to="/blog/post/keys-successful-business-plan/">guide to writing your business plan.</Link>
        </Paragraph>
      </BusinessOwnerResponsibilities>
    </Container>
  </Wrapper>
);

export default BusinessPlan;
