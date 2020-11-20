import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import List from "../../../organisms/lists/browse-by-category-list";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states";
import CenterGrid from "../../../partials/center-grid";
import PaperPlaneSVG from "../../../../images/icons/icon-learning-center-white-latter.inline.svg";
import SpaceShipSVG from "../../../../images/icons/icon-learning-center-white-l-corpo.inline.svg";
import PlaneSVG from "../../../../images/icons/icon-learning-center-white-airplane.inline.svg";
import RocketSVG from "../../../../images/icons/icon-learning-center-white-c-corporation.inline.svg";
import FlowerSVG from "../../../../images/icons/icon-learning-center-white-flower.inline.svg";
import BadgeSVG from "../../../../images/icons/icon-learning-center-white-user.inline.svg";
import TaxesSVG from "../../../../images/icons/icon-learning-center-white-document.inline.svg";
import EmployerIdSVG from "../../../../images/icons/icon-learning-center-white-user-card.inline.svg";
import MagniferSVG from "../../../../images/icons/icon-learning-center-white-search.inline.svg";
import CameraSVG from "../../../../images/icons/icon-learning-center-white-camera.inline.svg";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange3.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-pink2.inline.svg";

const Categories = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const colors = [color.babyblue2, color.purple2, color.green2, color.yellow2, color.orange2, color.purple2, color.green2, color.purple2, color.yellow2, color.red2];
const icons = [<PaperPlaneSVG />, <SpaceShipSVG />, <PlaneSVG />, <RocketSVG />, <FlowerSVG />, <BadgeSVG />, <TaxesSVG />, <EmployerIdSVG />, <MagniferSVG />, <CameraSVG />];

const CategoriesSection = ({ className, content }) => (
  <Categories className={className}>
    <Oval className="oval" height="720" width="720" top="0" left="0" y="-19">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="720" width="720" y="20" bottom="17" right="0">
      <Oval2SVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="700" bottomMargin="80" />
    <CenterGrid rowGap="100">
      {content.lists.map((list, i) => (
        <List content={list} circleColor={colors[i]} icon={icons[i]} curve={i === 1 ? true : false} />
      ))}
    </CenterGrid>
  </Categories>
);

export default CategoriesSection;
