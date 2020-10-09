import React from "react";
import styled from "styled-components";

import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import { color } from "../../../atoms/styles/colors";
import Button from "../../../molecules/buttons/button";
import { Heading } from "../../../atoms/typography/heading";
import LightBoxVideo from '../../../../components/LightBox';
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import ContentObject from "../../../partials/left-content-right-object";
import OvalSVG from "../../../../images/ovals/top-right-orange1-to-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Steps = styled.section`
  position: relative;
  padding: 108px 0;
  background-color: ${color.blue3};
`;

const Video = styled.div`
  width: 100%;
  max-width: 770px;
  background-color: ${color.orange3};
  position: relative;

  .gatsby-image-wrapper {
    overflow: hidden;
    border-radius: 6px;
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const StepsSection = ({ className, content }) => (
  <Steps className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" bottom="0" left="0">
      <Oval2SVG />
    </Oval>
    <ContentObject
      object={
        <Video>
          <Curve top="-25" right="-29" color={color.purple1}>
            <CurveSVG />
          </Curve>
          <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" />
        </Video>
      }
      contentWidth="500"
      contentCenter
    >
      <Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
        {content.header}
      </Heading>
      <NumericList content={content.list} bottomMargin="0" noBox />
      <Button theme="primary56" content={content.button} marginSM="0 auto 0 0" arrow />
    </ContentObject>
  </Steps>
);

export default StepsSection;
