import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/the-reports-are-mandatory.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="ongoing-filing-requirements-about-9324">
      <Heading size={3} bottomMargin="24">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="56">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.yellow3} Icon={IconSVG} content={content.box} bottomMargin="56" rounded curve />
      <Paragraph big bottomMargin="0">
        {content.text2}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
