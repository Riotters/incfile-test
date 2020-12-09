import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import { gradient } from "../../../atoms/styles/colors";

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
  background: ${gradient.blue3};
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 239px;
  width: 100%;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 239px;
  width: 100%;
  transform: scaleX(-1);

  @media (min-width: 720px) {
    width: 720px;
  }
`;

const BusinessPlan = () => (
  <Wrapper>
    <Oval>
      <OvalSvg />
    </Oval>
    <OvalCenter>
      <OvalSvg />
    </OvalCenter>
    <Container>
      <BusinessOwnerResponsibilities>
        <TextCenterLayout headline="Your Dog Walking or Pet Sitting Business Needs a Plan" />
        <Paragraph big>
          You might think that your dog-related business doesn’t need a plan, but you’ll find that a solid business model will help you become a success. A business plan will help you define how you’re going to run your dog walking or pet sitting business, market yourself, get sales, make a profit
          and grow.
        </Paragraph>
        <Paragraph big style={{ marginBottom: "48px" }}>
          You need to establish your canine business plan and model now, which is how you will generate sales, provide services and make money. It’s best to get your plans in place now so you can start acquiring customers and generating revenue from day one.
        </Paragraph>

        <Paragraph big style={{ fontFamily: "Avenir", fontWeight: "900", color: color.black }}>
          Think about and predict financial projections for your dog walking or pet sitting business.
        </Paragraph>

        <Paragraph big>What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?</Paragraph>
        <Paragraph big>Business plans do vary slightly, but they should all cover the following areas:</Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your dog-related business
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your dog walking, pet sitting or other business, including background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your dog business is structured
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
