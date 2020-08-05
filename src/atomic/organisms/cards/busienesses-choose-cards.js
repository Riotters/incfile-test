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
`


const PricingCards = ({ className, content }) => {
  return (
    <Wrapper className={className} content={content}>
        {content.map(card => (
            <Adventages content={card}/>
        ))}
    </Wrapper>
  )
}

export default PricingCards;