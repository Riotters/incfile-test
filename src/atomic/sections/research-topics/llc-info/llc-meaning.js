import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../../molecules/blocks/research-topics-path";
import parse from "html-react-parser";

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
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="48">
        {content.text2}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="48" mixed>
        {parse(content.text3)}
      </Paragraph>
      <Heading size={2} template={4} left bottomMargin="24">
        {content.header4}
      </Heading>
      <Paragraph big>{content.text4}</Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
