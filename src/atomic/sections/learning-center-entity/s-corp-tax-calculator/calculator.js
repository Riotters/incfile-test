import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import ContentLeft from "../../../partials/content-left";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Card from "../../../molecules/mixed-blocks/s-corp-tax-box";

const Calculator = styled.section`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`;

const CalculatorSection = ({ className, content }) => (
  <Calculator className={className}>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} bottomMargin="56" />
    <ContentCenter contentWidth="970">
        sliders
    </ContentCenter>
  </Calculator>
);

export default CalculatorSection;
