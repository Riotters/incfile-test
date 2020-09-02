import React from "react";
import {Heading} from "../../../atoms/typography/heading";
import {Paragraph} from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import OvalSvg from "../../../../images/oval-blue-5.inline.svg";
import styled from "styled-components";

const Regulations = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container style={{paddingTop: "100px", paddingBottom: "100px"}} width={750}>
            <Heading size={4} style={{fontSize: "40px"}}>
                Rules, Regulations and Taxes
                for Your Bookstore
            </Heading>
            <Paragraph big>
                Your bookstore business will need to be compliant with licenses, permits and regulations. You will need to explore local, state and federal licenses and permits, and we can also help out with researching your business licensing needs.
            </Paragraph>
            <Paragraph big>
                Taxes are a fact of life if you’re in business, and there are various ways you will need to file and pay them. This can include self-employment tax, state income tax and federal income tax. It’s also likely that your book sales will be subject to sales and use tax.
            </Paragraph>
            <Paragraph big>
                As a rule of thumb, we recommend holding back around a third of your earnings
                to pay your taxes. We can also prepare and file your tax returns for you.
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
