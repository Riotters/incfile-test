import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../components/styles/colors";

import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Image from "../../atoms/image/image_nobase64";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import OvalSVG2 from "../../../images/ovals/top-right-transparent-orange.inline.svg";
import PopularSVG from "../../../images/icons/popular-articles-to-help-you-get-started.inline.svg";
import ShapeCurve from "../../atoms/shapes/curve";
import RelativeElement from "../../elements/relative-e";
import AbsoluteShapCure from "../../elements/absolute-shape-curve-e";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Button from "../../../components/button";

const Wrapper = styled.div`
  position: relative;
  background-color: #fef6ed;
  padding: 100px 0 256px 0;
`;

const ImgageBottom = styled.div`
  position: absolute;
  left: 50%;
  bottom: -50px;
  width: 100%;
  max-width: 500px;
  transform: translate(-50%, 15%);
`;

const DecidingSection = ({ content }) => (
  <Wrapper>
    <Oval className="oval" height="420" width="420" bottom="-10" left="0" y="0">
      <OvalSVG />
    </Oval>

    <Oval className="oval" height="136" width="136" top="0" right="0" y="0">
      <OvalSVG2 />
    </Oval>

    <ImgageBottom>
      <Image filename="mr-bulb-compass-3979" alt="" />
    </ImgageBottom>

    <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} />
  </Wrapper>
);

export default DecidingSection;
