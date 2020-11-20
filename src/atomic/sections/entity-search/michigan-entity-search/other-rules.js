import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/biennal-report.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import HeadingCenter from "../../../partials/heading-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";

const OtherRules = styled.section`
  position: relative;
  padding-bottom: 60px;
  overflow: hidden;

  p,
  ul {
    margin-bottom: 0;
  }
  
  @media (min-width: 576px) {
    padding-bottom: 120px;
  }
`;

const OtherRulesSection = ({ className, content }) => (
  <OtherRules className={className}>
    <Oval className="oval" height="720" width="720" bottom="0" left="0" y="10">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} />
  </OtherRules>
);

export default OtherRulesSection;
