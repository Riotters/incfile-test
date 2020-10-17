import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Table from "../../../organisms/tables/explore-cities-table";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";

const BusinessStructure = styled.section`
  position: relative;
  padding-top: 104px;
`;

const BusinessStructureSection = ({ className, content }) => (
  <BusinessStructure className={className}>
    <Oval width="420" height="420" top="3" left="0">
      <OvalSVG />
    </Oval>
    <Oval width="570" height="570" bottom="0" left="0">
      <Oval2SVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="24" bottomMarginLG="65" />
    <ContentCenter>
      <Table content={content.table} curve curveRight curveColor={color.blue1}/>
    </ContentCenter>
  </BusinessStructure>
);

export default BusinessStructureSection;
