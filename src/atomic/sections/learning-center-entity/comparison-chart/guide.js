import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Form from "../../../organisms/forms/comparison-chart-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-blue2-transparent.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right-big.inline.svg";

const Guide = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-color: ${color.blue3};
`;

const GuideSection = ({ className, content }) => (
  <Guide className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Curve className="curve-shape" top="141" right="216" color={color.blue2}>
      <CurveSVG />
    </Curve>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} textWidth="770" bottomMargin="80" />
    <ContentCenter>
      <Form content={content.form} />
    </ContentCenter>
  </Guide>
);

export default GuideSection;
