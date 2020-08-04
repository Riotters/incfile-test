import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const dotColor = (circleColor) => {
    switch(circleColor) { 
        case color.blue3: {
            return color.blue1;
        }
        case color.orange3: {
            return color.orange1;
        }
        case color.green3: {
            return color.green1;
        }
        case color.purple3: {
            return color.purple1;
        }
        case color.babyblue3: {
            return color.babyblue1;
        }
        case color.yellow3: {
            return color.yellow1;
        }
        default:
            return "";
    };
}

const Wrapper = styled.div`
    background-color: ${props => (props.color ? props.color : "")};
    border-radius: 5px 50px 50px 5px;
    padding: ${props => (props.Icon ? "40px 40px 40px 112px" : "40px")};
    margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};

    ul {
        display: ${props => props.grid ? "grid" : ""};
        grid-template-columns: ${props => props.grid ? `repeat(${props.columns}, 1fr)` : ""};
        list-style: none;

        li {
            font-family: Avenir, sans-serif;
            font-size: 16px;
            line-height: 24px;
            color: ${color.grey1};
            padding-left: 26px;
            position: relative;

            &::before {
                content: '';
                height: 4px;
                width: 4px;
                background-color: ${({ color }) => dotColor(color)};
                border-radius: 50%;
                position: absolute;
                top: 9px;
                left: 6px;
            }

            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }
    }
`

const DottedList = ({ className, color, content, grid, columns, bottomMargin }) => {
  return (
    <Wrapper className={className} color={color} grid={grid} columns={columns} bottomMargin={bottomMargin}>
        <ul>
            {content.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </Wrapper>
  )
}

export default DottedList
