import React from "react";
import styled from "styled-components";
import {color} from "../../../../components/styles/colors";
import {Heading} from "../../../atoms/typography/heading";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalGreenSVG from "../../../../images/ovals/bottom-right-transparent-green1.inline.svg";
import OvalSVG from "../../../../images/ovals/top-right-transparent-pink2.inline.svg";

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
  
  @media (min-width: 420px){
    width: 420px;
  }
`

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 38%;
  width: 100%;
  
  @media (min-width: 720px){
    width: 720px;
  }
`

const MovingBusinessPlan = () => (
    <div style={{position: "relative"}}>
        <Oval>
            <OvalGreenSVG/>
        </Oval>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>
        <Container>
            <BusinessOwnerResponsibilities>
                <Heading size={4} className="title">
                    Your Moving Business Needs a Plan
                </Heading>
                <Paragraph big>
                    You need to define how you’re going to run your moving business, market yourself, get sales, make a
                    profit and grow. This can only come about by creating a watertight business plan. It will help you
                    get your thinking in order and show your commitment to your moving business.
                </Paragraph>
                <Paragraph big>
                    Your relocation company needs a business model, which is how you will generate sales, provide
                    services and make money. Think about your business model now, because it’s better to have that in
                    place so you can start acquiring customers and generating revenue from day one.
                </Paragraph>
                <Paragraph big>
                    Business plans do vary slightly, but they should all cover the following areas:
                </Paragraph>

                <CountingTextBoxed number={1}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An executive summary with the most important points from your business plan
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={2}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Your goals and what you hope to achieve with your coaching business
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={3}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A description of your life or business coaching niche, background information and context
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={4}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A market analysis and likely demand
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={5}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An overview of how your life or business coaching organization is structured
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

                <Paragraph big style={{marginTop: "50px"}}>
                    We’ve got the perfect <span style={{color: color.blue1, fontWeight: "bold"}}>guide to writing your business plan.</span>
                </Paragraph>
            </BusinessOwnerResponsibilities>
        </Container>
    </div>
);

export default MovingBusinessPlan;
