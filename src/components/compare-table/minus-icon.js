import React from "react";
import styled from "styled-components";

const Oval = styled.div`
    width: 32px;
    height: 32px;
    background-color: #fef6ed;
    border-radius: 32px;
    display: grid;
    place-items: center;
    margin-right: 24px;
    cursor: pointer;
`;

const Minus = styled.div`
    width: 14px;
    height: 3px;
    background-color: #fc9768;
    border-radius: 3px;
`;

const MinusIcon = () => (
    <Oval>
        <Minus/>
    </Oval>
);

export default MinusIcon;