import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../../components/styles/colors";

const StyledParagraph = styled.p`
    font-family: Avenir, sans-serif;
    font-size: ${(props) => (props.big ? "20" : "16")}px;
    line-height: ${(props) => (props.big ? "32" : "24")}px;
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
    padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")};
    margin-bottom: ${(props) => props.bottomMargin}px;
    
    ${(props) => props.flex && "display: flex;"}
        
    ${(props) => props.flexAlign && "align-items: " + props.flexAlignValue + ";"}
    
    ${(props) => props.flexJustify && "justify-content: " + props.flexJustifyValue + ";"}
    
    span.big {
        font-family: Avenir, sans-serif;
        font-weight: 900;
    }
    
    span.blue {
        color: ${color.blue1}
    }
`;

export const ParagraphLink = ({ children, maxWidth, ...rest }) => (
  <StyledParagraph maxWidth={maxWidth} {...rest}>
    {/* {console.log(children)}
    {children.map((child) => console.log(child))} */}
  </StyledParagraph>
);

ParagraphLink.propTypes = {
  flex: PropTypes.bool,
  flexAlign: PropTypes.bool,
  flexJustify: PropTypes.bool,
  flexJustifyValue: PropTypes.string,
  flexAlignValue: PropTypes.string,
  maxWidth: PropTypes.number,
  bottomPadding: PropTypes.number,
  bottomMargin: PropTypes.number,
};

ParagraphLink.defaultProps = {
  flex: false,
  flexAlign: false,
  flexJustify: false,
  flexJustifyValue: "center",
  flexAlignValue: "center",
  bottomMargin: 32,
};
