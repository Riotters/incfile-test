import React from "react";
import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 42px;

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
