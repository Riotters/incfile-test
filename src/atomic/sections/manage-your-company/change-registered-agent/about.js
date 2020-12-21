import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/arrows.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 60px;

  @media (min-width: 576px) {
      padding-bottom: 124px;
  }

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-25">
            <OvalSVG />
        </Oval>
        <ImageContent image="calendar-832" alt="how to change a registered agent">
            <Paragraph big bottomMargin="48">{content.text}</Paragraph>
            <IconTextColorBox color={color.purple3} Icon={IconSVG} content={content.box} bottomMargin="56" rounded curve curveColor={color.babyblue1} headingSize={2} paragraphHeader left/>
            <Heading size={2} template={3} left bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="52">{content.text2}</Paragraph>
            <Heading size={2} template={3} left bottomMargin="24">{content.header2}</Heading>
            <Paragraph big bottomMargin="48">{content.text3}</Paragraph>
            <Heading size={2} template={3} left bottomMargin="24">{content.header3}</Heading>
            <Paragraph big bottomMargin="0">{content.text4}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;