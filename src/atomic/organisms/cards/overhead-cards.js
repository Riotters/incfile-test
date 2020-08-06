import React from "react";
import styled from "styled-components";
import Card from "../../molecules/mixed-blocks/top-image-box";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    padding: 140px 0;
    margin: 0 auto;
`


const OverheadCards = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content.map(card => (
            <Card content={card}/>
        ))}
    </Wrapper>
  )
}

export default OverheadCards;