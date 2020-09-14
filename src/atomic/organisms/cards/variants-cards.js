import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/variant-card";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;
  position: relative;
  margin-top: 80px;
  margin-bottom: 48px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px;
    overflow: unset;

    @media (min-width: 576px) {
      padding: 32px;
    }
  }
`;

const colors = [color.white, color.blue3, color.blue2];

const PricingCards = ({ className, content }) => {
  return (
    <Wrapper className={className} content={content}>
      {content.map((card, i) => (
        <Card content={card} border={i === 0 ? true : false} color={colors[i]} />
      ))}
    </Wrapper>
  );
};

export default PricingCards;