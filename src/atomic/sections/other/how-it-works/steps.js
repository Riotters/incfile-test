import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Circle from "../../../atoms/icons/circle";
import List from "../../../organisms/lists/related-questions-list";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Steps = styled.section`
  position: relative;
  margin-top: 15px;
  padding-top: 104px;
  padding-bottom: 104px;
  
  &::before {
    content: "";
    height: 2385px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StepsSection = ({ className, content }) => (
  <Steps className={className}>
    <HeadingCenter headline={content.header} text={content.text} headlineWidth="700" bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <Circle height="80" width="80" circleColor={color.blue1} iconColor={color.white} bottomMargin="32">1</Circle>
      <Heading size="3" bottomMargin="24">{content.list[0].header}</Heading>
      <Paragraph big>{content.list[0].text}</Paragraph>
    </ContentCenter>
  </Steps>
);

export default StepsSection;
