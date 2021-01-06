import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states";
import ContentObject from "../../../partials/left-content-right-object";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import ArrowLink from "../../../molecules/buttons/text";
import { PHeading } from "../../../atoms/typography/p-to-heading";

const Help = styled.section`
  position: relative;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (min-width: 992px) {
    padding-top: 144px;
    padding-bottom: 64px;
  }

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

const dropdownTwoOptions = states.state.map((state) => state.name);

const HelpSection = ({ className, content }) => (
  <Help className={className}>
    <Oval className="oval" height="136" width="136" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" y="20" bottom="0" right="0">
      <Oval2SVG />
    </Oval>
    <ContentObject
      className="help"
      headlineWidth="450"
      object={
        <Card
          className="card"
          content={content.card}
          headline="Filing Your Certificate of Good Standing"
          dropdownOnePlaceholder="Select Entity Type"
          dropdownTwoPlaceholder="Select State"
          dropdownTwoOptions={dropdownTwoOptions}
          priceColumn="goodStand"
          orderPage="/cert-good-standing.php"
          fields="state,goodStandLLC,goodStandCorp,goodStandNpc"
        />
      }
      objectMargin="40px auto 0"
    >
      <TextWrapper>
        <Curve top="-15" right="250" color={color.blue1}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="80" maxWidth="468">
          {content.header}
        </Heading>
        <PHeading size="3" template={4}>
          {content.header2}
        </PHeading>
        <Paragraph big>{content.text}</Paragraph>
        <ArrowLink content={content.link} />
      </TextWrapper>
    </ContentObject>
  </Help>
);

export default HelpSection;
