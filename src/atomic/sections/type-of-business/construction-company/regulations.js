import React from "react";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/oval-blue-5.inline.svg";
import styled from "styled-components";

const Regulations = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <Heading size={4} style={{fontSize: "40px"}}>
                Rules, Regulations and Taxes for Your Construction Business
            </Heading>
            <Paragraph big mixed={true}>
                Construction businesses will need to meet stringent rules and regulations, especially around building
                codes. You will also need to get licenses and permits. <span className="big blue">We can help out with researching your
                construction business licensing needs.</span>
            </Paragraph>
            <Paragraph big mixed={true}>
                Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay
                them. This can include self-employment tax, state income tax and federal income tax. Depending on where
                and how you’re selling products and services, you may also be liable for sales and use tax.
            </Paragraph>
            <Paragraph big mixed={true}>
                As a rule of thumb, we recommend holding back around a third of your earnings
                to pay your taxes. We can also <span className="big blue">prepare and file your tax returns for you.</span>
            </Paragraph>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
`;

const Oval = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0;
`;
export default Regulations;
