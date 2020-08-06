import React from "react";
import styled from "styled-components";
import Card from "../../molecules/mixed-blocks/top-image-box";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    position: relative;
    margin-top: 96px;

    @media(min-width: 768px) {
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

const colors = [color.blue3, color.purple3, color.green3, color.yellow3];
const icons = ["burden", "reduce-errors", "tax-advice", "adverse-consequences"];

const BenefitsCards = ({ className, content }) => {
  return (
    <Wrapper className={className} content={content}>
        {content.map((card, i) => (
            <Card content={card} color={colors[i]} image={icons[i]} noShadow/>
        ))}
    </Wrapper>
  )
}

export default BenefitsCards;