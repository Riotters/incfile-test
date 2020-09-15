import React from "react";
import styled from "styled-components";
import {color} from "../../atoms/styles/colors";
import {Paragraph} from "../../atoms/typography/paragraph";

const BlueBoxWithAbsoluteText = ({absoluteText, text}) => (
    <Wrapper>
        <AbsoluteText>{absoluteText}</AbsoluteText>
        <Text big>
            {text}
        </Text>
    </Wrapper>
);

const Wrapper = styled.div`
    background-color: ${color.blue3};
    padding: 40px;
    position: relative;
    border-radius: 5px 30px 30px 5px;
    margin-bottom: 44px;
`;

const AbsoluteText = styled.div`
    color: ${color.blue1};
    position: absolute;
    top: -25px;
    left: 40px;
    font-size: 48px;
    line-height: 56px;
    font-weight: bold;
    font-family: MarkPro, sans-serif;
`;

const Text = styled(Paragraph)`
    margin-bottom: 0 !important;
    font-weight: bold;
    font-family: Avenir-Heavy, sans-serif;
    color: ${color.black};
`;

export default BlueBoxWithAbsoluteText;
