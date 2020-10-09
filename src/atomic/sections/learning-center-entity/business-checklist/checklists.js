import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Form from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import Checklist from "../../../../components/checklist/checklist"

const Checklists = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;
  background-color: ${color.blue3};
`;

const ChecklistsSection = ({ className, content }) => (
  <Checklists className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <ContentCenter>
        <Checklist />
        <Checklist />
        <Checklist />
        <Checklist />
        <Checklist />
    </ContentCenter>
  </Checklists>
);

export default ChecklistsSection;
