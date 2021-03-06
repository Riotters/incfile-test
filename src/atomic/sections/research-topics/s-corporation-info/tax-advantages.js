import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../../molecules/blocks/research-topics-path";
import { PHeading } from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
  padding-bottom: 32px;

  @media (min-width: 992px) {
    padding-bottom: 104px;
  }
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
      <PHeading size={2} template={4} left bottomMargin="24">
        {content.header2}
      </PHeading>
      <Paragraph big bottomMargin="16">
        {content.text}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text2}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text3}
      </Paragraph>
      <Paragraph big bottomMargin="24">
        {content.text4}
      </Paragraph>
      <IconListColorBox
        content={content.list}
        color={color.purple3}
        curve
        paragraphHeader
        curveColor={color.green2}
        rounded
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="24">
        {content.text5}
      </Paragraph>
      <IconListColorBox
        content={content.list2}
        color={color.orange3}
        curve
        paragraphHeader
        curveColor={color.babyblue2}
        rounded
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="48">
        {content.text6}
      </Paragraph>
      <PHeading size={2} left template={3} bottomMargin="32">
        {content.header3}
      </PHeading>
      <Paragraph big bottomMargin="24">
        {content.text7}
      </Paragraph>
      <IconListColorBox
        content={content.list3}
        color={color.babyblue3}
        curve
        paragraphHeader
        curveColor={color.red2}
        rounded
        bottomMargin="24"
      />
      <Paragraph big>{content.text8}</Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
