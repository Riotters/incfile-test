import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: 575px) {
    align-items: center;
  }

  @media (min-width: 576px) {
    align-items: center;
  }

  @media (min-width: ${(props) => (props.mediaXL ? "1200px" : "992px")}) {
    flex-direction: row;
  }
  
  @media (min-width: ${(props) => (props.mediaSM ? "576px" : "992px")}) {
    flex-direction: row;
  }
`;

const TopButtonsBox = ({ children, mediaXL, ...rest }) => (
  <Wrapper mediaXL={mediaXL} {...rest}>
    {children}
  </Wrapper>
);

export default TopButtonsBox;
