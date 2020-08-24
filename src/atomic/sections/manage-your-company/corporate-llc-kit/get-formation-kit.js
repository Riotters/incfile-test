import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import TextImage from "../../../partials/left-content-right-image";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";
import Accordion from "../../../organisms/accordion/accordion"
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-green2-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-green2.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";

const GetFormationKit = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &::before {
      content: '';
      height: 2200px;
      width: 100%;
      background-image: ${gradient.green3};
      position: absolute;
      top: 0;
      left: 0;
  }

  .text-image {
    padding-bottom: 88px;

    svg {
        transform: rotate(-90deg);
    }
  }

  .content-center {
      padding-top: 88px;

      h2 {
          max-width: 770px;
      }

      h3 {
          text-align: center;
          padding: 96px 0 32px;
      }
  }
`;

const GetFormationKitSection = ({ className, content}) => (
    <GetFormationKit className={className}>
        <Oval className="oval" height="420" width="420" top="0" right="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="720" width="720" top="35" left="0">
            <Oval2SVG />
        </Oval>
        <TextImage className="text-image" image="manage-your-company" contentWidth="550" contentPadding="85">
            <Curve top="40" left="-90" color={color.green1}>
                <CurveSVG />
            </Curve>
            <Heading size="2">{content.header}</Heading>
            <Paragraph maxWidth="500">{content.text}</Paragraph>
            <Button content={content.button} theme="primary56" margin="0 auto 0 0" arrow />
        </TextImage>
        <ContentCenter className="content-center">
            <h2>{content.header2}</h2>
            <Accordion content={content.faq} />
            <h3>{content.header3}</h3>
            <Button content={content.button2} theme="primary56" margin="0 auto" arrow />
        </ContentCenter>
    </GetFormationKit>
  );
  
  export default GetFormationKitSection;