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
import ContentLeft from "../../../partials/content-left";
import Button from "../../../molecules/buttons/button";

const Service = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 16px;
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

const colors = [color.orange3, color.red3, color.babyblue3, color.purple3];
const icons = ["bc-11", "digital-dashboard3406", "receive", "automatic-forwarding2369"];

const ServiceSection = ({ className, content }) => (
  <Service className={className}>
    <ContentLeft contentWidth="770">
      <Heading size="2">{content.header}</Heading>
      <Paragraph big>{content.text}</Paragraph>
      <Paragraph big bottomMargin="104">
        {content.text2}
      </Paragraph>
    </ContentLeft>
    <ContentCenter contentWidth="970">
      <Grid>
        {content.cards.map((card, i) => (
          <Card content={card} color={colors[i]} image={icons[i]} />
        ))}
      </Grid>
      <Button content={content.button} theme="primary56" arrow marginSM="64px 0 0" marginSM="64px auto 0" />
    </ContentCenter>
  </Service>
);

export default ServiceSection;
