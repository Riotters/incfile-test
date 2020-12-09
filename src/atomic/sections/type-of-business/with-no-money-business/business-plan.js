import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";
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
  background: white;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, #fef6ed);
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 300px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 206px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;
const BusinessPlan = () => (
  <Wrapper>
    <Oval>
      <OvalSVG />
    </Oval>
    <OvalCenter>
      <OvalSVG />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <TextCenterLayout
          headline="A Business Model for a Bootstrapped Business"
          text="All businesses need a business model, which represents the way you will generate sales, provide services and make money. Think about your business model now, because it’s better to have that in place so you can start acquiring customers and generating revenue from day one. This is particularly important when you’re bootstrapping; creating revenue almost immediately is critical."
        />

        <Paragraph big style={{ fontWeight: "bold", marginTop: "48px", marginBottom: "24px", color: color.black }}>
          You will also need to look at financial projections for your business.
        </Paragraph>
        <Paragraph big style={{ marginBottom: "48px" }}>
          What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others? If you can, try to plan your revenue out for the next month, three months, year and two years. Work hard to minimize
          expenses and maximize profits.
        </Paragraph>

        <Paragraph big style={{ fontWeight: "bold", marginBottom: "24px", color: color.black }}>
          Write a Business Plan for Your Business
        </Paragraph>
        <Paragraph big>Business plans do vary slightly, but they should cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your business, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your online business, background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your business is structures
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
