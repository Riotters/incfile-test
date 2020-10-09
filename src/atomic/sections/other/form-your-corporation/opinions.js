import React from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import HeadingCenter from "../../../partials/heading-center";
import OpinionsCarousel from "../../../organisms/carousels/form-your-corporation-carousel";
import ContentCenter from "../../../partials/content-center";
import VisibilitySensor from "../../../VisibilitySensor";
import PurpleCurveSVG from "../../../../images/purple-curve.inline.svg";
import PinkCurveSVG from "../../../../images/pink-curve.inline.svg";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import { gradient } from "../../../atoms/styles/colors";

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;
  background-image: ${gradient.orange3};
`;

const OpinionsSection = ({ content }) => (
  <Wrapper>
    <Oval height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} bottomMargin="56" />
    <ContentCenter>
      <OpinionsCarousel content={content.customers} />
    </ContentCenter>
  </Wrapper>
);

export default OpinionsSection;
