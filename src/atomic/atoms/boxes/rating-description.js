import React from "react"
import styled from "styled-components"

const Wrapper = styled.span`
    color: #878787;
  font-family: Avenir;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-left: 12px;
`;

const RatingDescription = ({children, className}) => (
    <Wrapper className={className}>
        {children}
    </Wrapper>
);

export default RatingDescription
