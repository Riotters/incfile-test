import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/ok.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 124px;

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" right="0" top="56">
      <Oval2SVG />
    </Oval>
    <ImageContent image="chart-2377">
      <Paragraph big bottomMargin="32">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.orange3} Icon={IconSVG} content={content.box} bottomMargin="72" rounded curve />
      <Paragraph big bottomMargin="40">
        {content.text2}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="72">
        {content.text3}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="0">
        {content.text4}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
