import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"
import { shadow } from "../styles/shadows"

const shadow1 = (circleColor) => {
  switch(circleColor) { 
    case color.blue2: {
      return shadow.blue2;
    }
    case color.orange2: {
      return shadow.orange2;
    }
    case color.green2: {
      return shadow.green2;
    }
    case color.purple2: {
      return shadow.purple2;
    }
    case color.babyblue2: {
      return shadow.babyblue2;
    }
    case color.yellow2: {
      return shadow.yellow2;
    }
    default:
      return "";
  };
}

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.theme === "empty" ? 5 : (props.height ? props.height : 32)}px;
    width: ${props => props.width ? props.width : 32}px;
    min-width: 32px;
    background: ${props => props.circleColor ? props.circleColor : color.grey4};
    box-shadow: ${({ circleColor }) => shadow1(circleColor)};
    border-radius: ${props => props.theme === "empty" ? "2.5px" : "50%"};
    overflow: hidden;
    color: ${props => props.iconColor ? props.iconColor : ""};
    font-family: Avenir, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: ${props => props.padding ? `${props.padding}px` : ""};
    margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};
    border: 1px solid ${props => props.border ? props.border : "transparent"};
    pointer-events: none;

    @media(min-width: 576px) {
      height: ${props => props.theme === "empty" ? 5 : (props.heightSM ? props.heightSM : 32)}px;
      width: ${props => props.widthSM ? props.widthSM : 32}px;
    }


    svg {
        transform: ${props => props.transform ? props.transform : ""};

        path {
            fill: ${props => props.iconColor ? props.iconColor : ""};
        }
    }
`;

const Circle = ({
    children,
    className,
    theme,
    height,
    width,
    heightSM,
    widthSM,
    transform,
    circleColor,
    iconColor,
    border,
    bottomMargin,
    padding,
  }) => (
    <Wrapper
      className={className}
      theme={theme}
      height={height}
      width={width}
      heightSM={heightSM}
      widthSM={widthSM}
      transform={transform}
      circleColor={circleColor}
      iconColor={iconColor}
      border={border}
      bottomMargin={bottomMargin}
      padding={padding}
    >
        {children}
    </Wrapper>
  )
  export default Circle
