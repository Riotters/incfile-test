import React from "react";
import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  
  @media (min-width: 1024px) {
    margin-left: 0px;
    margin-right: 42px; 
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const RatingBox = ({ children}) => (
    <RatingWrapper>
        {children}
    </RatingWrapper>
);

export default RatingBox;
