import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const About = styled.section`
  position: relative;
`;

const AboutSection = ({ className, content }) => (
  <About className={className}>
    <ImageContent image="sales-tax-calculator-about-1192" alt="sale tax calculator" contentCenter>
      <PHeading size={2} template={3} left>{content.header}</PHeading>
      <Paragraph big>{content.text}</Paragraph>
    </ImageContent>
  </About>
);

export default AboutSection;
