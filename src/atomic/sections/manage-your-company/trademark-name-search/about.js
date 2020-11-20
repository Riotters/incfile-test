import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/shield.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";

const About = styled.section`
  position: relative;
  padding-bottom: 60px;
  
  @media (min-width: 576px) {
    padding-bottom: 120px;
  }

  p {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="shieldo">
      <Heading size={3} bottomMargin="40">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text}
      </Paragraph>
      <IconTextColorBox color={color.blue3} Icon={IconSVG} content={content.box} bottomMargin="0" rounded curve curveColor={color.yellow1} />
    </ImageContent>
  </About>
);

export default AboutSection;
