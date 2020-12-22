import React from "react";
import styled from "styled-components";

import Whitebox from "../../atoms/boxes/white-box";
import WhiteboxLI from "../../atoms/boxes/white-box-li";
import {Paragraph} from "../../atoms/typography/paragraph";

const Wrapper = styled(Whitebox)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 8px;
`;

const WrapperLI = styled(WhiteboxLI)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 8px;
`;

export const TextSpacedBox = ({ content, useListType }) => (
    <>
        {useListType ? (
            <WrapperLI>
                {content.text1 && (
                    <Paragraph bottomMargin="0">{content.text1}</Paragraph>
                )}
                {content.text2 && (
                    <Paragraph bottomMargin="0">{content.text2}</Paragraph>
                )}
            </WrapperLI>
            ) : (
            <Wrapper>
                {content.text1 && (
                    <Paragraph bottomMargin="0">{content.text1}</Paragraph>
                )}
                {content.text2 && (
                    <Paragraph bottomMargin="0">{content.text2}</Paragraph>
                )}
            </Wrapper>
        )}
    </>
);