import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentLeft from "../../../partials/content-left";
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

const colors = [color.orange3, color.red3, color.blue3, color.purple3, color.yellow3, color.babyblue3];
const icons = ["fictitious-business-name-7188", "tax-id", "trademark", "business-licence-search-4730", "certificate-of-good-standing-6366", "receive"];

const StartSection = ({ className, content }) => (
  <Start className={className}>
    <Oval className="oval" height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="700" text={content.text} bottomMargin="80" />
    <ContentLeft contentWidth="770">
      <Paragraph big>{content.text2}</Paragraph>
      <Paragraph big bottomMargin="80">
        {content.text3}
      </Paragraph>
    </ContentLeft>
    <CenterGrid columnsSM="1" columnsMD="2">
      {content.buttons.map((button, i) => (
        <BoxedButton key={i} content={button} icon={icons[i]} iconColor={colors[i]} />
      ))}
    </CenterGrid>
    <ContentLeft contentWidth="770">
      <Paragraph big topMargin="80">
        {content.text4}
      </Paragraph>
      <Paragraph big bottomMargin="0">
        {content.text5}
      </Paragraph>
    </ContentLeft>
  </Start>
);

export default StartSection;
