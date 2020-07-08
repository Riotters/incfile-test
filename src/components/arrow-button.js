import React from "react"
import styled from "styled-components"
import { color } from "./styles/colors"
import ArrowSVG from "../images/arrow.inline.svg"

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : "48px")};
  width: ${props => (props.width ? props.width : "48px")};
  background-color: ${color.orange3};
  border-radius: 50%;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  padding: ${props => (props.padding ? props.padding : "")};
  margin: ${props => (props.margin ? props.margin : "")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${color.orange3};

    .arrow1 {
      transform: translateX(-3px);
    }

    .arrow1 {
      svg {
        path {
          fill: ${color.orange1};
        }
      }
    }
  }
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  position: absolute;
  transition: transform 0.3s ease;

  svg {
    transform: scale(-1);

    path {
      transition: fill 0.3s ease;
    }
  }

  &.arrow1 {
    svg {
      path {
        fill: ${color.orange1};
      }
    }
  }
`

const Button = ({
  className,
  height,
  width,
  margin,
  padding,
}) => (
  <Wrapper
    href="#"
    className={className}
    height={height}
    width={width}
    margin={margin}
    padding={padding}
  >
      <Arrow className="arrow1">
        <ArrowSVG />
      </Arrow>
  </Wrapper>
)
export default Button
