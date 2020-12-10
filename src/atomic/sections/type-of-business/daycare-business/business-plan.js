import React from "react";
import styled from "styled-components";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import TextCenterLayout from "../../../partials/heading-center";
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
    padding-bottom: 56px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Wrapper = styled.section`
  position: relative;
  background-color: #f2f6ff;
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: none;

  @media (min-width: 420px) {
    width: 420px;
  }
`;

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 211px;
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
          headline="Your Daycare Business Plan"
          text="You might think your daycare business doesn’t need a business plan, but you’d be wrong. You will need to clearly understand and capture how you’re going to run your daycare business, market yourself, get sales, make a profit and grow. This can only come about through creating a watertight daycare business plan."
        />
        <Paragraph big style={{ marginBottom: "80px", textAlign: "center" }}>
          Business plans do vary slightly, but they should all cover the following areas:
        </Paragraph>

        <CountingTextBoxed number={1}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An executive summary with the most important points from your business plan
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={2}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your goals and what you hope to achieve with your daycare business, including your unique childcare approach
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={3}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A description of your daycare business, including background information and context
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={4}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            A market analysis and likely demand, focused on your local area and parents
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={5}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            An overview of how your daycare business is structured
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={6}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            Your business model for making money
          </Paragraph>
        </CountingTextBoxed>

        <CountingTextBoxed number={7}>
          <Paragraph bottomPadding={0} bottomMargin={0}>
            How you will market and sell your childcare services
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
