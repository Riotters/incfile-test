import React from "react"
import styled from "styled-components"
import { color } from "../../atoms/styles/colors"

const Wrapper = styled.div`
    margin-right: 16px;
    position: relative;
`

const Input = styled.input`
    position: absolute;
    opacity: 0;
    height: 32px;
    width: 32px;
    cursor: pointer;

    &:checked ~ span {
        &:before {
            height: 12px;
            width: 12px;
            opacity: 1;
        }
    }
`;

const Checkmark = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    background-color: ${color.grey5};
    border: 1px solid ${color.grey3};
    border-radius: 50%;
    cursor: pointer;

    &:before {
        content: '';
        height: 0;
        width: 0;
        opacity: 0;
        background-color: ${color.orange1};
        border-radius: 50%;
        transition: height .3s ease, width .3s ease;
    }
`;

const Radio = ({ className, name, id, checked }) => (
    <Wrapper className={className}>
        <Input id={id} type="radio" name={name} checked={checked}/>
        <Checkmark />
    </Wrapper>
)
export default Radio