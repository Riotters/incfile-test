import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-pink1.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-red3.inline.svg";
import Curve from "../../../atoms/icons/curve";
import Curve2SVG from "../../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import LightBoxVideo from "../../../../components/LightBox";

const Service = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;
  overflow: hidden;
`;

const ServiceSection = ({ className, content }) => (
  <Service className={className}>
    <Oval className="oval" height="652" width="652" bottom="5" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="300" width="300" top="48" left="50" x="122">
      <Oval2SVG />
    </Oval>
    <Curve bottom="270" left="80" color={color.purple2}>
      <Curve2SVG />
    </Curve>
    <HeadingCenter headline={content.header} textWidth="770" text={content.text} bottomMargin="48" bottomMarginLG="80" />
    <ContentCenter>
      {/* <Video>
        <Curve top="-25" right="-29" color={color.purple1}>
          <CurveSVG />
        </Curve>
        <Image filename="newspaper-433445" />
        <PlayButton>
          <span>
            <PlayerSVG />
          </span>
        </PlayButton>
      </Video> */}
      <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="_u4u3-PQ8a0" />
    </ContentCenter>
  </Service>
);

export default ServiceSection;
