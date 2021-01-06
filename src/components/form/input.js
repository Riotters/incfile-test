import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Wrapper = styled.input`
    width: ${props => (props.width ? props.width : "100%")};
    border: 1px solid ${color.grey3};
    border-radius: 5px;
    background-color: ${color.grey5};
    padding: 12px 24px;
    color: ${color.black};
    font-family: Avenir;
    font-size: 16px; 
    line-height: 24px; 
    transition: color 0.3s ease, border-color 0.3s ease;

    &::placeholder {
        color: ${color.grey2};
    }

    &:hover, &:focus {
        border-color: ${color.blue1};
    }

    &:invalid {
        border-color: ${color.orange1};
    }
`

const Input = ({ className, placeholder, width }) => (
  <Wrapper className={className} placeholder={placeholder} width={width}/>
)
export default Input