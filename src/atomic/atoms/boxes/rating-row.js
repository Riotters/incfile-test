import React from "react";
import styled from "styled-components";

const RatingWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const RatingRow = ({children}) => (
    <RatingWrapper>
        {children}
    </RatingWrapper>
);

export default RatingRow;
