import React from "react"
import styled from "styled-components"
import {color} from "../styles/colors"
import {shadow} from "../styles/shadows"

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    background: ${color.white};
    border-radius: 50%;
    overflow: hidden;
    box-shadow: ${shadow.white1};
    
    svg{
        opacity: 0.5;
        filter: grayscale(50%);
    }
`;

const Rating = ({children, className}) => (
    <Wrapper className={className}>
        {children}
    </Wrapper>
);

export default Rating
