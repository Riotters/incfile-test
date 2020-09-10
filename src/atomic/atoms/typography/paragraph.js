import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../../components/styles/colors";
import { Link } from "gatsby";

const StyledParagraph = styled.p`
    font-family: Avenir, sans-serif;
    font-size: ${(props) => (props.big ? "20" : "16")}px;
    line-height: ${(props) => (props.big ? "32" : "24")}px;
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
    padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")};
    margin-bottom: ${(props) => props.bottomMargin}px;
    margin-top: ${(props) => props.topMargin}px;
    
    ${(props) => props.flex && "display: flex;"}
        
    ${(props) => props.flexAlign && "align-items: " + props.flexAlignValue + ";"}
    
    ${(props) => props.flexJustify && "justify-content: " + props.flexJustifyValue + ";"}
    
    span.big {
        font-family: Avenir-Heavy, sans-serif;
    }
    
    span.blue {
        color: ${color.blue1}
    }
    
    a{
      color: ${color.blue1};
      font-family: Avenir-Heavy, sans-serif;
      transition: all 0.3s ease-in-out;
      
      &:hover{
        color: ${color.orange1};
      }
    }
`;

export const Paragraph = ({ children, maxWidth, mixed, ...rest }) => (
  <StyledParagraph maxWidth={maxWidth} {...rest}>
    {(typeof children === "string" || mixed) ? children : null}
    {(typeof children === "object" && mixed === false) ? children.map((el, id) => (id % 2 ? <Link to={el.url}>{` ${el.text} `}</Link> : el.text)) : null}
  </StyledParagraph>
);

Paragraph.propTypes = {
  flex: PropTypes.bool,
  flexAlign: PropTypes.bool,
  flexJustify: PropTypes.bool,
  flexJustifyValue: PropTypes.string,
  flexAlignValue: PropTypes.string,
  maxWidth: PropTypes.number,
  bottomPadding: PropTypes.number,
  bottomMargin: PropTypes.number,
  topMargin: PropTypes.number,
  mixed: PropTypes.bool,
};

Paragraph.defaultProps = {
  flex: false,
  flexAlign: false,
  flexJustify: false,
  flexJustifyValue: "center",
  flexAlignValue: "center",
  bottomMargin: 32,
  mixed: false
};
