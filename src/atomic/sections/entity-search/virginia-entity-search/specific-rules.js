import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/biennal-report.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-pink.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import HeadingCenter from "../../../partials/heading-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";

const SpecificRules = styled.section`
  position: relative;
  padding-bottom: 120px;
  overflow: hidden;

  p,
  ul {
    margin-bottom: 0;
  }
`;

const SpecificRulesSection = ({ className, content }) => (
  <SpecificRules className={className}>
    <Oval className="oval" height="720" width="720" top="20" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} />
    <ImageContent image="new-jersey-entity-search-6916" paddingTop="120">
      <NumericList content={content.list} bottomMargin="0" />
    </ImageContent>
  </SpecificRules>
);

export default SpecificRulesSection;
