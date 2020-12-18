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
      <PHeading template={3} size={3} bottomMargin="24">
        {content.header2}
      </PHeading>
      <Paragraph big bottomMargin="16">
        {content.text}
      </Paragraph>
      <Paragraph big bottomMargin="48">
        {content.text2}
      </Paragraph>
      <PHeading size={3} bottomMargin="24">
        {content.header3}
      </PHeading>
      <Paragraph big bottomMargin="24">
        {content.text3}
      </Paragraph>
      <IconListColorBox
        content={content.list}
        color={color.yellow2}
        curve
        paragraphHeader
        curveColor={color.green2}
        rounded
        bottomMargin="32"
      />
      <Paragraph big bottomMargin="32">
        {content.text4}
      </Paragraph>
      <IconListColorBox
        content={content.list2}
        color={color.babyblue2}
        rounded
        paragraphHeader
        bottomMargin="32"
      />
      <Paragraph big bottomMargin="16">
        {content.text5}
      </Paragraph>
      <Paragraph big bottomMargin="32">
        {content.text6}
      </Paragraph>
      <IconListColorBox
        content={content.list3}
        color={color.orange3}
        rounded
        paragraphHeader
        bottomMargin="40"
      />
      <IconListColorBox
        content={content.list4}
        color={color.blue3}
        curve
        paragraphHeader
        curveColor={color.red2}
        rounded
        bottomMargin="40"
      />
      <IconListColorBox
        content={content.list5}
        color={color.green3}
        rounded
        paragraphHeader
        bottomMargin="32"
      />
      <Paragraph big bottomMargin="48">
        {content.text7}
      </Paragraph>
      <PHeading size={3} bottomMargin="24">
        {content.header4}
      </PHeading>
      <Paragraph big bottomMargin="24">
        {content.text8}
      </Paragraph>
      <IconListColorBox
        content={content.list6}
        color={color.purple3}
        rounded
        paragraphHeader
        bottomMargin="24"
      />
      <ArrowLink content={content.link} />
    </ImageContent>
  </About>
);

export default AboutSection;
