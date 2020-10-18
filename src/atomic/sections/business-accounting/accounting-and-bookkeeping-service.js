import styled from "styled-components";
import {Heading} from "../../atoms/typography/heading";
import React from "react";
import {Paragraph} from "../../atoms/typography/paragraph";
import ContentCenter from "../../partials/content-center";

const Wrapper = styled.div`
    position: relative;
    padding: 120px 0 133px;
    
    text-align: center;
`;

const AccountingAndBookkeepingService = ({ content }) => (
    <Wrapper>
        <ContentCenter contentWidth={770}>
            <Heading size={2} bottomMargin={49}>{content.header}</Heading>
            <Paragraph big bottomMargin={40}>{content.text}</Paragraph>
            <Paragraph big>{content.text2}</Paragraph>
        </ContentCenter>
    </Wrapper>
);

export default AccountingAndBookkeepingService;