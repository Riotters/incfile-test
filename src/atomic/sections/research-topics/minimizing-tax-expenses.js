import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ImageContent from "../../partials/left-image-right-content";
import IconSVG from "../../../images/icons/no-pass-sign.inline.svg";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-blue3.inline.svg";
import NumericList from "../../organisms/lists/numeric-boxed-list";

const About = styled.section`
  position: relative;
  padding-bottom: 104px;
`;

const LinksBox = styled.div`
  display: flex;

  a {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <ImageContent image="web-address-search">
      <LinksBox>
        {content.links.map((link) => (
          <ArrowLink content={link} />
        ))}
      </LinksBox>
      <Heading size={3} bottomMargin="48">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text}
      </Paragraph>
      <Heading size={4} bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text2}
      </Paragraph>
      <Paragraph big bottomMargin="40">
        {content.text3}
      </Paragraph>
      <NumericList content={content.list} bottomMargin="24" />
      <Paragraph big bottomMargin="40">
        {content.text4}
      </Paragraph>
      <NumericList content={content.list2} bottomMargin="24" />
      <IconListColorBox content={content.list3} color={color.blue3} rounded bottomMargin="24" />
      <Heading size={3} bottomMargin="48">
        {content.header20}
      </Heading>
      {content.links2.map(link => (
        <ArrowLink content={link} />
      ))}
    </ImageContent>
  </About>
);

export default AboutSection;
