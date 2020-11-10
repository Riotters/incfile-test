import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Table from "../../../organisms/tables/comparison-chart-table";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-green1.inline.svg";

const BusinessStructure = styled.section`
  position: relative;
  padding-top: 32px;
`;

const BusinessStructureSection = ({ className, content }) => (
  <BusinessStructure className={className}>
    <Oval width="570" height="570" top="38" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} text={content.text} textWidth="770" headlineWidth="770" bottomMargin="24" bottomMarginLG="65" />
    <ContentCenter>
      <Table content={content.faq} curve curveRight curveColor={color.blue1} />
    </ContentCenter>
  </BusinessStructure>
);

export default BusinessStructureSection;
