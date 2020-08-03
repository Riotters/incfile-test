import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {color} from "../../../components/styles/colors";

const StyledParagraph = styled.p`
    font-family: Avenir, sans-serif;
    font-size: ${props => props.big ? '20' : '16'}px;
    line-height: ${props => props.big ? '32' : '24'}px;
    padding-bottom: ${props => props.bottomSpace}px;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : ""};
    
    ${props => (props.flex &&
        "display: flex;"
    )}
        
    ${props => (props.flexAlign &&
        "align-items: " + props.flexAlignValue + ";"
    )}
    
    ${props => (props.flexJustify &&
        "justify-content: " + props.flexJustifyValue + ";"
    )}
    
    span.big {
        font-family: Avenir-Heavy, sans-serif;
    }
    
    span.blue {
        color: ${color.blue1}
    }
`;

export const Paragraph = ({children, maxWidth, ...rest}) => (
    <StyledParagraph maxWidth={maxWidth} {...rest}>
        {children}
    </StyledParagraph>
);

Paragraph.propTypes = {
    flex: PropTypes.bool,
    flexAlign: PropTypes.bool,
    flexJustify: PropTypes.bool,
    flexJustifyValue: PropTypes.string,
    flexAlignValue: PropTypes.string,
    bottomSpace: PropTypes.number,
    maxWidth: PropTypes.number,
}

Paragraph.defaultProps = {
    flex: false,
    flexAlign: false,
    flexJustify: false,
    flexJustifyValue: "center",
    flexAlignValue: "center",
    bottomSpace: 24
}
