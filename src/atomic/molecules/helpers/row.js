import React from "react";
import styled from "styled-components";

const Row = ({children}) => (
    <RowWrapper>
        {children}
    </RowWrapper>
);

const RowWrapper = styled.div`
    margin-left: -15px;
    margin-right: -15px;
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
`;

export default Row
