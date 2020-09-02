import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states";
import HeadingCenter from "../../../partials/heading-center";
import BoxedButton from "../../../molecules/buttons/boxed-normal-weight";
import ContentCenter from "../../../partials/content-center";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import CheckBlueSVG from "../../../../images/circle-status-check-blue.inline.svg";

const LearnMore = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.green3};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LearnMoreSection = ({ className, content }) => (
  <LearnMore className={className}>
    <HeadingCenter headline={content.header} headlineWidth="670" text={content.text} bottomMargin="80" />
    <ContentCenter>
      <Grid>
        {content.buttons.map((button) => (
          <BoxedButton content={button} ellipsis />
        ))}
      </Grid>
    </ContentCenter>
  </LearnMore>
);

export default LearnMoreSection;
