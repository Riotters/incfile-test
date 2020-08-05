import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const TopButtonsBox = ({ children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default TopButtonsBox;
