import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import { color } from "../../../atoms/styles/colors";
import LeftContentRightObject from "../../../partials/left-content-right-object";
import Cards from "../../../organisms/cards/busienesses-choose-cards";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const BusinessesChoose = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.orange3};

   h2 {
       text-align: left;
   }
`;

const TextWrapper = styled.div`
   width: 100%;
   position: relative;
`;

const BusinessesChooseSection = ({ className, content }) => (
    <BusinessesChoose className={className}>
        <Oval height="136" width="136" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval height="545" width="720" bottom="0" left="0">
            <OvalSVG2 />
        </Oval>
        <LeftContentRightObject contentWidth="500" object={<Cards content={content.cards} />}>
            <TextWrapper>
                <Curve top="-5" right="65" color={color.orange1}>
                    <CurveSVG />
                </Curve>
                <Heading size="2" bottomMargin="64">{content.header}</Heading>
                <Paragraph big bottomMargin="0">{content.text}</Paragraph>
            </TextWrapper>
        </LeftContentRightObject>
    </BusinessesChoose>
  );
  
  export default BusinessesChooseSection;