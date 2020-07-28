import React from "react";
import styled from "styled-components";
import Colorbox from "../../../components/color-box";
import DominoIcon from "../../../images/icons/domino.inline.svg";
import {color} from "../../../components/styles/colors";
import {Heading} from "../../../atomic/atoms/typography/heading";
import IconCircle from "../../../components/icons/circle";
import CountingTextBoxed from "../../../atomic/molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atomic/atoms/typography/paragraph";

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
  
  h3,
  p {
    max-width: 100%;
    padding-bottom: 24px;
  }

  h3 {
    &.pt32 {
      padding-top: 32px;
    }

    &.pt48 {
      padding-top: 48px;
    }
  }

  p {
    &.pb32 {
      padding-bottom: 32px;
    }

    &.pb40 {
      padding-bottom: 40px;
    }
  }

  .box {
    margin-bottom: 48px;
  }
`;

const AirbnbBusinessPlan = () => (
    <BusinessOwnerResponsibilities>
        <Heading size={4} className="title">
            Your Airbnb Business Plan
        </Heading>
        <Paragraph>
            You might not think you need a business plan for your Airbnb business—after all, if you’re getting guests
            through Airbnb, and they’re paying, you don’t need a business plan, right? Wrong.
        </Paragraph>
        <Colorbox className="box" theme="icon" Icon={DominoIcon} color={color.yellow3} curve
                  curveColor={color.yellow1}>
            <Heading size={4}>Why You Need a Business Plan?</Heading>
            <Paragraph>
                You need to define how you’re going to run your Airbnb business, market your property, get sales, make a
                profit and grow. This can only come about through creating a watertight business plan. It will help you
                get your thinking in order and show your commitment to your Airbnb business.
            </Paragraph>
        </Colorbox>

        <Paragraph>
            You will also need to look at financial projections for your Airbnb business. What are your expected booking
            revenues? How much is it costing you to buy and maintain the property? What is your profitability? How much
            money will you keep in the business to grow it? How much will you pay yourself and others?
        </Paragraph>
        <Paragraph>
            Business plans do vary slightly, but they should all cover the following areas:
        </Paragraph>

        <CountingTextBoxed number={1}>
            <Paragraph bottomSpace={0}>
                An executive summary with the most important points from your business plan
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
            <Paragraph bottomSpace={0}>
                Your goals and what you hope to achieve with your bar or club business
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
            <Paragraph bottomSpace={0}>
                A description of your business, background information and context
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
            <Paragraph bottomSpace={0}>
                A market analysis and likely demand
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
            <Paragraph bottomSpace={0}>
                An overview of how your business is structured
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={6}>
            <Paragraph bottomSpace={0}>
                Your business model
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={7}>
            <Paragraph bottomSpace={0}>
                How you will market and sell your offerings
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={8}>
            <Paragraph bottomSpace={0}>
                Financial projections, revenue and profitability
            </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={8}>
            <Paragraph bottomSpace={0}>
                Appendices
            </Paragraph>
        </CountingTextBoxed>

        <Paragraph big style={{marginTop: "50px"}}>
            We’ve got the perfect <span style={{color: color.blue1, fontWeight: "bold"}}>guide to writing your business plan.</span>
        </Paragraph>
    </BusinessOwnerResponsibilities>
);

export default AirbnbBusinessPlan;
