import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {color} from "../styles/colors";
const HeadingWrapper = styled.div`
font-family: Avenir, sans-serif;
        font-size: ${(props) => (props.big ? "20" : "16")}px;
        line-height: ${(props) => (props.big ? "32" : "24")}px;
        font-weight: 400;
        
        padding-bottom: ${(props) => (props.bottomPadding ? `${props.bottomPadding}px` : "")};
        margin-bottom: ${(props) => props.bottomMargin}px;
        margin-top: ${(props) => (props.topMargin ? `${props.topMargin}px` : "")};
        max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
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
        
        a {
          color: ${color.blue1};
          font-size: ${(props) => (props.big ? "20" : "16")}px;
          line-height: ${(props) => (props.big ? "32" : "24")}px;
          
          ${props => props.big && "font-family: Avenir, sans-serif; font-weight: 900;" }
    
          transition: all 0.3s ease-in-out;
          
          &:hover{
            color: ${color.orange1};
          }
        }
        
        &.text-left{
          text-align: left !important;
        }
`;

export const HeadingP = ({
                            size,
                            children,
                            bottomMargin,
                            bottomMarginMD,
                            topMargin,
                            bottomPadding,
                            maxWidth,
                            className,
                            style,
                            relative,
                            big
                        }) => (
    <HeadingWrapper
        as={`h${size}`}
        bottomMargin={bottomMargin}
        bottomMarginMD={bottomMarginMD}
        topMargin={topMargin}
        bottomPadding={bottomPadding}
        maxWidth={maxWidth}
        relative={relative}
        className={className + " p"}
        style={style}
        big={big}
    >
        {children}
    </HeadingWrapper>
);

HeadingP.propTypes = {
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    template: PropTypes.number,
    children: PropTypes.any,
    bottomSpace: PropTypes.number,
    maxWidth: PropTypes.number,
};

HeadingP.defaultProps = {
    size: 1,
    bottomMargin: `24`,
};
