import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/enterprenour.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/business-checklist-about-top-left.inline.svg";
import parse from "html-react-parser";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;

  p:not([class*="i-believe-i-can-be-a-h"]) {
    color: ${color.grey2};
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <Oval className="oval" height="570" width="570" y="-40">
            <OvalSVG />
        </Oval>
        <ImageContent image="business-checklist-rocket-lunch" alt="start a business">
            <PHeading size={2} template={3} left bottomMargin="24">{content.header}</PHeading>
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
            <IconTextColorBox color={color.green3} Icon={IconSVG} content={content.box} bottomMargin="40" rounded curve headingSize={3} paragraphHeader />
            <Paragraph big bottomMargin="40">{content.text2}</Paragraph>
            <Paragraph big bottomMargin="40" mixed>{parse(content.text3)}</Paragraph>
            <Paragraph big bottomMargin="72" mixed>{parse(content.text4)}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;