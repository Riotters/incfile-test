import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";

const About = styled.section`
  position: relative;
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <ImageContent image="sales-tax-calculator-about-1192" contentCenter>
      <Heading size="3">{content.header}</Heading>
      <Paragraph big>{content.text}</Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
