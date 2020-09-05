import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Table from "../../../organisms/tables/comparison-chart-table";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";

const BusinessStructure = styled.section`
  position: relative;
  padding-top: 104px;
`;

const BusinessStructureSection = ({ className, content }) => (
  <BusinessStructure className={className}>
    <Oval width="570" height="570" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval width="720" height="720" bottom="0" left="0">
      <Oval2SVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" bottomMargin="65" />
    <ContentCenter>
      <Table content={content.faq} />
    </ContentCenter>
  </BusinessStructure>
);

export default BusinessStructureSection;
