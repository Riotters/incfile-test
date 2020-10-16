import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states";
import ObjectContent from "../../../partials/left-object-right-content";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Help = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 48px;

  &::before {
    content: "";
    height: 2711px;
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

const content2 = {
  price: `49`,
  fee: `Plus State Filling Fees`,
  button: {
    text: `Order Now`,
    url: `/`,
  }
};
const dropdownTwoOptions = states.state.map((state) => state.name);

const HelpSection = ({ className, content }) => (
  <Help className={className}>
    <Oval height="136" width="136" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval height="420" width="420" bottom="15" left="0">
      <Oval2SVG />
    </Oval>
    <ObjectContent
      className="help"
      headlineWidth="450"
      objectWidth="550"
      object={<Card className="card"
        headline="Change of Agent"
        content={content2}
        dropdownOnePlaceholder="Select Entity Type"
        dropdownTwoPlaceholder="Select State"
        dropdownTwoOptions={dropdownTwoOptions}
        priceColumn="raChange"
        orderPage="/change-agent.php"
        fields="state,raChangeLLC,raChangeCorp,raChangeNpc" />
      }
    >
      <TextWrapper>
        <Curve top="-15" right="30" rightXL="140" color={color.blue1}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="48" maxWidth="468">
          {content.header}
        </Heading>
        <Heading size="4">{content.header2}</Heading>
        <Paragraph big bottomMargin="0">
          {content.text}
        </Paragraph>
      </TextWrapper>
    </ObjectContent>
  </Help>
);

export default HelpSection;
