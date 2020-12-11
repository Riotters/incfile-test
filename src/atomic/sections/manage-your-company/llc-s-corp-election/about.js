import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";
import parse from "html-react-parser";

const About = styled.section`
  position: relative;
  padding-bottom: 64px;
  
  @media (max-width: 575px) {
    .small {
        font-size: 12px;
        line-height: 16px;
    }
  }
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <Oval className="oval" height="570" width="570" y="-40">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" top="62" right="0">
      <Oval2SVG />
    </Oval>
    <ImageContent image="cash-register" alt="Prepare and File an S Corporation Tax Election">
      <Heading size="3">{content.header}</Heading>
      <Paragraph big mixed bottomMargin="72">
        {parse(content.text)}
      </Paragraph>
      <Button extends content={content.button[0]} theme="secondary56" arrow margin="0 auto 0 0" className="small" />
    </ImageContent>
  </About>
);

export default AboutSection;
