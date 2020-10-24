import React from "react";
import styled from "styled-components";
import Circle from "../../atoms/icons/circle";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";
import Curve2SVG from "../../../images/curves/top-left-bottom-right.inline.svg";

const iconColor = (bgColor) => {
  switch (bgColor) {
    case color.blue3: {
      return color.blue2;
    }
    case color.orange3: {
      return color.orange2;
    }
    case color.green3: {
      return color.green2;
    }
    case color.purple3: {
      return color.purple2;
    }
    case color.babyblue3: {
      return color.babyblue2;
    }
    case color.yellow3: {
      return color.yellow2;
    }
    default:
      return "";
  }
};

const circleColor = (bgColor) => {
  switch (bgColor) {
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
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 366px;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : "")};
  border-radius: ${(props) => (props.radius ? props.radius : "5px")};
  padding: 56px 24px;
  position: relative;
`;

const AbsoluteCircle = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
`;

const TextWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-height: 105px;
  position: relative;

  &:not(:last-child) {
    &::before {
      content: "";
      height: 4px;
      width: 4px;
      background-color: ${props => props.circleColor};
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 2px);
      bottom: -2px;
    }
  }
`;

const ColorBoxWithTopIcon = ({ children, content, icon, color, radius, curve, curveLeft, curveRight }) => (
  <Wrapper color={color} radius={radius}>
    {curve && (
      <Curve top="-10" left={curveLeft ? "-10" : null} right={curveRight ? "-10" : null} color={circleColor(color)}>
          {curveLeft && (
            <CurveSVG />
          )}
          {curveRight && (
            <Curve2SVG />
          )}
      </Curve>
    )}
    <AbsoluteCircle>
      <Circle padding={0} height={80} width={80} circleColor={iconColor(color)}>
        {icon}
      </Circle>
    </AbsoluteCircle>
    {content?.fields && content.fields.map(field => (
      <TextWapper circleColor={circleColor(color)}>
        <Heading size="4" bottomMargin="0">{field.header}</Heading>
        <Paragraph bottomMargin="0">{field.text}</Paragraph>
      </TextWapper>
    ))}
  </Wrapper>
);

export default ColorBoxWithTopIcon;
