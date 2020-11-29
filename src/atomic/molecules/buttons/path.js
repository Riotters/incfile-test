import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors";
import ArrowSVG from "../../../images/arrow.inline.svg";
import PropTypes from "prop-types";

const Wrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${(props) => props.textColor};
    transition: color 0.3s ease;
  }

  &:hover {
    span {
      color: ${(props) => props.hoverColor};
    }

    svg {
      path {
        fill: ${(props) => props.hoverColor};
      }
    }
  }
`;

const WrapperExternal = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${(props) => props.textColor};
    transition: color 0.3s ease;
  }

  &:hover {
    span {
      color: ${(props) => props.hoverColor};
    }

    svg {
      path {
        fill: ${(props) => props.hoverColor};
      }
    }
  }
`;

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
      fill: ${(props) => props.arrowColor};
    }
  }
`;

const PathLink = ({ children, className, to, textColor, arrowColor, hoverColor, externalLink }) => (
  <>
    {!externalLink ? (
      <Wrapper to={to} className={className} textColor={textColor} hoverColor={hoverColor}>
        <span>{children}</span>
        <Arrow arrowColor={arrowColor}>
          <ArrowSVG />
        </Arrow>
      </Wrapper>
    ) : (
      <WrapperExternal href={to} className={className} textColor={textColor} hoverColor={hoverColor} rel="noopener noreferrer nofollow" target="_blank">
        <span>{children}</span>
        <Arrow arrowColor={arrowColor}>
          <ArrowSVG />
        </Arrow>
      </WrapperExternal>
    )}
  </>
);

PathLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  arrowColor: PropTypes.string,
  hoverColor: PropTypes.string,
};

PathLink.defaultProps = {
  textColor: color.orange1,
  arrowColor: color.black,
  hoverColor: color.blue1,
};

export default PathLink;
