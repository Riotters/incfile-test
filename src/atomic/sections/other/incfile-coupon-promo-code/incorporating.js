import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import { color } from "../../../atoms/styles/colors";
import ContentImage from "../../../partials/left-content-right-image";
import Link from "../../../molecules/buttons/text";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-orange-transparent.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Incorporating = styled.section`
  position: relative;
  padding-top: 176px;
  padding-bottom: 120px;
  background-color: ${color.orange3};
  overflow: hidden;
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const IncorporatingSection = ({ className, content }) => (
  <Incorporating className={className}>
    <Oval height="420" width="420" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval height="570" width="570" top="50" right="0" y="-40" x="30">
      <OvalSVG2 />
    </Oval>
    <ContentImage image="incfile-coupon-promo-code-8290" contentWidth="535" contentPadding="65">
      <TextWrapper>
        <Heading size="2" maxWidth="515">
          <Curve top="-96" left="-96" color={color.orange2} rotate="-10">
            <CurveSVG />
          </Curve>
          {content.header}
        </Heading>
        <Paragraph big>{content.text}</Paragraph>
        <Paragraph big bottomMargin="48">
          {content.text2}
        </Paragraph>
        <Heading size="3" bottomMargin="32">
          {content.header2}
        </Heading>
        <Link content={content.links[0]} bottomMargin="16" />
        <Link content={content.links[1]} bottomMargin="0" />
      </TextWrapper>
    </ContentImage>
  </Incorporating>
);

export default IncorporatingSection;
