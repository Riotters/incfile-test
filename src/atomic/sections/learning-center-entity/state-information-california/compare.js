import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states";
import HeadingCenter from "../../../partials/heading-center";
import Card from "../../../molecules/mixed-blocks/top-image-box";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";
import CheckBlueSVG from "../../../../images/circle-status-check-blue.inline.svg";
import Table from "../../../organisms/tables/state-information-llc-table";

const Compare = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const icons = ["state-filling-times-3050", "starting-a-home-business-3959", "corporation-state-information-3850", "ongoing-filling-requirement-2930", 
"business-plan-tips-3859", "small-business-workshops-2049", "state-filling-fees", "s-corp-tax-calculator-9404", "entity-comparison-chart-2959",];

const CompareSection = ({ className, content }) => (
  <Compare className={className}>
    <HeadingCenter headline={content.header} headlineWidth="550" text={content.text} bottomMargin="80" />
    <ContentCenter>
        <Table content={content.table} />
    </ContentCenter>
  </Compare>
);

export default CompareSection;
