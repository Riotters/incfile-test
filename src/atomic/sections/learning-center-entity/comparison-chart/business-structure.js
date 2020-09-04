import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Table from "../../../organisms/tables/comparison-chart-table";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const BusinessStructure = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 24px;
  background-color: ${color.green3};

  ul {
    margin-bottom: 0;
  }
`;

const BusinessStructureSection = ({ className, content }) => (
  <BusinessStructure className={className}>
    <Oval width="720" height="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" />
    <ContentCenter>
      <Table content={content.faq} />
    </ContentCenter>
  </BusinessStructure>
);

export default BusinessStructureSection;
