import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../styles/colors";

const Wrapper = styled(Link)`
  font-size: ${(props) => (props.big ? "20" : "14")}px;
  color: ${(props) => props.fontColor};
  line-height: ${(props) => (props.big ? "28" : "24")}px;
  font-family: Avenir, sans-serif;
  text-decoration: none;
  padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")} !important;
  margin-bottom: ${(props) => props.bottomMargin}px !important;
`;

const CustomLink = ({ className, linkText, linkUrl, maxWidth, bottomPadding, bottomMargin, onClick, ...rest }) => (
    <Wrapper
        className={className}
        to={linkUrl}
        maxWidth={maxWidth}
        bottomPadding={bottomPadding}
        bottomMargin={bottomMargin}
        onClick={e => onClick(e)}
        {...rest}>
    {linkText}
  </Wrapper>
);

export default CustomLink;

CustomLink.propTypes = {
  color: PropTypes.string,
  maxWidth: PropTypes.number,
  bottomPadding: PropTypes.number,
  bottomMargin: PropTypes.number,
};

CustomLink.defaultProps = {
  fontColor: color.blue1,
  bottomMargin: 32,
};
