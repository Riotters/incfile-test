import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: ${(props) => (props.selected ? '#fcefef' : '#f2f6ff')};
    color: ${(props) => (props.selected ? '#f1a0a0' : '#5089fd')};
    font-family: "Avenir", sans-serif;
    font-size: 16px;
    font-weight: 900;
    padding: 4px 16px;
    border-radius: 16px;
    margin-bottom: 8px;
    width: fit-content;
    cursor: pointer;
`;


const Badge = ({children, selected}) => (
    <StyledDiv {...{selected}}>
        <span>{selected ? '−' : '+'}</span> {children}
    </StyledDiv>
);

export default Badge;