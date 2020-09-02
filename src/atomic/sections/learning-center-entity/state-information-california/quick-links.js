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

const QuickLinks = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
  background-color: ${color.green3};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const colors = [color.orange3, color.green3, color.green3, color.babyblue3, color.purple3, color.blue3, color.yellow3, color.red3, color.blue3,];
const icons = ["State Filling Times3050", "Starting a Home Business3959", "Corporation State Information3850", "Ongoing Filling Requirement2930", "Business_Plan_Tips3859", "Small Business Workshops2049", "State Filling Fees5930", "S-Corp Tax Calculator9404", "Entity_Comparison_Chart2959",];

const QuickLinksSection = ({ className, content }) => (
  <QuickLinks className={className}>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} />
    <ContentCenter contentWidth="970">
      <Grid>
        {content.cards.map((card, i) => (
          <Card content={card} color={colors[i]} image={icons[i]} />
        ))}
      </Grid>
    </ContentCenter>
  </QuickLinks>
);

export default QuickLinksSection;
