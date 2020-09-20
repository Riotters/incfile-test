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
import Button from "../../../molecules/buttons/button";

const Protect = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.orange3};
  overflow: hidden;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const ProtectSection = ({ className, content }) => (
  <Protect className={className}>
    <Oval height="420" width="420" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval height="550" width="550" bottom="0" right="0" y="2" x="20">
      <OvalSVG2 />
    </Oval>
    <ContentImage image="protecting-your-business-name" contentWidth="670">
      <TextWrapper>
        <Curve top="-115" left="-115" color={color.orange2}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="56" maxWidth="515">
          {content.header}
        </Heading>
        <Paragraph big bottomMargin="24">
          {content.text}
        </Paragraph>
        <Button content={content.button} theme="primary56" arrow margin="32px 0 0" marginSM="32px auto 0 0" />
      </TextWrapper>
    </ContentImage>
  </Protect>
);

export default ProtectSection;
