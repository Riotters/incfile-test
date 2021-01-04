import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-red2.inline.svg";
import StateLink from "../../../atoms/links/bluebox-link.js";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const States = styled.div`
  padding-bottom: 64px;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px 30px;
  width: 100%;
  position: relative;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const StatesSection = ({ className, content }) => (
  <States className={className}>
    <Oval className="oval" height="570" width="570" top="0" right="0" y="110">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="104" />
    <ContentCenter>
      <Grid>
        <Curve top="-115" left="-115" rotate="-15" color={color.red2}>
          <CurveSVG />
        </Curve>
        {content.list.map((state, i) => (
          <StateLink content={state} key={i} />
        ))}
      </Grid>
    </ContentCenter>
  </States>
);

export default StatesSection;
