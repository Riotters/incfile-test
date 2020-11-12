import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/reduce-arrow.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Circle from "../../../atoms/icons/circle";
import ResonableSalarySVG from "../../../../images/icons/resonable-salary-and-compensation.inline.svg";
import LLCDeclaringSVG from "../../../../images/icons/declaring-an-llc-should-be-taxed-as-an-s-corp.inline.svg";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }

  .boxed-button {
    &--1 {
      margin-bottom: 8px;
    }

    &--2 {
      margin-bottom: 64px;
    }
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="720" width="720" y="-35">
      <OvalSVG />
    </Oval>
    <ImageContent image="llc-as-tax-crop-about-6724">
      <Heading size="3" bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <IconListColorBox color={color.orange3} content={content.box} bottomMargin="72" rounded />
      <Heading size="3">{content.header2}</Heading>
      <Paragraph big bottomMargin="72">
        {content.text2}
      </Paragraph>
      {/* <Circle height="80" width="80" circleColor={color.green2} bottomMargin="32">
        <ResonableSalarySVG />
      </Circle> */}
      <Heading size="3">{content.header3}</Heading>
      <Paragraph big bottomMargin="48">
        {content.text3}
      </Paragraph>
      {/* <Circle height="80" width="80" circleColor={color.purple2} bottomMargin="32">
        <LLCDeclaringSVG />
      </Circle> */}
      <Heading size="3">{content.header4}</Heading>
      <Paragraph big bottomMargin="0">
        {content.text4}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
