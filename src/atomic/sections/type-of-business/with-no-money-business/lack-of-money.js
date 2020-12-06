import React from "react";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import styled from "styled-components";
import {color} from "../../../atoms/styles/colors";

const LackOfMoney = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <Heading size={2} template={4} left style={{fontSize: "40px"}}>
            Why a Lack of Money Shouldn’t Stop You From Starting a New Business
            </Heading>
            <Paragraph big style={{marginBottom: "48px"}}>
                Starting a business is one of the most powerful things you can do. It’s an opportunity to create unique
                products and services, bring your ideas to life and create something truly valuable for your customers,
                employees, suppliers and peers.
            </Paragraph>

            <Paragraph big style={{fontWeight: "bold", color: color.black, marginBottom: "24px"}}>
                A lack of money doesn’t stop you doing any of those things.
            </Paragraph>
            <Paragraph big>
                It might mean you have to manage operations more carefully, pay closer attention to finances, drive your
                product to market sooner and slow down your expansion plans, but none of those areas alone will kill
                your business.
            </Paragraph>
            <Paragraph big>
                In fact, the discipline of founding and growing a business with very little capital will teach you
                important lessons about financial control, decision making and the art and science of being an
                entrepreneur. True, some business options will be off the table...but with a little creative thought and
                a lot of planning and dedication, there’s every reason you will succeed.
            </Paragraph>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
    background-color: ${color.orange3};
`;

const Oval = styled.div`
    position: absolute; 
    bottom: 53px;
    left: 0;
    width: 100%;
    
    @media (min-width: 420px) {
        width: 420px;
    }
`;
export default LackOfMoney;
