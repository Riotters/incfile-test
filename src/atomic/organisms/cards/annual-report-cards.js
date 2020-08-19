import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/top-image-box";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    padding: 140px 0;
    margin: 0 auto;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }
`

const colors = [color.orange3, color.red3, color.green3, color.blue3];
const icons = ["clock-691", "refuse", "cost", "receive"]

const AnnualCards = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        {content.map((card, i) => (
            <Card content={card} color={colors[i]} image={icons[i]} />
        ))}
    </Wrapper>
  )
}

export default AnnualCards;