import React from "react";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import styled from "styled-components";
import {Link} from "gatsby";

const Regulations = () => (
    <Wrapper>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <Heading size={4} style={{fontSize: "40px"}}>
                Rules, Regulations and Taxes for Your Bed and Breakfast Business
            </Heading>
            <Paragraph big mixed>
                You will need to explore local, state and federal licenses and permits, and <Link to="/">we can also help out with
                researching your business licensing needs</Link>.
            </Paragraph>
            <Paragraph big>
                Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay
                them. This can include self-employment tax, state income tax and federal income tax. You may also be
                liable for occupancy and sales and use tax.
            </Paragraph>
            <Paragraph big mixed>
                As a rule of thumb, we recommend holding back around a third to three-fifths of your earnings to pay
                your taxes. We can also <Link to="/">prepare and file your tax returns for you</Link>.
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
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;
export default Regulations;
