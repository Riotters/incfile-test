import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import Form from "../../../organisms/forms/annual-report-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-orange1-to-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Search = styled.section`
  position: relative;
  padding: 108px 0;
  background-color: ${color.orange3};
`;

const SearchSection = ({ className, content }) => (
  <Search className={className}>
    <Oval className="oval" height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Oval className="oval" height="420" width="420" bottom="0" left="0">
      <Oval2SVG />
    </Oval>
    <ContentObject object={<Form content={content.form} />} contentWidth="500" contentCenter>
      <Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
        <Curve top="-85" left="-85" color={color.orange2}>
          <CurveSVG />
        </Curve>
        {content.header}
      </Heading>
      <Heading size="4">{content.header2}</Heading>
      <Paragraph big bottomMargin="0">
        {content.text}
      </Paragraph>
    </ContentObject>
  </Search>
);

export default SearchSection;
