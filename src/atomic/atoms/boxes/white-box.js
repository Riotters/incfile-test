import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";
import { shadow } from "../styles/shadows";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 5px;
    overflow: ${props => (props.overflow ? "hidden" : "")};
    padding: ${props => (props.padding ? props.padding : "")};
    margin-bottom: ${props => (props.bottomMargin ? props.bottomMargin : "")};

    @media screen and (min-width: 769px) {
        ${props => (props.flex ? "display: flex;" : "")}
        ${props => (props.column ? "flex-direction: column;" : "flex-direction: row;")}
    }
`

const Whitebox = ({ className, children, overflow, ...rest }) => {
    return (
        <Wrapper className={className} overflow={overflow} {...rest}>
            {children}
        </Wrapper>
    )
}

export default Whitebox;
