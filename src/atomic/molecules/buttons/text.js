import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import ArrowSVG from "../../../images/arrow.inline.svg";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")} !important;
  padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")} !important;
  margin-top: ${(props) => (props.topMargin ? `${props.topMargin}px` : "")};
  margin-bottom: ${(props) => props.bottomMargin}px !important;

  span {
    transition: color 0.3s ease;
    font-weight: 600;
  }

  &:hover {
    color: #fd8550;

    svg {
      path {
        fill: #fd8550;
      }
    }
  }
`;

const WrapperExternal = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")} !important;
  padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")} !important;
  margin-top: ${(props) => (props.topMargin ? `${props.topMargin}px` : "")};
  margin-bottom: ${(props) => props.bottomMargin}px !important;

  span {
    transition: color 0.3s ease;
    font-weight: 600;
  }

  &:hover {
    color: #fd8550;

    svg {
      path {
        fill: #fd8550;
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
  margin-right: 10px;

  svg {
    path {
      transition: fill 0.3s ease;
      fill: #5088fd;
    }
  }
`;

const ArrowLink = ({ className, content, maxWidth, bottomPadding, bottomMargin, topMargin, onClick, external }) => (
  <>
    {!external ? (
      <Wrapper to={content.url} className={className} maxWidth={maxWidth} bottomPadding={bottomPadding} bottomMargin={bottomMargin} topMargin={topMargin}>
        <Arrow>
          <ArrowSVG />
        </Arrow>
        <span>{content.text}</span>
      </Wrapper>
    ) : (
      <WrapperExternal href={content.url} className={className} maxWidth={maxWidth} bottomPadding={bottomPadding} bottomMargin={bottomMargin} topMargin={topMargin} target="_blank" rel="noopener noreferrer">
        <Arrow>
          <ArrowSVG />
        </Arrow>
        <span>{content.text}</span>
      </WrapperExternal>
    )}
  </>
);

export default ArrowLink;

ArrowLink.propTypes = {
  maxWidth: PropTypes.number,
  bottomPadding: PropTypes.number,
  bottomMargin: PropTypes.number,
};

ArrowLink.defaultProps = {
  bottomMargin: 32,
};
