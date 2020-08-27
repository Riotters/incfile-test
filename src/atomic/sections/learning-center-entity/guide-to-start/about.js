import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/relax.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="guide-to-start-a-business-about">
      <Heading size="3">{content.header}</Heading>
      <Paragraph big bottomMargin="32">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve />
      <Paragraph big bottomMargin="32">
        {content.text2}
      </Paragraph>
      <ArrowLink content={content.link} bottomMargin="72" />
    </ImageContent>
  </About>
);

export default AboutSection;
