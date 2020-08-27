import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";

const About = styled.section`
  position: relative;
  padding-bottom: 120px;

  p {
    color: ${color.grey2};
  }

  ul {
      margin-bottom: 0;
  }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <ImageContent image="business-license-requirements-about" imageWidth="350">
            <Heading size={3} bottomMargin="48">{content.header}</Heading>
            <Paragraph big bottomMargin="0">{content.text}</Paragraph>
        </ImageContent>
    </About>
  );
  
  export default AboutSection;