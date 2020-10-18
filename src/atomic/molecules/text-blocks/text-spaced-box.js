import Whitebox from "../../atoms/boxes/white-box";
import React from "react";
import {Paragraph} from "../../atoms/typography/paragraph";
import styled from "styled-components";

const Wrapper = styled(Whitebox)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 8px;
`;

export const TextSpacedBox = ({ content }) => (
    <Wrapper>
        {content.text1 && (
            <Paragraph bottomMargin="0">{content.text1}</Paragraph>
        )}
        {content.text2 && (
            <Paragraph bottomMargin="0">{content.text2}</Paragraph>
        )}
    </Wrapper>
);