import React from "react";
import styled from "styled-components";
import Colorbox from "../../../../components/color-box";
import DominoIcon from "../../../../images/icons/domino.inline.svg";
import { color } from "../../../../components/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalGreenSVG from "../../../../images/ovals/bottom-right-transparent-green3.inline.svg";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import { Link } from "gatsby";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 100px;
  padding-bottom: 64px;
  width: 100%;
  max-width: 770px;

  @media (min-width: 770px) {
    margin: 0 auto;
  }

  h2.title {
    font-size: 40px;
    margin-bottom: 56px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(180deg);
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
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const AirbnbBusinessPlan = () => (
  <div style={{ position: "relative" }}>
    <Oval>
      <OvalGreenSVG />
    </Oval>
    <OvalCenter>
      <OvalSVG />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <Heading size={2} left className="title">
          Your Airbnb Business Plan
        </Heading>
        <Paragraph big>You might not think you need a business plan for your Airbnb business—after all, if you’re getting guests through Airbnb, and they’re paying, you don’t need a business plan, right? Wrong.</Paragraph>
        <Colorbox className="box" theme="icon" Icon={DominoIcon} color={color.yellow3} curve curveColor={color.yellow1} maxWidth={670}>
          <Heading size={4}>Why You Need a Business Plan?</Heading>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            You need to define how you’re going to run your Airbnb business, market your property, get sales, make a profit and grow. This can only come about through creating a watertight business plan. It will help you get your thinking in order and show your commitment to your Airbnb business.
          </Paragraph>
        </Colorbox>

        <Paragraph big>
          You will also need to look at financial projections for your Airbnb business. What are your expected booking revenues? How much is it costing you to buy and maintain the property? What is your profitability? How much money will you keep in the business to grow it? How much will you pay
          yourself and others?
        </Paragraph>
        <Paragraph big bottomPadding={50} bottomMargin={0}>
          Business plans do vary slightly, but they should all cover the following areas:
        </Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your bar or club business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your business, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your business is structured
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
          We’ve got the perfect <Link to="https://www.incfile.com/blog/post/keys-successful-business-plan/">guide to writing your business plan.</Link>
        </Paragraph>
      </BusinessOwnerResponsibilities>
    </Container>
  </div>
);

export default AirbnbBusinessPlan;
