import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Wrapper = styled.label`
    font-size: 14px; 
    color: ${color.grey2}; 
    line-height: 24px; 
    font-family: Avenir, sans-serif; 
`

const Label = ({ className, text }) => (
  <Wrapper className={className}>{text}</Wrapper>
)

export default Label