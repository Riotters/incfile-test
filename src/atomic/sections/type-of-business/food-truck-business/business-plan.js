import React from "react";
import styled from "styled-components";

import {color} from "../../../../components/styles/colors";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSmallSVG from "../../../../images/oval-small-babyblue.inline.svg";
import OvalSVG from "../../../../images/oval-babyblue-1.inline.svg";
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
    background: ${gradient.babyblue3};
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 222px;
  display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
`

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 450px;
  display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
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
                <TextCenterLayout headline="The Food Truck Business Plan" text="You need to define how you’re going to run your food truck business, market yourself, get sales, make a profit and grow. This can only come about by creating a watertight food truck business plan. It will help you get your thinking in order and show your commitment to your new venture." />
                <Paragraph big style={{fontWeight: "bold"}}>
                    You will also need to look at financial projections for your food truck business.
                </Paragraph>

                <Paragraph big>
                    What are your expected sales and revenues? What is your profitability? How much money will you keep in the business to grow it? How much will you pay yourself and others?
                </Paragraph>
                <Paragraph big>
                    In particular, your food truck business plan should cover your startup and operational costs. You’ll need to work out how long it will be before you can turn a profit, bearing in mind the expense to buy a truck and equip it with specialized food facilities. Even after that, you’ll also need to put money toward ingredients, permits, wages, utility costs and more. Your food truck business will succeed or fail based on its profitability, so a rock solid understanding of your pricing and expenses is essential.
                </Paragraph>
                <Paragraph big>
                    Food truck business plans do vary slightly, but they should all cover the following areas:
                </Paragraph>

                <CountingTextBoxed number={1}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An executive summary with the most important points from your business plan
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={2}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        Your goals and what you hope to achieve with your food truck business
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={3}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A description of your food truck business, background information and context
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={4}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A market analysis and likely demand
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={5}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An overview of how your food truck business is structured
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
