import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.theme === "empty" ? 5 : (props.height ? props.height : 32)}px;
    width: ${props => props.width ? props.width : 32}px;
    min-width: 32px;
    background: ${props => props.circleColor ? props.circleColor : color.grey4};
    border-radius: ${props => props.theme === "empty" ? "2.5px" : "50%"};
    overflow: hidden;
    color: ${props => props.iconColor ? props.iconColor : ""};
    font-family: Avenir, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: ${props => props.padding ? props.padding : 0}px
    border: 1px solid ${props => props.border ? props.border : "transparent"};
    pointer-events: none;

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
    transform,
    circleColor,
    iconColor,
    border,
    margin,
    padding,
  }) => (
    <Wrapper
      className={className}
      theme={theme}
      height={height}
      width={width}
      transform={transform}
      circleColor={circleColor}
      iconColor={iconColor}
      border={border}
      margin={margin}
      padding={padding}
    >
        {children}
    </Wrapper>
  )
  export default Circle