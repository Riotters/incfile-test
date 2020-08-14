import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { color } from "../../../components/styles/colors";
import ArrowSVG from "../../../images/arrow.inline.svg";
import Arrow2SVG from "../../../images/arrow2.inline.svg";
import PropTypes from "prop-types";

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "auto")};
  width: 100%;
  background-color: ${(props) => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? color.orange1 : color.white)};
  border: 2px solid ${color.orange1};
  border-radius: 50px;
  color: ${(props) => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? color.white : color.orange1)};
  font-family: MarkPro;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
  position: relative;
  padding: ${(props) => (props.padding ? props.padding : props.theme === "primary40" || props.theme === "secondary40" ? "2px 30px" : props.theme === "primary48" || props.theme === "secondary48" ? "6px 38px" : props.theme === "primary56" || props.theme === "secondary56" ? "10px 46px" : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  transition: background-color 0.3s ease, color 0.3s ease;

  
  @media(min-width: 576px) {
    width: auto;
  }
  
  @media (min-width: 769px) {
    white-space: nowrap;
    margin: ${(props) => (props.marginMD ? props.marginMD : "")};
  }

  @media (min-width: 992px) {
    margin: ${(props) => (props.marginLG ? props.marginLG : "")};
  }

  @media (min-width: 1200px) {
    margin: ${(props) => (props.marginXL ? props.marginXL : "")};
  }
  
  @media (min-width: ${(props) => (props.width)}) {
    max-width: ${(props) => (props.width)}
  }
  
  &:hover {
    background-color: ${(props) => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? color.white : color.orange1)};
    color: ${(props) => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? color.orange1 : color.white)};

    .arrow1,
    .arrow2 {
      transform: translate(3px, -50%);
    }

    .arrow1 {
      svg {
        path {
          fill: ${(props) => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? color.orange1 : color.white)};
        }
      }
    }

    .arrow2 {
      svg {
        path {
          fill: ${color.white};
        }
      }
    }
  }
`;

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

  @media (min-width: 769px) {
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
        fill: ${(props) => (props.theme === "primary40" || props.theme === "primary48" || props.theme === "primary56" ? color.white : color.orange1)};
      }
    }
  }

  &.arrow2 {
    svg {
      path {
        fill: ${color.orange1};
      }
    }
  }
`;

const Button = ({ content, className, theme, height, width, arrow, arrow2, margin, marginMD, marginLG, padding, right }) => (
  <Wrapper className={className} to={content.url ? content.url : content} height={height} width={width} arrow={arrow} arrow2={arrow2} theme={theme} margin={margin} marginMD={marginMD} marginLG={marginLG} padding={padding}>
    {content.text ? content.text : content}
    {arrow && (
      <Arrow className="arrow1" theme={theme} right={right}>
        <ArrowSVG />
      </Arrow>
    )}
    {arrow2 && (
      <Arrow className="arrow2">
        <Arrow2SVG />
      </Arrow>
    )}
  </Wrapper>
);

export default Button;

Button.propTypes = {
  width: PropTypes.string,
  content: {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }
}

Button.defaultProps = {
  width: "auto",
  content: {
    text: "Start your business with us, today!",
    url: "/"
  }
}
