import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import {color} from "../../atoms/styles/colors";
import {shadow} from "../../atoms/styles/shadows";
import CircleSvg from "../../../images/circle-percentage.inline.svg";

const CircleWithText = ({textInsideCircle, textLine, symbol, withBg, SvgChart, ...rest}) => (
    <Wrapper withBg={withBg} {...rest}>
        <Circle>
            <SvgChart/>
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

CircleWithText.propTypes = {
    withBg: PropTypes.bool,
    textInsideCircle: PropTypes.string.isRequired,
    textLine: PropTypes.string.isRequired,
    symbol: PropTypes.string
};

CircleWithText.defaultProps = {
    withBg: false,
    SvgChart: CircleSvg
}

const Wrapper = styled.div`
    max-height: 270px;
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    padding: 40px 40px 40px 40px;
    
    ${props => props.withBg &&
        "background-color:" + color.white + ";" +
        "box-shadow:" + shadow.white1 + ";" +
        "border-top-left-radius: 8px;" +
        "border-top-right-radius: 20px;" +
        "border-bottom-left-radius: 8px;" +
        "border-bottom-right-radius: 20px;"
    }
`;

const Circle = styled.div`
    position: relative;
    width: 180px;
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
    font-family: MarkPro, sans-serif;
    font-weight: bold;
    
    span {
        position: relative;
    }
`;

const Symbol = styled.div`
    position: absolute;
    top: 0;
    right: -20px;
    font-size: 18px;
    line-height: 32px;
    color: #7a7a7a;
`;

const TextBox = styled.div`
    font-family: Avenir, sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: #1d1d1d;
    padding-right: 16px;
    padding-bottom: 24px;
    padding-top: 24px;
    margin-left: 44px;
    width: calc(100% - 160px);
`;

export default CircleWithText;
