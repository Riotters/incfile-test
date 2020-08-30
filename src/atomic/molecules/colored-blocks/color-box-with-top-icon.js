import React from "react";
import styled from "styled-components";
import Circle from "../../atoms/icons/circle";
import { color } from "../../atoms/styles/colors";

const circleColor = (bgColor) => {
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

const Wrapper = styled.div`
  background-color: ${(props) => (props.color ? props.color : "")};
  height: 366px;
  width: 100%;
  position: relative;
  border-radius: ${(props) => (props.radius ? props.radius : "5px")};
`;

const AbsoluteCircle = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
`;

const ColorBoxWithTopIcon = ({ children, content, icon, color, radius }) => (
  <Wrapper color={color} radius={radius}>
    <AbsoluteCircle>
      <Circle padding={0} height={80} width={80} circleColor={circleColor(color)}>
        {icon}
      </Circle>
    </AbsoluteCircle>
    {children}
  </Wrapper>
);

export default ColorBoxWithTopIcon;
