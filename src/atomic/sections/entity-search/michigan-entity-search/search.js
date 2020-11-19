import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import BusinessNameSearchForm from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-orange-transparent.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";

const Search = styled.section`
  position: relative;
  padding: 60px 0;
  background-color: ${color.orange3};
  overflow: hidden;
  
  @media (min-width: 576px) {
      padding: 108px 0;
  }
`;

const SearchSection = ({ className, content, id }) => (
    <Search className={className} id={id}>
        <Oval className="oval" height="420" width="420" top="0" right="0">
            <OvalSVG />
        </Oval>
        <ContentObject object={<BusinessNameSearchForm propState="Michigan" curveColor={color.yellow1} curvePosition="bottomRight" curveRotate="90" />} contentWidth="500" contentCenter>
            <Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
                <Curve top="-85" left="-85" color={color.yellow1}>
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
