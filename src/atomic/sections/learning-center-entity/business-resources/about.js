import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/wrench-and-pen.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import ArrowLink from "../../../molecules/buttons/text";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";

import { scrollToElement } from '../../../../helpers/utils';

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
        <ImageContent image="business-downloads-tools-about-7291">
            <Heading size={3} bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
            <IconTextColorBox color={color.blue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve />
            <Paragraph big bottomMargin="72">{content.text2}</Paragraph>
            <ArrowLink bottomMargin="72" content={content.link}/>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;