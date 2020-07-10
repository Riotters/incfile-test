import React from "react"
import styled from "styled-components"
import Circle from "./icons/rating"
import {color} from "./styles/colors"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        line-height: 24px;
        padding-top: 24px;
        padding-bottom: 8px;
    }

    p {
        max-width: ${props => props.textWidth ? props.textWidth : "340"}px;
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
    }
`;

const Benefit = ({ className, Icon, headline, text, textWidth }) => (
    <Wrapper className={className} textWidth={textWidth}>
        <Circle><Icon /></Circle>
        <h4>{headline}</h4>
        <p>{text}</p>
    </Wrapper>
)
export default Benefit