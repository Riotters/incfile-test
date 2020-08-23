import React from "react";
import styled from "styled-components";
import CircleSvg from "../../../images/circle-percentage.inline.svg";

const CircleWithText = ({textInsideCircle, textLine, symbol}) => (
    <Wrapper>
        <Circle>
            <CircleSvg/>
            <TextInside>
                <span>
                    {textInsideCircle}
                    {symbol && <Symbol>{symbol}</Symbol>}
                </span>
            </TextInside>
        </Circle>

        <TextBox>
            {textLine}
        </TextBox>
    </Wrapper>
);

const Wrapper = styled.div`
    max-height: 270px;
    display: flex;
    align-items: center;
`;

const Circle = styled.div`
    position: relative;
    max-width: 270px;
    max-height: 270px;
`

const TextInside = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: black;
    line-height: 56px;
    font-family: MarkPro-Bold, sans-serif;
    font-weight: bold;
    
    span {
        position: relative;
    }
`;

const Symbol = styled.div`
    position: absolute;
    top: 0;
    right: -16px;
    font-size: 18px;
    line-height: 32px;
    color: #7a7a7a;
`;

const TextBox = styled.div`
    font-family: Avenir-Heavy, sans-serif;
    font-size: 20px;
    color: #1d1d1d;
`;

export default CircleWithText;
