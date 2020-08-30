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
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import CheckBlueSVG from "../../../../images/circle-status-check-blue.inline.svg";

const Help = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &::before {
    content: "";
    height: 1085px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }

  .numericlist {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px;
    list-style: none;
    margin: 40px 0;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 270px);
    }

    li {
      display: flex;
      align-items: center;
      min-height: 32px;
      position: relative;
      padding-left: 52px;
      font-family: Avenir, sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey2};

      @media (min-width: 1200px) {
        align-items: flex-start;
      }

      svg {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const content2 = {
  price: `199`,
  fee: `+ $10 State Fee`,
};
const dropdownOneOptions = ["LCC", "Corporation", "Nonprofit"];
const dropdownTwoOptions = states.state.map((state) => state.name);
const dropdownThreeOptions = states.state.map((state) => state.name);

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
      object={
        <Card
          className="card"
          headline="Foreign Qualification"
          content={content2}
          dropdownOnePlaceholder="Select Entity Type"
          dropdownOneOptions={dropdownOneOptions}
          dropdownTwoPlaceholder="Select State"
          dropdownTwoOptions={dropdownTwoOptions}
          dropdownThreePlaceholder="Select State of Formation"
          dropdownThreeOptions={dropdownThreeOptions}
        />
      }
    >
      <TextWrapper>
        <Curve top="-15" right="180" color={color.blue1}>
          <CurveSVG />
        </Curve>
        <Heading size="2" bottomMargin="48">
          {content.header}
        </Heading>
        <Heading size="4">{content.header2}</Heading>
        <Paragraph big bottomMargin="0" maxWidth="500">
          {content.text}
        </Paragraph>
        <ul className="numericlist">
          {content.list.map((item) => (
            <li>
              <CheckBlueSVG />
              {item}
            </li>
          ))}
        </ul>
        <Paragraph big bottomMargin="0" maxWidth="500">
          {content.text2}
        </Paragraph>
        <ul className="numericlist">
          {content.list2.map((item) => (
            <li>
              <CheckBlueSVG />
              {item}
            </li>
          ))}
        </ul>
      </TextWrapper>
    </ObjectContent>
  </Help>
);

export default HelpSection;
