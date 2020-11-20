import React from "react";
import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.topMargin ? props.topMargin : "48")}px;
  width: 100%;

  @media (min-width: 769px) {
    justify-content: flex-start;
    width: auto;
  }
`;

const RatingRow = ({ children, topMargin }) => <RatingWrapper topMargin={topMargin}>{children}</RatingWrapper>;

export default RatingRow;
