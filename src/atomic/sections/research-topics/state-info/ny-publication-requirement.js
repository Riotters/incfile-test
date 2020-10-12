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
import Path from "../../../molecules/blocks/research-topics-path";
import parse from "html-react-parser";
import Button from "../../../molecules/buttons/button";
import NumericList from "../../../organisms/lists/numeric-boxed-list";

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
      <Heading size={3} bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header2}
      </Heading>
      <NumericList content={content.list} bottomMargin="24" />
      <Paragraph big bottomMargin="16">
        {content.text2}
      </Paragraph>
      <ArrowLink content={content.link} bottomMargin="48" />
      <Heading size={3} bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="16" mixed>
        {parse(content.text3)}
      </Paragraph>
      <Button content={content.button} theme="primary56" arrow margin="0 auto 48px 0" />
      <Heading size={3} bottomMargin="24">
        {content.header4}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text4}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header5}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text5}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header6}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text6}
      </Paragraph>
      <IconListColorBox content={content.list2} color={color.green3} curve curveColor={color.purple2} rounded bottomMargin="16" />
      <Button content={content.button2} theme="primary56" arrow margin="0 auto 48px 0" />
      <Heading size={3} bottomMargin="24">
        {content.header7}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text7}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header8}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text8}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header9}
      </Heading>
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text9)}
      </Paragraph>
      <Heading size={3} bottomMargin="32">
        {content.header10}
      </Heading>
      <Heading size={4} bottomMargin="24">
        {content.header11}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text10}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header12}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text11}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header13}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text12}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header14}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text13}
      </Paragraph>
      <Heading size={3} bottomMargin="24">
        {content.header15}
      </Heading>
      {content.links2.map((link) => (
        <ArrowLink content={link} />
      ))}
    </ImageContent>
  </About>
);

export default AboutSection;
