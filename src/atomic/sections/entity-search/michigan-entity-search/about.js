import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const About = styled.section`
  position: relative;
  padding-bottom: 30px;
  
  @media (min-width: 992px) {
    padding-bottom: 120px;
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="420" width="420" y="15">
      <OvalSVG />
    </Oval>
    <ImageContent image="state-entity-search-9829">
      <Paragraph big>{content.text}</Paragraph>
      <IconTextColorBox color={color.orange3} Icon={IconSVG} content={content.box} rounded curve curveColor={color.yellow1} />
    </ImageContent>
  </About>
);

export default AboutSection;
