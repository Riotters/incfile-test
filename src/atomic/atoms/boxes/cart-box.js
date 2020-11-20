import React from "react";
import styled from "styled-components";

const RatingWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    margin-left: 0px;
    margin-right: 42px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const RatingBox = ({ children }) => (
  <RatingWrapper href="https://www.shopperapproved.com/reviews/IncFile.com" target="_blank" rel="noopener noreferrer">
    {children}
  </RatingWrapper>
);

export default RatingBox;
