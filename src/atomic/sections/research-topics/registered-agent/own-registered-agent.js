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
      <Paragraph big bottomMargin="48">
        {content.text}
      </Paragraph>
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text2}
      </Paragraph>
      <IconListColorBox
        content={content.list}
        color={color.babyblue3}
        rounded
        bottomMargin="48"
      />
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text3}
      </Paragraph>
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header4}
      </Heading>
      <Paragraph big bottomMargin="24">
        {content.text4}
      </Paragraph>
      <IconListColorBox
        content={content.list2}
        color={color.green3}
        curve
        curveColor={color.orange2}
        rounded
        bottomMargin="24"
      />
      <Paragraph big bottomMargin="24" mixed>
        {parse(content.text5)}
      </Paragraph>
      <Button
        content={content.button}
        theme="primary56"
        arrow
        margin="0 auto 0 0"
      />
    </ImageContent>
  </About>
);

export default AboutSection;
