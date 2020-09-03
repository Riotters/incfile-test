import React, { useState } from "react";
import styled from "styled-components"
import { color } from "../../atoms/styles/colors"
import ContentCenter from "../../partials/content-center";

const Wrapper = styled.div`
    display: flex;
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
    margin-right: 16px;

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

const Text = styled.span`
    display: flex;
    align-items: center;
    margin-right: 40px;
    font-family: Avenir, sans-serif;
    font-size: 16px;
    line-height: 24px;
`;

const Radio = ({ className, content, name, id, checked }) => {
    return (
        <Wrapper className={className}>
            <Input id={id} type="radio" name={name} checked={checked} />
            <Checkmark />
            {content && (
                <Text>{content}</Text>
            )}
        </Wrapper>
    )
}
export default Radio