import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../../atoms/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";

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
  background-color: ${color.blue3};
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  bottom: 178px;
  width: 100%;

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const BusinessPlan = () => (
  <Wrapper>
    <Oval>
      <OvalSVG />
    </Oval>
    <Container>
      <BusinessOwnerResponsibilities>
        <TextCenterLayout headlineWidth={770} headline="Your Home-Based Business Needs a Plan" />
        <Paragraph big>It's easy to overlook a business plan when starting your home-based business, but that’s a mistake. Every business needs a business plan to become successful and grow.</Paragraph>
        <Paragraph big>
          You need to define how you’re going to run your home-based business, market yourself, get sales, make a profit and grow. This can only come about through creating a watertight business plan. It will help you get your thinking in order and show your commitment to your home-based business.
        </Paragraph>
        <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your home-based business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your home-based business, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your home-based business is structured
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
