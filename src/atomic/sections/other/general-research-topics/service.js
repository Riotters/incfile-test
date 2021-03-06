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
  padding-top: 80px;
  padding-bottom: 220px;
  overflow: hidden;
`;

const ServiceSection = ({ className, content }) => (
  <Service className={className}>
    <Oval className="oval" height="652" width="652" top="55" left="0" y="-50">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="300" width="300" top="44" left="48" x="122">
      <Oval2SVG />
    </Oval>
    <Curve bottom="375" left="80" color={color.purple2}>
      <Curve2SVG />
    </Curve>
    <HeadingCenter headline={content.header} textWidth="770" text={content.text} linkText={content.link.text} linkUrl={content.link.url} bottomMargin="48" bottomMarginLG="80" />
    <ContentCenter>
      {/* <Video>
        <Curve top="-25" right="-29" color={color.purple1}>
          <CurveSVG />
        </Curve>
        <Image filename="comparison-chart-video-3611" />
        <PlayButton>
          <span>
            <PlayerSVG />
          </span>
        </PlayButton>
      </Video> */}
      <LightBoxVideo thumbnailVideo="comparison-chart-video-3611" videoID="R_oIgzYh7NU" />
    </ContentCenter>
  </Service>
);

export default ServiceSection;
