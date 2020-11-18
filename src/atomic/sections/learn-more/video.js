import React from "react";
import HeadingCenter from "../../partials/heading-center";
import { service } from "../../../static/learning-center-entity/alaska-corporation";
import ContentCenter from "../../partials/content-center";
import Curve from "../../atoms/icons/curve";
import { color } from "../../atoms/styles/colors";
import Curve2SVG from "../../../images/curves/bottom-left-top-right-reverse-big.inline.svg";
import LightBoxVideo from "../../../components/LightBox";
import styled from "styled-components";
import OvalSvg from "../../../images/ovals/bottom-left-transparent-pink1.inline.svg";
import OvalSvg2 from "../../../images/ovals/oval-half-circle-orange-transparent.inline.svg";
import Oval from "../../atoms/icons/oval";

const Video = () => (
  <Wrapper>
    <Oval className="oval" height={652} width={652} top="20" left="0">
      <OvalSvg />
    </Oval>
    <Oval className="oval" height={217} width={434} top="60" right="15">
      <OvalSvg2 />
    </Oval>
    <HeadingCenter headline="See how easy it can be to get your business incorporated" textWidth="590" text="Take a moment to view our instructional video." bottomMargin="48" bottomMarginLG="80" />
    <ContentCenter style={{ marginBottom: "149px" }}>
      <Curve bottom="150" left="-160" color="#ede0fa">
        <Curve2SVG />
      </Curve>
      <LightBoxVideo thumbnailVideo="how-to-start-an-llc-2379" videoID="R_oIgzYh7NU" />
    </ContentCenter>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 160px;
  position: relative;
`;

export default Video;
