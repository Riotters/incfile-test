import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/rocket2.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import LightBox from "../../../../components/LightBox";

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
    <ImageContent image="business-startup-guides-about-321" alt="start a business guide">
      <Heading size="3" bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.green3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve />
      <Paragraph big bottomMargin="48">
        {content.text2}
      </Paragraph>
        <LightBox alt="business idea" thumbnailVideo="how-to-come-up-with-a-business-idea-9920" videoID="6ItzICKbe_0" />
    </ImageContent>
  </About>
);

export default AboutSection;
