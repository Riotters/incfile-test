import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import StatesMap from "../../../../components/states-map/states-map";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";

const Map = styled.div`
  padding-top: 180px;
  padding-bottom: 40px;
  position: relative;

  &::before {
    content: "";
    height: 1564px;
    width: 100%;
    background-image: ${gradient.blue3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const MapSection = ({ className, content }) => (
  <Map className={className}>
    <Oval className="oval" height="570" width="570" bottom="0" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="0" />
    <ContentCenter contentWidth="770">
      <StatesMap />
    </ContentCenter>
  </Map>
);

export default MapSection;
