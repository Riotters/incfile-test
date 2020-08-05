import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import Diagram from "../../../organisms/diagrams/fictitious-diagram";
import LeftContentRightObject from "../../../partials/left-content-right-object";
import Cards from "../../../organisms/cards/busienesses-choose-cards";

const About = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.orange3};

   h2 {
       text-align: left;
   }
`;

const AboutSection = ({ className, content }) => (
    <About className={className}>
        <LeftContentRightObject contentWidth="500" object={<Cards content={content.cards} />}>
            <Heading size="2" bottomMargin="64">{content.header}</Heading>
            <Paragraph big bottomMargin="0">{content.text}</Paragraph>
        </LeftContentRightObject>
    </About>
  );
  
  export default AboutSection;