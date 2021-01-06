import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Wrapper = styled.label`
    display: flex;
    justify-content: ${props => (props.justify ? props.justify : "")};
    align-items: ${props => (props.align ? props.align : "")};
    flex-wrap: wrap;
    font-size: 14px; 
    color: ${color.grey2}; 
    line-height: 24px; 
    font-family: Avenir, sans-serif; 
    margin: ${props => (props.margin ? props.margin : "")};

    a {
        font-size: 14px; 
        color: ${color.blue1}; 
        line-height: 24px; 
        font-family: Avenir, sans-serif;
        text-decoration: none;
        margin-left: auto;
    }
`

const Label = ({ className, children, justify, align, margin }) => (
  <Wrapper className={className} justify={justify} align={align} margin={margin}>
      {children}
  </Wrapper>
)

export default Label