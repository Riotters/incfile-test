import React from "react";
import styled from "styled-components";
import Adventages from "../../molecules/mixed-blocks/adventages";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    position: relative;
    margin-top: 80px;

    @media (min-width: 992px) {
        margin-top: 0;
    }
`


const PricingCards = ({ className, content, paragraphHeaders = false }) => {
  return (
    <Wrapper className={className}>
        {content.map(card => (
            <Adventages content={card} paragraphHeader={paragraphHeaders} />
        ))}
    </Wrapper>
  )
}

export default PricingCards;