import React from "react";
import styled from "styled-components";

import {color} from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSmallSVG from "../../../../images/oval-orange-2.inline.svg";
import OvalSVG from "../../../../images/oval-orange-4.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import {gradient} from "../../../atoms/styles/colors";

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

const Wrapper = styled.section`
    position: relative;
    background: ${gradient.green3};
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 20%;
`

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  top: 38%;
`

const BusinessPlan = () => (
    <Wrapper>
        <Oval>
            <OvalSmallSVG/>
        </Oval>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>
        <Container>
            <BusinessOwnerResponsibilities>
                <TextCenterLayout headline="Your Brewery Business Plan"/>
                <Paragraph big>
                    A good business plan with accurate financial projections is at the heart of any financially responsible, well-managed brewery. You will need to define how you’re going to run your brewery business, market yourself, get sales, make a profit and grow.
                </Paragraph>

                <Paragraph big style={{fontWeight: "bold"}}>
                    You will also need a business model for your brewery.
                </Paragraph>

                <Paragraph big>
                    This will detail where your revenue will come from, what your profit margins are, how quickly you will pay off debts and include a thorough accounting of all your initial and ongoing brewery costs.
                </Paragraph>
                <Paragraph big>
                    Brewery business plans do vary slightly, but they should all cover the following areas:
                </Paragraph>

                <CountingTextBoxed number={1}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An executive summary with the most important points from your business plan
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={2}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Your goals and what you hope to achieve with your brewery business
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={3}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A description of your brewery business, background information and context
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={4}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A market analysis and likely demand
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={5}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An overview of how your brewery business is structured
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

                <Paragraph big style={{marginTop: "50px"}} mixed={true}>
                    We’ve got the perfect <span style={{color: color.blue1, fontWeight: "bold"}}>guide to writing your business plan.</span>
                </Paragraph>
            </BusinessOwnerResponsibilities>
        </Container>
    </Wrapper>
);

export default BusinessPlan;
