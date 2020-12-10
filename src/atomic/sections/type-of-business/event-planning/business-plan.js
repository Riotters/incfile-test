import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { color } from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSmallSVG from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import BoxIcon from "../../../../images/icons/why-you-need-a-business-plan.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import Colorbox from "../../../../components/color-box";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  width: 100%;
  max-width: 770px;

  @media (min-width: 770px) {
    margin: 0 auto;
  }

  h2.title {
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
  top: 0;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 389px;
  width: 100%;
  transform: scaleX(-1);

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
        <TextCenterLayout
          headline="Your Event Planning Business Needs a Plan"
          text="Although party and event companies are all about managing plans on behalf of your clients, you also need your own business plan. This will help you define how you’re going to run your party or event planning business, market yourself, get sales, make a profit and grow. This can only come about through creating a watertight business plan. It will help you get your thinking in order and show your commitment to your party or event planning business."
        />

        <Colorbox className="box" theme="icon" Icon={BoxIcon} color={color.orange3} curve curveColor={color.orange3}>
          <Heading size={3} template={4}>You will also need to look at financial projections for your party or event planning business.</Heading>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?
          </Paragraph>
        </Colorbox>

        <Paragraph big>If you can, try to plan your revenue for the next month, three months, year and two years. It’s vital to take into account the cost of setting up a party or event planning business in the first place, as well as factoring in utility, staff and other costs.</Paragraph>
        <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your planning business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your event planning company, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your party or event planning business is structured
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
  </Wrapper>
);

export default BusinessPlan;
