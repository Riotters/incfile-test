import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Wrapper = styled.label`
    font-size: ${props => props.fontSize}; 
    color: ${color.grey2}; 
    line-height: 24px; 
    font-family: Avenir, sans-serif; 
`

const Label = ({ className, text, htmlFor, fontSize }) => (
  <Wrapper className={className} htmlFor={htmlFor} fontSize={fontSize}>{text}</Wrapper>
)

Label.defaultProps = {
    fontSize: "14px"
}

export default Label
