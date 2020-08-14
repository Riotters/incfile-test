import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${props => props.mediaXL ? "1200px" : "769px"}) {
        flex-direction: row;
    }
`;

const TopButtonsBox = ({ children, mediaXL }) => (
    <Wrapper mediaXL={mediaXL}>
        {children}
    </Wrapper>
);

export default TopButtonsBox;
