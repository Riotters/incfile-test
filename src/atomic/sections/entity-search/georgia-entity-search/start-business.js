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
import Buttonsbox from "../../../atoms/boxes/top-buttons-box";
import Button from "../../../molecules/buttons/button";

const Protect = styled.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
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
    <ContentImage image="mr-bulb-review-entity-type-5755" contentWidth="570">
      <TextWrapper>
        <Curve top="-64" left="-96" color={color.orange2}>
          <CurveSVG />
        </Curve>
        <Heading size="2" maxWidth="515">
          {content.header}
        </Heading>
        <Paragraph big maxWidth="530">
          {content.text}
        </Paragraph>
        <Buttonsbox>
          <Button content={content.button} theme="primary56" arrow margin="0 0 16px" marginSM="0 auto 16px 0" marginLG="0 16px 0 0" />
          <Button content={content.button2} theme="primary56" arrow margin="0" marginSM="0 auto 0 0" />
        </Buttonsbox>
      </TextWrapper>
    </ContentImage>
  </Protect>
);

export default ProtectSection;
