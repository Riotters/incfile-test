import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Circle from "../../../atoms/icons/circle";
import VariantsCards from "../../../organisms/cards/variants-cards.js";
import BlockSVG from "../../../../images/blocks.inline.svg";
import List from "../../../organisms/lists/related-questions-list";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval3SVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Steps = styled.section`
  position: relative;
  margin-top: 15px;
  padding-top: 104px;
  padding-bottom: 0;
  
  &::before {
    content: "";
    height: 2385px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};

  span {
    font-size: 24px;
    line-height: 1;
  }

  h3, p {
    text-align: center;
  }

  p {
    max-width: 670px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    width: 100%;
  }
`;

const StepsSection = ({ className, content }) => (
  <Steps className={className}>
    <Oval className="oval" height="720" width="720" top="13" right="0">
        <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" top="0" left="0">
        <Oval2SVG />
    </Oval>
    <Oval className="oval" height="420" width="420" bottom="5" left="0">
        <Oval3SVG />
    </Oval>
    <HeadingCenter headline={content.header} text={content.text} headlineWidth="700" bottomMargin="80" />
    <ContentCenter>
      <Box bottomMargin="120">
        <Circle height="64" width="64" circleColor={color.blue1} iconColor={color.white} bottomMargin="32">1</Circle>
        <Heading size="3" bottomMargin="24">{content.list[0].header}</Heading>
        <Paragraph big bottomMargin="0">{content.list[0].text}</Paragraph>
      </Box>
      <Box bottomMargin="80">
        <Circle height="64" width="64" circleColor={color.blue1} iconColor={color.white} bottomMargin="32">2</Circle>
        <Heading size="3" bottomMargin="24">{content.list[1].header}</Heading>
        <Paragraph big bottomMargin="0">{content.list[1].text}</Paragraph>
      </Box>
      <VariantsCards content={content.cards} bottomMargin="120" />
      <Box>
        <Circle height="64" width="64" circleColor={color.blue1} iconColor={color.white} bottomMargin="32">3</Circle>
        <Heading size="3" bottomMargin="24">{content.list[2].header}</Heading>
        <Paragraph big bottomMargin="0">{content.list[2].text}</Paragraph>
      </Box>
      <ImageWrapper>
        <BlockSVG />
      </ImageWrapper>
    </ContentCenter>
  </Steps>
);

export default StepsSection;
