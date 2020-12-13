import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalOrange1 from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
import { Link } from "gatsby";

const Wrapper = styled.div`
  position: relative;
  background-color: ${color.orange3};
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

  h2.title {
    font-size: 40px;
    padding-bottom: 24px;
    line-height: 48px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  transform: scaleX(-1);

  svg {
    transform: scaleY(-1);
  }

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 570px) {
    width: 570px;
  }
`;

const BusinessPlan = () => (
  <Wrapper style={{ position: "relative" }}>
    <Oval>
      <OvalOrange1 />
    </Oval>
    <OvalCenter>
      <OvalSVG />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <Heading size={2} left>
        Your Construction Company Needs a Plan
        </Heading>
        <Paragraph big>
          A business plan is critical for a construction business. All businesses need a business model, which is how you will generate sales, provide services and make money. Think about your construction business model now, because it’s better to have that in place so you can start acquiring
          customers and generating revenue from day one.
        </Paragraph>

        <Paragraph big>You will also need to look at financial projections for your construction business. What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?</Paragraph>

        <Paragraph big style={{ fontWeight: "bold" }}>
          If you can, try to plan your revenue for the next month, three months, year and two years.
        </Paragraph>

        <Paragraph big>It’s vital to take into account the cost of setting up a construction business in the first place, also factoring in utilities, staff and other costs. All of these details should go into your business plan.</Paragraph>

        <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your construction business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your construction business, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand for your construction services
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your construction business is structured
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
