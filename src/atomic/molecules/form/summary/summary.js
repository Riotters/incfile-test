import React from "react";
import styled from "styled-components";

const Summary = ({children}) => (
    <Wrapper>
        <Header>
            Order Summary
        </Header>
        {children}
    </Wrapper>
);

const Header = styled.h3`
    font-family: Avenir-Heavy;
    font-size: 20px;
    text-align: center;
    color: #1d1d1d;
    margin-bottom: 24px;
`;

const Wrapper = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
    margin-bottom: 32px;
    padding: 32px;
`;

export default Summary;
