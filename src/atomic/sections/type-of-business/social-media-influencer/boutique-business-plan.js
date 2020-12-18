import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalGreenSVG from "../../../../images/oval-green.inline.svg";
import OvalSVG from "../../../../images/oval-pink.inline.svg";
import { Link } from "gatsby";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  width: 100%;
  margin: 0 auto;
  max-width: 770px;

  h2.title {
    font-size: 40px;
    padding-bottom: 56px;
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
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 38%;
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

const BusinessPlan = () => (
  <div style={{ position: "relative" }}>
    <Oval>
      <OvalGreenSVG />
    </Oval>
    <OvalCenter>
      <OvalSVG />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <Heading size={2} left bottomMargin={48}>
          Your Social Media Influencer Business Needs a Plan
        </Heading>
        <Paragraph big mixed={true}>
          You need to define how you’re going to run your influencer business,
          market yourself, get sales, make a profit and grow. This can only come
          about through creating a watertight business plan. It will help you
          get your thinking in order and show your commitment to your influencer
          marketing business.
          <br />
          <br />
          Business plans do vary slightly, but they should cover the following
          areas:
        </Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your
            business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your online business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your online business, background information and
            context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your online business is structured
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
          We’ve got the perfect{" "}
          <Link to="https://www.incfile.com/blog/post/keys-successful-business-plan/">
            guide to writing your business plan.
          </Link>
        </Paragraph>
      </BusinessOwnerResponsibilities>
    </Container>
  </div>
);

export default BusinessPlan;
