import React from "react";
import styled from "styled-components";
import ArrowLink from "../../../molecules/buttons/text";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/closing-your-business.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";

const About = styled.section`
  position: relative;
  padding-top: 75px;
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
        <ImageContent image="dissolation">
            <Paragraph big bottomMargin="32">{content.text}</Paragraph>
            <ArrowLink bottomMargin="72" content={content.link} />
            <Heading size={3} bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="40">{content.text2}</Paragraph>
            <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="72" rounded curve/>
            <Paragraph big bottomMargin="72">{content.text3}</Paragraph>
            <Heading size={3} bottomMargin="24">{content.header2}</Heading>
            <Paragraph big bottomMargin="40">{content.text4}</Paragraph>
            <NumericList content={content.list} bottomMargin="48" />
            <Paragraph big bottomMargin="0">{content.text5}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;