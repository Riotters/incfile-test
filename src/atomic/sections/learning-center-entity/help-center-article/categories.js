import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import CenterGrid from "../../../partials/center-grid";
import PaperPlaneSVG from "../../../../images/icons/paper-plane.inline.svg";
import SpaceShipSVG from "../../../../images/icons/space-ship.inline.svg";
import PlaneSVG from "../../../../images/icons/plane.inline.svg";
import RocketSVG from "../../../../images/icons/rocket.inline.svg";
import FlowerSVG from "../../../../images/icons/heart-flower.inline.svg";
import BadgeSVG from "../../../../images/icons/badge.inline.svg";
import TaxesSVG from "../../../../images/icons/business-taxes.inline.svg";
import EmployerIdSVG from "../../../../images/icons/employer-id.inline.svg";
import MagniferSVG from "../../../../images/icons/magnifier-localization.inline.svg";
import CameraSVG from "../../../../images/icons/camera.inline.svg";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-babyblue2.inline.svg";
import CurveSVG from "../../../../images/curves/bottom-left-top-right.inline.svg";
import CategoryButton from "../../../molecules/buttons/category-button";

const Categories = styled.section`
  position: relative;
  padding-top: 48px;
  padding-bottom: 64px;

  @media (min-width: 992px) {
    padding-top: 104px;
    padding-bottom: 104px;
  }
`;

const icons = [
  <PaperPlaneSVG />,
  <SpaceShipSVG />,
  <PlaneSVG />,
  <RocketSVG />,
  <FlowerSVG />,
  <BadgeSVG />,
  <TaxesSVG />,
  <EmployerIdSVG />,
  <MagniferSVG />,
  <CameraSVG />,
];

const CategoriesSection = ({ className, content }) => (
  <Categories className={className}>
    <Oval className="oval" height="420" width="420" bottom="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter
      headline={content.header}
      headlineWidth="700"
      bottomMargin="32"
      bottomMarginMD="80"
    />
    <CenterGrid columnsLG="3">
      <Curve top="-25" left="-29" color={color.blue1}>
        <CurveSVG />
      </Curve>
      {content.buttons.map((buttons, i) => (
        <CategoryButton content={buttons} icon={icons[i]} />
      ))}
    </CenterGrid>
  </Categories>
);

export default CategoriesSection;
