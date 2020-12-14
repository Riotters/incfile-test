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
import Button from "../../../molecules/buttons/button";
import { HeadingP } from "../../../atoms/typography/heading-to-p";
import { PHeading } from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
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
      <PHeading template={3} bottomMargin="24">
        {content.header2}
      </PHeading>
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text2}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text3}
      </Paragraph>
      <NumericList content={content.list} bottomMargin="16" />
      <Paragraph big bottomMargin="16">
        {content.text4}
      </Paragraph>
      <NumericList content={content.list2} bottomMargin="24" />
      <IconListColorBox
        content={content.list3}
        color={color.purple3}
        rounded
        curve
        paragraphHeader
        curveColor={color.orange2}
        bottomMargin="24"
      />
      <ArrowLink content={content.link} bottomMargin="48" />
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header4}
      </Heading>
      <IconListColorBox
        content={content.list4}
        color={color.yellow3}
        rounded
        paragraphHeader
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="16">
        {content.text6}
      </Paragraph>
      <ArrowLink content={content.link2} bottomMargin="48" />
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header5}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text8}
      </Paragraph>
      <IconListColorBox
        content={content.list5}
        color={color.green3}
        rounded
        paragraphHeader
        curve
        curveColor={color.orange2}
        bottomMargin="48"
      />
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header6}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text9}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text10}
      </Paragraph>
      <ArrowLink content={content.link3} bottomMargin="48" />
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header7}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text12}
      </Paragraph>
      <IconListColorBox
        content={content.list6}
        color={color.purple3}
        paragraphHeader
        rounded
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="48">
        {content.text13}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header8}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text14}
      </Paragraph>
      <IconListColorBox
        content={content.list7}
        color={color.babyblue3}
        rounded
        paragraphHeader
        curve
        curveColor={color.green2}
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="48">
        {content.text15}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header9}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text16}
      </Paragraph>
      <ArrowLink content={content.link4} bottomMargin="48" />
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header10}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text18}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header11}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text19}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header12}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text20}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header13}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text21}
      </Paragraph>
      <Paragraph big bottomMargin="24">
        {content.text22}
      </Paragraph>
      <Button
        content={content.button}
        theme="primary56"
        arrow
        margin="0 auto 0px 0"
      />
    </ImageContent>
  </About>
);

export default AboutSection;
