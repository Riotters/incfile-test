import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";

const About = styled.section`
  position: relative;

  @media (min-width: 769px) {
    padding-bottom: 120px;
  }

  p:not(.i-believe-i-can-be-a-h3):not(.i-believe-i-can-be-a-h4) {
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
    <Oval className="oval" height="720" width="720" y="-35">
      <OvalSVG />
    </Oval>
    <ImageContent image="llc-as-tax-crop-about-6724" alt="llc tax vs s corp tax">
      <Heading size={2} template={3} left bottomMargin="32">
        {content.header}
      </Heading>
      <Paragraph big bottomMargin="16">
        {content.text}
      </Paragraph>
      <Paragraph big bottomMargin="16">
        {content.text2}
      </Paragraph>
      <IconListColorBox color={color.orange3} content={content.box} bottomMargin="48" rounded paragraphHeader />
      <Heading size={2} template={3} left bottomMargin="24">
        {content.header2}
      </Heading>
      <Paragraph big bottomMargin="32">
        {content.text3}
      </Paragraph>
      {/* <Circle height="80" width="80" circleColor={color.green2} bottomMargin="32">
        <ResonableSalarySVG />
      </Circle> */}
      <Heading size={2} template={3} left bottomMargin="16">
        {content.header3}
      </Heading>
      <Paragraph big bottomMargin="32">
        {content.text4}
      </Paragraph>
      {/* <Circle height="80" width="80" circleColor={color.purple2} bottomMargin="32">
        <LLCDeclaringSVG />
      </Circle> */}
      <Heading size={2} template={3} left bottomMargin="16">
        {content.header4}
      </Heading>
      <Paragraph big bottomMargin="0">
        {content.text5}
      </Paragraph>
    </ImageContent>
    <ContentCenter>
      <Button externalLink theme="primary56" content={{ text: `Get Started`, url: `${process.env.ORDER_URL}/form-order-now.php` }} margin="48px 0 0" arrow />
    </ContentCenter>
  </About>
);

export default AboutSection;
