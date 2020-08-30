import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ObjectContent from "../../../partials/left-object-right-content";
import ColorBox from "../../../molecules/colored-blocks/color-box-with-top-icon";
import ArrowLink from "../../../molecules/buttons/text";
import AlarmSVG from "../../../../images/icons/agent-for-service-of-process.inline.svg";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Requirments = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .row {
    &--1,
    &--2 {
      padding-bottom: 120px;
    }
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

const RequirmentsSection = ({ className, content }) => (
  <Requirments className={className}>
    <Oval className="oval" height="136" width="136" top="0" left="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="570" width="570" y="20" bottom="0" right="0">
      <Oval2SVG />
    </Oval>
    <ObjectContent className="row row--1" headlineWidth="450" object={<ColorBox content={content.rows[0].box} color={color.green3} icon={<AlarmSVG />} radius="50px 5px 5px 100px" />} objectWidth="400" objectPadding="130" contentWidth="900">
      <Grid>
        <TextWrapper>
          <Heading size="3">{content.rows[0].content.columns[0].header}</Heading>
          <Paragraph big>{content.rows[0].content.columns[0].text}</Paragraph>
          <Paragraph big bottomMargin="24">
            {content.rows[0].content.columns[0].text2}
          </Paragraph>
          <ArrowLink content={content.rows[0].content.columns[0].link} bottomMargin="16" />
          <ArrowLink content={content.rows[0].content.columns[0].link2} bottomMargin="0" />
        </TextWrapper>
        <TextWrapper>
          <Heading size="3">{content.rows[0].content.columns[1].header}</Heading>
          <Paragraph big>{content.rows[0].content.columns[1].text}</Paragraph>
          <Paragraph big bottomMargin="24">
            {content.rows[0].content.columns[1].text2}
          </Paragraph>
          <ArrowLink content={content.rows[0].content.columns[1].link} bottomMargin="0" />
        </TextWrapper>
      </Grid>
    </ObjectContent>
    <ObjectContent className="row row--2" headlineWidth="450" object={<ColorBox content={content.rows[1].box} color={color.orange3} icon={<AlarmSVG />} radius="5px 50px 100px 5px" />} objectWidth="400" objectPadding="130" contentWidth="900">
      <TextWrapper>
        <Heading size="3">{content.rows[1].content.header}</Heading>
        <Paragraph big>{content.rows[1].content.text}</Paragraph>
        <Paragraph big bottomMargin="0">
          {content.rows[1].content.text2}
        </Paragraph>
      </TextWrapper>
    </ObjectContent>
    <ObjectContent className="row row--3" headlineWidth="450" object={<ColorBox content={content.rows[2].box} color={color.purple3} icon={<AlarmSVG />} radius="50px 5px 5px 100px" />} objectWidth="400" objectPadding="130" contentWidth="900">
      <TextWrapper>
        <Heading size="3" bottomMargin="32">
          {content.rows[2].content.header}
        </Heading>
        <Heading size="4" bottomMargin="16">
          {content.rows[2].content.header2}
        </Heading>
        <Paragraph big bottomMargin="56">
          {content.rows[2].content.text}
        </Paragraph>
        <Heading size="4" bottomMargin="16">
          {content.rows[2].content.header3}
        </Heading>
        <Paragraph big bottomMargin="0">
          {content.rows[2].content.text2}
        </Paragraph>
      </TextWrapper>
    </ObjectContent>
  </Requirments>
);

export default RequirmentsSection;
