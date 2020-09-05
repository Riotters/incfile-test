import React from "react";
import styled from "styled-components";
import {color} from "../../../../components/styles/colors";
import {Heading} from "../../../atoms/typography/heading";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange2.inline.svg";

const Wrapper = styled.div`
    position: relative;
    background-color: ${color.orange3};
`;

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
    padding-bottom: 24px;
  }

  .box {
    margin-bottom: 48px;
  }
`;

const Oval = styled.div`
  position: absolute;
  left: 0;
  top: 71px;
  width: 420px;
  display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
`

const OvalCenter = styled.div`
  position: absolute;
  right: 0;
  bottom: 361px;
  width: 720px;
  transform: scaleX(-1);
  display: none;
  
  @media (min-width: 1200px){
    display: block;
  }
`

const BusinessPlan = () => (
    <Wrapper style={{position: "relative"}}>
        <Oval>
            <OvalSVG/>
        </Oval>
        <OvalCenter>
            <OvalSVG/>
        </OvalCenter>
        <Container>
            <BusinessOwnerResponsibilities>
                <Heading size={4} className="title">
                    Your Travel Agency Needs
                    a Business Plan
                </Heading>
                <Paragraph big>
                    Profit margins in travel agency businesses can be tight (between 6 and 12 percent), so you need to stay on top of your finances and business planning.
                </Paragraph>

                <Paragraph big>
                    A business plan will help you decide and define how you’re going to run your travel agency business, where you will get money, how you will market your tourism services, how you will create your sales plan and what you envision for your profitability and future growth.
                </Paragraph>

                <Paragraph big style={{fontWeight: "bold"}}>
                    All travel agencies need a solid business model, which is how you will generate sales, provide services and make money.
                </Paragraph>

                <Paragraph big>
                    Think about your travel and tourism business model now, because it’s better to have that in place so you can start acquiring customers and generating revenue from day one.
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
                        Your goals and what you hope to achieve with your travel agency business
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={3}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A description of your travel agency business, including background information, your chosen niche and context
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={4}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        A market analysis and likely demand
                    </Paragraph>
                </CountingTextBoxed>

                <CountingTextBoxed number={5}>
                    <Paragraph bottomPadding={0} bottomMargin={0}>
                        An overview of how your travel agency business is structured
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
