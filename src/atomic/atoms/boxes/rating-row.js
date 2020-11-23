import React from "react";
import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.topMargin ? props.topMargin : "48")}px;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-start;
    width: auto;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    width: 70%;
    margin-top: ${(props) => (props.topMarginMD ? props.topMarginMD : "48")}px;
  }
`;

const RatingRow = ({ children, topMargin, topMarginMD }) => <RatingWrapper topMargin={topMargin} topMarginMD={topMarginMD}>{children}</RatingWrapper>;

export default RatingRow;
