import React from "react"
import styled from "styled-components"
import ArrowSVG from "../images/arrow.inline.svg"
import Arrow2SVG from "../images/arrow2.inline.svg"

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  background-color: ${props => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? "#FD8550" : "#fff")};
  border: 2px solid #fd8550;
  border-radius: 50px;
  color: ${props => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? "#fff" : "#FD8550")};
  font-family: MarkPro;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  padding: ${props => (props.padding ? props.padding : props.theme === "primary40" ? "4px 32px" : props.theme === "primary48" ? "8px 40px" : props.theme === "primary56" ? "12px 48px" : "")};
  margin: ${props => (props.margin ? props.margin : "")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? "#fff" : "#FD8550")};
    color: ${props => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? "#FD8550" : "#fff")};

    .arrow1,
    .arrow2 {
      transform: translate(3px, -50%);
    }

    .arrow1 {
      svg {
        path {
          fill: ${props => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? "#FD8550" : "#fff")};
        }
      }
    }

    .arrow2 {
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
`

const Arrow = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    display: flex;
  }

  svg {
    path {
      transition: fill 0.3s ease;
    }
  }

  &.arrow1 {
    svg {
      path {
        fill: ${props => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? "#fff" : "#FD8550")};
      }
    }
  }

  &.arrow2 {
    svg {
      path {
        fill: #fd945b;
      }
    }
  }
`

const Button = ({
  children,
  className,
  theme,
  height,
  width,
  arrow,
  arrow2,
  margin,
  padding,
  right,
}) => (
  <Wrapper
    href="#"
    className={className}
    height={height}
    width={width}
    arrow={arrow}
    arrow2={arrow2}
    theme={theme}
    margin={margin}
    padding={padding}
  >
    {children}
    {arrow === "yes" ? (
      <Arrow className="arrow1" theme={theme} right={right}>
        <ArrowSVG />
      </Arrow>
    ) : null}
    {arrow2 === "yes" ? (
      <Arrow className="arrow2">
        <Arrow2SVG />
      </Arrow>
    ) : null}
  </Wrapper>
)
export default Button
