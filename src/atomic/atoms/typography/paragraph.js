import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
    font-family: Avenir, sans-serif;
    font-size: ${props => props.big ? '20' : '16'}px;
    line-height: ${props => props.big ? '32' : '24'}px;
    padding-bottom: ${props => props.bottomSpace ?? '24'}px !important;
`;

export const Paragraph = ({children, ...rest}) => (
    <StyledParagraph {...rest}>
        {children}
    </StyledParagraph>
);
