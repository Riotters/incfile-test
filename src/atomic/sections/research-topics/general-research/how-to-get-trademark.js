import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../../molecules/blocks/research-topics-path";
import parse from "html-react-parser";
import Circle from "../../../atoms/icons/circle";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const AbsoluteCircle = styled.div`
  border-radius: 50%;
  box-shadow: ${(props) => props.imageShadowColor};
  margin-right: auto;
  margin-bottom: 24px;
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
`;

const AboutSection = ({ className, content }) => (
  <About className={className} id="answers">
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <Path content={content.links} />
      <Heading size={1} template={3} bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text}
      </Paragraph>
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text2)}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{1}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text3}
      </Paragraph>
      <IconListColorBox
        content={content.list}
        color={color.purple3}
        rounded
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text4)}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{2}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text5}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text6}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{3}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header4}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text7}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text8}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text9}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{4}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header5}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text10}
      </Paragraph>
      <IconListColorBox
        content={content.list2}
        color={color.orange3}
        rounded
        paragraphHeader
        bottomMargin="24"
      />
      <IconListColorBox
        content={content.list3}
        color={color.green3}
        rounded
        paragraphHeader
        bottomMargin="48"
      />
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{5}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header6}
      </Heading>
      <Paragraph big bottomMargin="16" mixed>
        {parse(content.text11)}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text12}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{6}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header7}
      </Heading>
      <Paragraph big bottomMargin="16" mixed>
        {parse(content.text13)}
      </Paragraph>
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text14)}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{7}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header8}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text15}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text16}
      </Paragraph>
      <AbsoluteCircle imageShadowColor={shadow.white1}>
        <Circle
          circleColor={color.white}
          padding={0}
          height={80}
          width={80}
          paddingLeft={0}
        >
          <NumberSpan>{8}</NumberSpan>
        </Circle>
      </AbsoluteCircle>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header9}
      </Heading>
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text17)}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header10}
      </Heading>
      <Paragraph big bottomMargin="24" mixed>
        {parse(content.text18)}
      </Paragraph>
      <IconListColorBox
        content={content.list4}
        color={color.babyblue3}
        rounded
        bottomMargin="24"
      />
      <Paragraph big>{content.text19}</Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
