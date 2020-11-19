import React from "react";
import styled from "styled-components";
import Card from "../../molecules/mixed-blocks/adventages";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 104px;
  
  @media (min-width: 576px) {
    padding-top: 80px;
  }

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const RegisteredAgentsCards = ({ className, content }) => {
  return (
    <Wrapper className={className}>
      {content.map((card) => (
        <Card content={card} />
      ))}
    </Wrapper>
  );
};

export default RegisteredAgentsCards;
