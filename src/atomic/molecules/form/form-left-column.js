import React from "react";
import styled from "styled-components";

const LeftColumn = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

const Wrapper = styled.div`
    display: block;
    width: 100%;
    
    @media (min-width: 1200px){
        max-width: 770px;
    }
`;

export default LeftColumn;
