import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/top-image-box";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    width: 100%;
    max-width: 970px;
    padding: 140px 0;
    margin: 0 auto;
    position: relative;

    @media (min-width: 769px) {
      grid-template-columns: 1fr 1fr;
    }
`

const colors = [color.blue3, color.green3, color.orange3, color.blue3, color.red3, color.yellow3, color.orange3, color.babyblue3];
const icons = ["sign", "cost", "needs", "foreign", "alarm", "doors", "clock", "receive"]

const ChangeRegisteredAgentCards = ({ className, content }) => {
  return (
    <Wrapper className={className}>
        <Curve top="115" left="-29" color={color.purple1}>
            <CurveSVG />
        </Curve>
        {content.map((card, i) => (
            <Card content={card} color={colors[i]} image={icons[i]} />
        ))}
    </Wrapper>
  )
}

export default ChangeRegisteredAgentCards;