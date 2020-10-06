import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/no-pass-sign.inline.svg";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Path from "../../../molecules/blocks/research-topics-path";
import parse from "html-react-parser"
import Circle from "../../../atoms/icons/circle";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const AbsoluteCircle = styled.div`
  border-radius: 50%;
  box-shadow: ${(props) => props.imageShadowColor};
`;

const NumberSpan = styled.span`
    font-family: MarkPro;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #5089fd;
`



const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <Path content={content.links} />
      
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle circleColor={color.white} padding={0} height={80} width={80} paddingLeft={0}>
            <NumberSpan>{1}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={4} bottomMargin="48">
        {content.header}
      </Heading>
      
      <Heading size={3} bottomMargin="24">
        {content.header2}
      </Heading>
      
      
      
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      
      
      <Heading size={3} bottomMargin="32">
        {content.header3}
      </Heading>
      {content.links2.map(link => (
        <ArrowLink content={link} />
      ))}
    </ImageContent>
  </About>
);

export default AboutSection;
