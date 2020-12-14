import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Card from "../../molecules/mixed-blocks/top-image-box";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right-big.inline.svg";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;
  max-width: 970px;
  padding: 64px 0;
  margin: 0 auto;
  position: relative;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    padding: 80px 0;
  }
`;

const colors = [color.blue3, color.purple3, color.orange3, color.yellow3, color.yellow4, color.purple3, color.babyblue3];
const icons = ["rocket-939", "certificate-305", "business-taxes-8954", "bulb-gear-7881", "game-plan", "display-ads", "measuring-business-success"];

const Cards = ({ className, content, headlineSize = 3, headlineTemplateSize = 4, paragraphHeader = false }) => {
  return (
    <Wrapper className={className}>
      <Curve top="-16" left="-96" color={color.green1}>
        <CurveSVG />
      </Curve>
      {content.map((card, i) => (
        <Card content={card} color={colors[i]} image={icons[i]} headlineSize={headlineSize} headlineTemplateSize={headlineTemplateSize} paragraphHeader={paragraphHeader} />
      ))}
    </Wrapper>
  );
};

export default Cards;
