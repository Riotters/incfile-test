import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
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

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <Path content={content.links} />
      <Heading size={3} bottomMargin="40">
        {content.header}
      </Heading>
      <Heading size={3} bottomMargin="32">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="26">
        {content.text2}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text3}
      </Paragraph>
      <NumericList content={content.list} bottomMargin="24" />
      <Paragraph big bottomMargin="26">
        {content.text4}
      </Paragraph>
      <NumericList content={content.list2} bottomMargin="24" />
      <IconListColorBox content={content.list3} color={color.blue3} rounded curve bottomMargin="24" />
      <Paragraph big bottomMargin="40">
        {content.text5}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header4}
      </Heading>
      <IconListColorBox content={content.list4} color={color.blue3} rounded bottomMargin="24" />
      <Paragraph big bottomMargin="40">
        {content.text6}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text7}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header5}
      </Heading>
      <IconListColorBox content={content.list5} color={color.blue3} rounded bottomMargin="24" />
      <Heading size={4} bottomMargin="24">
        {content.header6}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text8}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text9}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text10}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header7}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text11}
      </Paragraph>
      <IconListColorBox content={content.list6} color={color.blue3} rounded bottomMargin="24" />
      <Paragraph big bottomMargin="40">
        {content.text12}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header8}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text13}
      </Paragraph>
      <IconListColorBox content={content.list7} color={color.blue3} rounded bottomMargin="24" />
      <Paragraph big bottomMargin="40">
        {content.text14}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header9}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text15}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text16}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header10}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text17}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header11}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text18}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header12}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text19}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header13}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text20}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text21}
      </Paragraph>
      <Heading size={3} bottomMargin="48">
        {content.header14}
      </Heading>
      {content.links2.map(link => (
        <ArrowLink content={link} />
      ))}
    </ImageContent>
  </About>
);

export default AboutSection;
