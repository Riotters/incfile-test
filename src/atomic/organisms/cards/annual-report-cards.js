import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/top-image-box";
import Container from "../../container";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    padding-top: ${props => props.paddingTop ? props.paddingTop : "140"}px;
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : "140"}px;
    margin: 0 auto;
    position: relative;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }
`

const colors = [color.orange3, color.red3, color.green3, color.babyblue3];
const icons = ["clock-691", "refuse", "cost-913", "receive"]

const AnnualCards = ({ className, content, paddingTop, paddingBottom }) => {
  return (
    <Container>
      <Wrapper className={className} paddingTop={paddingTop} paddingBottom={paddingBottom}>
          {content.map((card, i) => (
              <Card content={card} color={colors[i]} image={icons[i]} />
          ))}
      </Wrapper>
    </Container>
  )
}

export default AnnualCards;