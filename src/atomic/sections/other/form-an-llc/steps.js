import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import ContentObject from "../../../partials/left-content-right-object";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-orange1-to-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Button from "../../../molecules/buttons/button";
import Image from "../../../atoms/image/image_nobase64";
import PlayerSVG from "../../../../images/icons/player.inline.svg";

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

  &::before {
    content: "";
    display: block;
    padding-top: 56.23%;
  }

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

const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${color.orange1};
  border: 0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
  cursor: pointer;

  span {
    display: block;
    height: 21px;
    width: 21px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
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
          <Image filename="comparison-chart-video-3611" />
          <PlayButton>
            <span>
              <PlayerSVG />
            </span>
          </PlayButton>
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
