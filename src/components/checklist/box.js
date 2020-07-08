import React, { useState } from "react"
import styled from "styled-components"
import { color } from "../styles/colors"
import { shadow } from "../styles/shadows"
import Checkbox from "./checkbox"

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 670px;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    font-size: 16px; 
    line-height: 24px;
    color: ${color.grey1};
    padding: 24px 24px 24px 80px;
    position: relative;
    cursor: pointer;
    margin-bottom: 8px;
    border-radius: 5px;

    &.completed {
        color: ${color.grey2};
        text-decoration: line-through;
    }
`

const Box = styled.span`
    height: 32px;
    width: 32px;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
`;

function ToDoBox ({ className, children, name, isCompleted, toggleClass }) {
    const [isActive, setActive] = useState(false);

    // const toggleClass = () => {
    //     setActive(!isActive);
    // }

    return (
        <Wrapper className={isCompleted ? "item completed" : "item"} onClick={toggleClass}>
            <Box>
                <Checkbox isCompleted={isCompleted} className="circleCheck"/>
            </Box>
            {name}
        </Wrapper>
    )
}

export default ToDoBox