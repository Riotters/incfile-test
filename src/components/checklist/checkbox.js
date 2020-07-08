import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Input = styled.input`
    display: none;

    &:checked ~ span {
        background-color: ${color.green1};
        border-color: ${color.green1};
        opacity: .5;

        svg {
            stroke-dashoffset: 0;
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

    svg {
        height: 20px;
        width: 20px;
        fill: none;
        stroke: ${color.white};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18;
        stroke-dashoffset: 18;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
        z-index: 99;
    }
`;

const Checkbox = ({ className, name, id, isCompleted }) => (
    <>
        <Input id={id} type="checkbox" name={name} checked={isCompleted}/>
        <Checkmark>
            <svg viewBox="-1 0 16 12">
                <polyline points="2 6 4.5 9 10.5 3"></polyline>
            </svg>
        </Checkmark>
    </>
)
export default Checkbox