import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentLeft from "../../../partials/content-left";
import ObjectContent from "../../../partials/left-object-right-content";
import ColorBox from "../../../molecules/colored-blocks/color-box-with-top-icon";
import ArrowLink from "../../../molecules/buttons/text";
import ClockSVG from "../../../../images/icons/clock.inline.svg";
import TaxesSVG from "../../../../images/icons/taxes4.inline.svg";
import CalendarSVG from "../../../../images/icons/calendar.inline.svg";

const Requirements = styled.section`
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

const RequirementsSection = ({ className, content }) => (
  <Requirements className={className}>
    <ContentLeft>
      <Heading size="2" bottomMargin="160" maxWidth="500">
        {content.header}
      </Heading>
    </ContentLeft>
    <ObjectContent className="row row--1" headlineWidth="450" object={<ColorBox content={content.rows[0].box} color={color.green3} icon={<ClockSVG />} radius="50px 5px 5px 100px" curve curveLeft />} objectWidth="400" objectPadding="130" contentWidth="900">
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
    {/* <ObjectContent className="row row--2" headlineWidth="450" object={<ColorBox content={content.rows[1].box} color={color.orange3} icon={<TaxesSVG />} radius="5px 50px 100px 5px" curve curveRight />} objectWidth="400" objectPadding="130" contentWidth="900">
      <TextWrapper>
        <Heading size="3">{content.rows[1].content.header}</Heading>
        <Paragraph big>{content.rows[1].content.text}</Paragraph>
        <Paragraph big bottomMargin="0">
          {content.rows[1].content.text2}
        </Paragraph>
      </TextWrapper>
    </ObjectContent>
    <ObjectContent className="row row--3" headlineWidth="450" object={<ColorBox content={content.rows[2].box} color={color.purple3} icon={<CalendarSVG />} radius="50px 5px 5px 100px"  curve curveLeft />} objectWidth="400" objectPadding="130" contentWidth="900">
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
    </ObjectContent> */}
  </Requirements>
);

export default RequirementsSection;
