import Whitebox from "../../atoms/boxes/white-box";
import React from "react";
import {Paragraph} from "../../atoms/typography/paragraph";
import styled from "styled-components";

const Wrapper = styled(Whitebox)`
    display: flex;
    align-items: center;
    padding: 24px;
    margin-bottom: 8px;
    
    svg {
        min-width: 35px;
        margin-right: 24px;
    }
`;

export const IconTextBox = ({ content }) => (
    <Wrapper>
        {content.icon && (
            <content.icon />
        )}
        {content.text && (
            <Paragraph bottomMargin="0">{content.text}</Paragraph>
        )}
    </Wrapper>
);