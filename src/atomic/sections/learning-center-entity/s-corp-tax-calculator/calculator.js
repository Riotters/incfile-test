import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import ContentLeft from "../../../partials/content-left";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Card from "../../../molecules/mixed-blocks/s-corp-tax-box";
import Sliders from "../../../organisms/cards/sliders";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";

const Calculator = styled.section`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`;

const CalculatorSection = ({ className, content }) => (
  <Calculator className={className}>
    <ContentCenter contentWidth="770" relative>
      <Curve top="-105" right="0" color={color.blue2}>
        <CurveSVG />
      </Curve>
    </ContentCenter>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" bottomMargin="56" />
    <ContentCenter contentWidth="970">
      <Sliders />
    </ContentCenter>
  </Calculator>
);

export default CalculatorSection;
