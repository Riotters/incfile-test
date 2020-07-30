import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors"
import ArrowSVG from "../../../images/arrow.inline.svg";

const Wrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  
  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${color.orange1};
    transition: color 0.3s ease;
  }

  &:hover {
    span {
      color: ${color.blue1};
    }

    svg {
      path {
        fill: ${color.blue1};
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
  margin-left: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: ${color.black};
    }
  }
`

const PathLink = ({ children, className, to }) => (
  <Wrapper to={to} className={className}>
    <span>{children}</span>
    <Arrow>
      <ArrowSVG />
    </Arrow>
  </Wrapper>
)
export default PathLink
