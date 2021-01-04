import React from "react";
import Container from "../../../../atomic/container";
import styled from "styled-components";
import Links from "./links";

const HireEmployees = () => (
    <BlueContainer>
        <Container>
            <Links />
        </Container>
    </BlueContainer>
);

const BlueContainer = styled.div`
    padding-top: 100px;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

export default HireEmployees;
