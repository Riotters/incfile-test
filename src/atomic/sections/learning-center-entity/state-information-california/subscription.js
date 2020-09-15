import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import TextImage from "../../../partials/left-content-right-image";
import Button from "../../../molecules/buttons/button";
import Input from "../../../molecules/form/input-field";
import { Heading } from "../../../atoms/typography/heading";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-orange-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Subscription = styled.section`
  position: relative;
  background-color: ${color.orange3};
  padding-top: 64px;
  padding-bottom: 64px;
  overflow: hidden;

  @media (min-width: 992px) {
    padding-bottom: 64px;
  }
`;

const Flex = styled.div`
  display: flex;

  .subscription-input {
    flex-grow: 1;
    margin-right: 30px;
  }
`;

const SubscriptionSection = ({ className, content }) => (
  <Subscription className={className}>
    <Oval className="oval" height="420" width="420" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" bottom="-5" right="-10">
      <Oval2SVG />
    </Oval>
    <TextImage image="subscribe-now-3233" contentWidth="550" contentPadding="85">
      <Curve top="10" left="-100" color={color.orange2}>
        <CurveSVG />
      </Curve>
      <Heading size="2" bottomMargin="48">
        {content.header}
      </Heading>
      <Flex>
        <Input className="subscription-input" placeholder="Your email" />
        <Button content={content.button} theme="primary48" arrow />
      </Flex>
    </TextImage>
  </Subscription>
);

export default SubscriptionSection;
