import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import { color } from "../../../atoms/styles/colors";
import ContentImage from "../../../partials/left-content-right-image";
import Link from "../../../molecules/buttons/text";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Protect = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.orange3};
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ProtectSection = ({ className, content }) => (
  <Protect className={className}>
    <Oval height="420" width="420" top="0" left="0" y="-15">
      <OvalSVG />
    </Oval>
    <Oval height="570" width="570" bottom="0" right="0">
      <OvalSVG2 />
    </Oval>
    <ContentImage image="protecting-your-business-name" imageAlt="protect your business name" contentWidth="770" contentPadding="200">
      <TextWrapper>
        <Curve top="-5" right="155" color={color.orange1}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="56" maxWidth="515">
          {content.header}
        </Heading>
        <Paragraph big bottomMargin="24">
          {content.text}
        </Paragraph>
        <Paragraph big bottomMargin="56">
          {content.text2}
        </Paragraph>
        <Link content={content.link} />
      </TextWrapper>
    </ContentImage>
  </Protect>
);

export default ProtectSection;
