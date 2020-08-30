import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ObjectContent from "../../../partials/left-object-right-content";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Requirments = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &::before {
    content: "";
    height: 2032px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const RequirmentsSection = ({ className, content }) => (
  <Requirments className={className}>
    <Oval className="oval" height="136" width="136" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" y="20" bottom="0" right="0">
      <Oval2SVG />
    </Oval>
    <ObjectContent className="help" headlineWidth="450" object={"aaa"} objectWidth="270" objectPadding="130" contentWidth="900">
      <TextWrapper>
        <Curve top="-20" right="-5" rightXL="190" color={color.blue1}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="56" maxWidth="460">
          aaaa
        </Heading>
        <Heading size="4">hhhh</Heading>
        <Paragraph big bottomMargin="0">
          aaaa
        </Paragraph>
      </TextWrapper>
    </ObjectContent>
  </Requirments>
);

export default RequirmentsSection;
