import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/reduce-arrow.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange3.inline.svg";
import parse from "html-react-parser";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
    margin-bottom: 0;
  }

  .boxed-button {
    &--1 {
      margin-bottom: 8px;
    }

    &--2 {
      margin-bottom: 64px;
    }
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-25">
      <OvalSVG />
    </Oval>
    <ImageContent image="s-corporation-tax-calculator-about-3829">
      <Heading size="3">{content.header}</Heading>
      <Paragraph big>{content.text}</Paragraph>
      <Paragraph big>{content.text2}</Paragraph>
      {/* <BoxedButton className="boxed-button boxed-button--1" content={content.button} textColor={color.grey1} />
      <BoxedButton className="boxed-button boxed-button--2" content={content.button2} textColor={color.grey1} /> */}
      {/* <ArrowLink content={content.link} />
      <ArrowLink content={content.link2} /> */}
      <Paragraph big bottomMargin="16" mixed>
        {parse(content.text6)}
      </Paragraph>
      <Paragraph big bottomMargin="40" mixed>
        {parse(content.text7)}
      </Paragraph>
      <IconTextColorBox color={color.green3} Icon={IconSVG} content={content.box} bottomMargin="72" rounded curve />
      <Heading size="3">{content.header2}</Heading>
      <Paragraph big>{content.text3}</Paragraph>
      <Paragraph big bottomMargin="96">
        {content.text4}
      </Paragraph>
      <Heading size="3">{content.header3}</Heading>
      <Paragraph big bottomMargin="0">
        {content.text5}
      </Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
