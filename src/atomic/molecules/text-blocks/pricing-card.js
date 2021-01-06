import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";

const Wrapper = styled.div`
    width: 100%;
    max-width: 470px;
    position: relative;
    
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 24px;
    }

    span {
        font-family: MarkPro, sans-serif;
        font-size: 48px;
        line-height: 56px;
        color: ${color.orange1};
        margin-bottom: 24px;
    }

    p {
        text-align: center;
    }
`

const PricingCard = ({ className, content }) => (
    <Wrapper className={className}>
        <Whitebox className="box">
            <Heading size="4" bottomMargin="32">{content.header}</Heading>
            <span>${content.price}</span>
            <Paragraph bottomMargin="0">{content.text}</Paragraph>
            <Paragraph bottomMargin="0">{content.bracket}</Paragraph>
        </Whitebox>
    </Wrapper>
)

export default PricingCard
