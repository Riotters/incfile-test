import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  margin-top: ${(props) => (props.topMargin ? `${props.topMargin}px` : "")};
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};
  padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
  
  @media (max-width: 575px) {
    word-break: break-word;
  }
`;

export const Heading = ({ size, children, bottomMargin, topMargin, bottomPadding, maxWidth, className, style }) => (
  <HeadingWrapper as={`h${size}`} bottomMargin={bottomMargin} topMargin={topMargin} bottomPadding={bottomPadding} maxWidth={maxWidth} className={className} style={style}>
    {children}
  </HeadingWrapper>
);

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.any,
  bottomSpace: PropTypes.number,
  maxWidth: PropTypes.number,
};

Heading.defaultProps = {
  size: 1,
  bottomMargin: `24`,
};
