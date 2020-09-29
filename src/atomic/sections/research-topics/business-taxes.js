import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ImageContent from "../../partials/left-image-right-content";
import IconSVG from "../../../images/icons/no-pass-sign.inline.svg";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-blue3.inline.svg";

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
      <Heading size={3} bottomMargin="0">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="40">
        {content.text}
      </Paragraph>
      {content.links2.map(link => (
        <ArrowLink content={link} />
      ))}
    </ImageContent>
  </About>
);

export default AboutSection;
