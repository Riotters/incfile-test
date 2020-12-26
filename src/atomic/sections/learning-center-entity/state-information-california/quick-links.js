import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Card from "../../../molecules/mixed-blocks/top-image-box";
import ContentCenter from "../../../partials/content-center";
import { quickLinks } from '../../../../static/state-corporation/general';

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
const icons = ["state-filling-times-3050", "starting-a-home-business-3959", "corporation-state-information-3850", "ongoing-filling-requirement-2930", 
"business-plan-tips-3859", "small-business-workshops-2049", "state-filling-fees", "s-corp-tax-calculator-9404", "entity-comparison-chart-2959",];

const QuickLinksSection = ({ className, content }) => (
  <QuickLinks className={className}>
    <HeadingCenter headline={quickLinks.header} headlineWidth="770" text={quickLinks.text} />
    <ContentCenter contentWidth="970">
      <Grid>
        {quickLinks.cards.map((card, i) => (
          <Card key={i} content={card} color={colors[i]} image={icons[i]} />
        ))}
      </Grid>
    </ContentCenter>
  </QuickLinks>
);

export default QuickLinksSection;
