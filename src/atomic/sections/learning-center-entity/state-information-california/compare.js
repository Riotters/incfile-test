import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Table from "../../../organisms/tables/state-information-llc-table";

const Compare = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const icons = ["state-filling-times-3050", "starting-a-home-business-3959", "corporation-state-information-3850", "ongoing-filling-requirement-2930", "business-plan-tips-3859", "small-business-workshops-2049", "state-filling-fees", "s-corp-tax-calculator-9404", "entity-comparison-chart-2959"];

const CompareSection = ({ className, content }) => (
  <Compare className={className}>
    <HeadingCenter headline={content.header} headlineWidth="550" text={content.text} bottomMargin="80" />
    <ContentCenter>
      <Table content={content.table} />
    </ContentCenter>
  </Compare>
);

export default CompareSection;
