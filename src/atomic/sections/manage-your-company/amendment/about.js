import React from "react";
import styled from "styled-components";
import ArrowLink from "../../../molecules/buttons/text";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/icon-other-white-as-time.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import parse from "html-react-parser"

const About = styled.section`
  position: relative;
  padding-bottom: 16px;

  @media (min-width: 576px) {
    padding-bottom: 64px;
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
        <ImageContent image="main-header-object-amendment-name-change">
            <Heading size={3} bottomMargin="24">{content.header}</Heading>
            <Paragraph big bottomMargin="40" mixed>{parse(content.text2)}</Paragraph>
            <Paragraph big bottomMargin="72" mixed>{parse(content.text3)}</Paragraph>
            <IconTextColorBox color={color.orange3} curveColor={color.blue1} Icon={IconSVG} content={content.box} bottomMargin="72" rounded curve/>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;