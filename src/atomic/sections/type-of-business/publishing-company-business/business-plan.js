import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import { Link } from "gatsby";

const Wrapper = styled.div`
  position: relative;
  background-color: ${color.green3};
`;

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  width: 100%;
  max-width: 770px;

  @media (min-width: 770px) {
    margin: 0 auto;
  }

  h4.title {
    font-size: 40px;
    padding-bottom: 24px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 364px;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const BusinessPlan = () => (
  <Wrapper style={{ position: "relative" }}>
    <Oval>
      <OvalSvg />
    </Oval>
    <OvalCenter>
      <OvalSvg />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <Heading size={4} className="title">
          Your Publishing Business Needs a Plan
        </Heading>
        <Paragraph big>
          You need to define how you’re going to run your publishing business, market yourself, generate revenue, make a profit and grow. This can only come about through creating a watertight business plan. It will help you get your thinking in order and show your commitment to your publishing
          business.
        </Paragraph>

        <Paragraph big style={{ fontWeight: "bold" }}>
          You will also need to look at financial projections for your publishing business.
        </Paragraph>

        <Paragraph big>What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?</Paragraph>

        <Paragraph big>If you can, try to plan your revenue for the next month, three months, year and two years. It’s vital to take into account the cost of setting up a publishing business in the first place, also factoring in utility, staff and other costs.</Paragraph>

        <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your publishing company
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your publishing business, including background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your publishing company is structured
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={6}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your business model
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={7}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            How you will market and sell your offerings
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
