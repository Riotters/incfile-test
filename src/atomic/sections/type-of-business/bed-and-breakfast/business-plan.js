import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import {gradient} from "../../../atoms/styles/colors";

const BusinessOwnerResponsibilities = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  width: 100%;
  max-width: 770px;
  
  @media (min-width: 770px) {
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
  right: 0;
  top: 88px;
  width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`

const OvalCenter = styled.div`
  position: absolute;
  left: 0;
  bottom: 207px;
  width: 100%;
  transform: scaleX(-1);
    
    @media (min-width: 720px){
        width: 720px;
    }
`

const BusinessPlan = () => (
    <Wrapper>
        <Oval>
            <OvalSVG/>
        </Oval>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>
        <Container>
            <BusinessOwnerResponsibilities>
                <TextCenterLayout headline="Your Bed and Breakfast Business Needs a Plan" headlineWidth={770}/>
                <Paragraph big>
                    A strong business plan is vital for a successful B&B. The startup costs can be high (possibly in
                    excess of $100,000), so it’s important to nail down all of your facts, figures, strategy and other
                    areas.
                </Paragraph>

                <Paragraph big>
                    You need to define how you’re going to run your bed and breakfast business, market yourself, get
                    sales, make a profit and grow. This can only come about through creating a watertight business plan.
                    It will help you get your thinking in order and show your commitment to your boutique hotel.

                </Paragraph>
                <Paragraph big>
                    You will also need to look at financial projections for your bed and breakfast business. What are
                    your expected sales and revenues? What is your profitability? How much money will you keep in the
                    business to grow it? How much will you pay yourself and others?
                </Paragraph>

                <Paragraph big style={{fontWeight: "bold"}}>
                    If you can, try to plan your revenue for the next month, three months, year and two years
                </Paragraph>

                <Paragraph big>
                    It’s vital to take into account the cost of setting up a bed and breakfast business
                    in the first place, also factoring in utilities, staffing and other costs.
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
                        Your goals and what you hope to achieve with your bed and breakfast business
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={3}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A description of your B&B operations, background information and context
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={4}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A market analysis and likely demand
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={5}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An overview of how your boutique hotel business is structured
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
                    We’ve got the perfect <Link to="/">guide to writing your business plan.</Link>
                </Paragraph>
            </BusinessOwnerResponsibilities>
        </Container>
    </Wrapper>
);

export default BusinessPlan;
