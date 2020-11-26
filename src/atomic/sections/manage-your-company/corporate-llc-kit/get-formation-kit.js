import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import TextImage from "../../../partials/left-content-right-image";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";
import Accordion from "../../../organisms/accordion/accordion";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-green2-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";

const GetFormationKit = styled.section`
  position: relative;
  padding-top: 48px;
  
  @media (min-width: 576px) {
    padding-top: 75px;
  }

  @media (min-width: 992px) {
    padding-bottom: 64px;
  }

  &::before {
    content: "";
    height: 2200px;
    width: 100%;
    background-image: ${gradient.green3};
    position: absolute;
    top: 0;
    left: 0;
  }

  .text-image {
    .curve-svg {
      svg {
        transform: rotate(-90deg);
      }
    }

    h2 {
      text-align: center;
      max-width: 400px;
      margin: 0 auto 24px;

      @media (min-width: 992px) {
        text-align: left;
        margin: 0 0 24px;
      }
    }

    p {
      text-align: center;
      margin: 0 auto 32px;

      @media (min-width: 992px) {
        text-align: left;
        margin: 0 0 32px;
      }
    }
  }

  .content-center {
    padding-top: 88px;

    h3 {
      text-align: center;
      padding: 96px 0 32px;
    }
  }
`;

const GetFormationKitSection = ({ className, content }) => (
  <GetFormationKit className={className}>
    <Oval className="oval" height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="720" width="720" top="35" left="0">
      <Oval2SVG />
    </Oval>
    <TextImage className="text-image" image="standard-kit-5602" contentWidth="550" contentPadding="85">
      <Curve top="25" left="-90" color={color.green1} className="curve-svg">
        <CurveSVG />
      </Curve>
      <Heading size="2">{content.header}</Heading>
      <Paragraph big maxWidth="500">
        {content.text}
      </Paragraph>
      <Button content={content.button} theme="primary56" marginSM="0 auto" marginLG="0 auto 0 0" arrow />
    </TextImage>
    <ContentCenter className="content-center">
      <Heading size="2" maxWidth="770" bottomMargin="0">
        {content.header2}
      </Heading>
      <Accordion content={content.faq} />
      <h3>{content.header3}</h3>
      <Button content={content.button2} theme="primary56" margin="0 auto" arrow />
    </ContentCenter>
  </GetFormationKit>
);

export default GetFormationKitSection;
