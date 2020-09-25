import React from "react";
import styled from "styled-components";

const RightColumn = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

const Wrapper = styled.div`
    display: block;
    width: 100%;
`;

export default RightColumn;
