import React from "react";
import styled from "styled-components";
import ArrowLink from "../../../molecules/buttons/text";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/globe.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ImageContent image="fqualification">
            <Heading size={3} bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
            <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve curveColor={color.yellow1}/>
            <Paragraph big bottomMargin="48">{content.text2}</Paragraph>
            <Heading size={3} bottomMargin="32">{content.header2}</Heading>
            <ArrowLink bottomMargin="0" content={content.link} />
        </ImageContent>
    </About>
  );
  
  export default AboutSection;