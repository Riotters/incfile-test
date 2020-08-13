import React from "react";
import styled from "styled-components";
import Colorbox from "../../atoms/boxes/color-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color } from "../../atoms/styles/colors";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";

const dotColor = (circleColor) => {
    switch(circleColor) { 
        case color.blue3: {
            return color.blue1;
        }
        case color.orange3: {
            return color.orange1;
        }
        case color.green3: {
            return color.green1;
        }
        case color.purple3: {
            return color.purple1;
        }
        case color.babyblue3: {
            return color.babyblue1;
        }
        case color.yellow3: {
            return color.yellow1;
        }
        default:
            return "";
    };
}

const Wrapper = styled.div`
    position: relative;
    margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};

    .box {
        padding: 40px 40px 40px 112px;
        border-radius: ${props => props.rounded ? "5px 50px 50px 5px" : ""};

        svg {
            position: absolute;
            top: 40px;
            left: 40px;
        }
    }

    p {
        color: ${color.grey1} !important;
    }
`

const IconTextColorBox = ({ className, Icon, color, content, bottomMargin, rounded, curve, curveColor }) => {

  return (
    <Wrapper className={className} rounded={rounded} bottomMargin={bottomMargin}>
        {curve && 
            <Curve top="-15" right="-15" color={curveColor ? curveColor : dotColor(color)}>
                <CurveSVG />
            </Curve>
        }
        <Colorbox className="box" color={color}>
            <Icon />
            <Heading size="4" bottomMargin="16">{content.header}</Heading>
            <Paragraph bottomMargin="0">{content.text}</Paragraph>
        </Colorbox>
    </Wrapper>
  )
}

export default IconTextColorBox
