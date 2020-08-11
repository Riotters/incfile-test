import React from "react";
import styled from "styled-components";
import Card from "../../molecules/text-blocks/pricing-card";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    position: relative;
    margin-top: 92px;
    margin-bottom: 48px;

    @media(min-width: 769px) {
      grid-template-columns: 1fr 1fr;
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
`


const PricingCards = ({ className, content }) => {
  return (
    <Wrapper className={className} content={content}>
        {content.map(card => (
            <Card content={card}/>
        ))}
    </Wrapper>
  )
}

export default PricingCards;