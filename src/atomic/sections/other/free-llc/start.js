import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import CenterGrid from "../../../partials/center-grid";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import BoxedButton from "../../../molecules/buttons/boxed";

const Start = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 120px;

  &::before {
    content: "";
    height: 1148px;
    width: 100%;
    background-image: ${gradient.orange3};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const colors = [color.green3, color.red3, color.red3, color.yellow3, color.babyblue3, color.orange3];
const icons = ["corporation-state-information", "s-corp-tax-calculator-01", "entity-comparison-chart", "state-filling-fees", "ongoing-filling-requirements-02", "clock-691"];

const StartSection = ({ className, content }) => (
  <Start className={className}>
    <Oval className="oval" height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="700" text={content.text} bottomMargin="80" />
    <ContentCenter contentWidth="770">
      <Paragraph>{content.text2}</Paragraph>
      <Paragraph>{content.text3}</Paragraph>
    </ContentCenter>
    <CenterGrid columnsSM="1" columnsMD="2">
      {content.buttons.map((button, i) => (
        <BoxedButton content={button} icon={icons[i]} iconColor={colors[i]} />
      ))}
    </CenterGrid>
    <ContentCenter contentWidth="770">
      <Paragraph>{content.text4}</Paragraph>
      <Paragraph>{content.text5}</Paragraph>
    </ContentCenter>
  </Start>
);

export default StartSection;
