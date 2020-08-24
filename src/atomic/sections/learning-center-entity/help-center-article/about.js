import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Buttonsbox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/no-pass-sign.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";

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
        <ImageContent image="web-address-search">
            <Heading size={3} bottomMargin="48">{content.header}</Heading>
            <IconTextColorBox color={color.babyblue3} Icon={IconSVG} content={content.box} bottomMargin="48" rounded curve />
            <Paragraph big bottomMargin="40">{content.text}</Paragraph>
            <Paragraph big bottomMargin="0">{content.text2}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;