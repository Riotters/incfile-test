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
import parse from "html-react-parser";

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
        {content.header && (
            <Heading size={2} template={3} left bottomMargin="24">
                {parse(content.header)}
            </Heading>
        )}
        {content.text && (
            <Paragraph big bottomMargin="40">
                {parse(content.text)}
            </Paragraph>
        )}
      <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve curveColor={color.yellow1} />
        {content.text2 && (
            <Paragraph big bottomMargin="48">
                {parse(content.text2)}
            </Paragraph>
        )}
        {content.header2 && (
            <Heading size={2} template={3} left bottomMargin="32">
                {parse(content.header2)}
            </Heading>
        )}
        {content.link && <ArrowLink bottomMargin="0" content={content.link} />}
    </ImageContent>
  </About>
);

export default AboutSection;
