import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Card from "../../../molecules/mixed-blocks/top-image-box";
import ContentCenter from "../../../partials/content-center";

const FutherResources = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 64px;

  &::before {
    content: "";
    height: 2166px;
    width: 100%;
    background-image: ${gradient.orange3};
    position: absolute;
    top: 0;
    left: 0;
  }
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

const colors = [color.orange3, color.purple3, color.blue3, color.green3, color.purple3, color.yellow3, color.blue3, color.orange3, color.purple3, color.green3];
const icons = ["clock-691", "purpletick-2942", "rocket-939", "green-chart-4824", "purple-id-3067", "start-blogging-and-writing", "blue-usa-3865", "forming-a-corporation-3478", "ibusiness-name-search-5891", "business-report-9917"];

const FutherResourcesSection = ({ className, content }) => (
  <FutherResources className={className}>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} bottomMargin="80" />
    <ContentCenter contentWidth="970">
      <Grid>
        {content.cards.map((card, i) => (
          <Card key={i} content={card} color={colors[i]} image={icons[i]} />
        ))}
      </Grid>
    </ContentCenter>
  </FutherResources>
);

export default FutherResourcesSection;
