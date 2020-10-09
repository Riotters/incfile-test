import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import Form from "../../../organisms/forms/entity-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-babyblue1.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Search = styled.section`
  position: relative;
  padding: 108px 0;
  background-color: ${color.babyblue3};
  overflow: hidden;
`;

const SearchSection = ({ className, content }) => (
  <Search className={className}>
    <Oval className="oval" height="570" width="570" bottom="0" right="0">
      <OvalSVG />
    </Oval>
    <ContentObject object={<Form content={content.form} curveColor={color.blue2} />} contentWidth="500" contentCenter>
      <Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
        <Curve top="-85" left="-85" color={color.babyblue1}>
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
