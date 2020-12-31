import React from "react";
import styled from "styled-components";
import ImageContent from "../../../partials/left-image-right-content";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import HeadingCenter from "../../../partials/heading-center";
import NumericList from "../../../organisms/lists/numeric-boxed-list";

const SpecificRules = styled.section`
  position: relative;
  padding-bottom: 60px;
  
  @media (min-width: 992px) {
    padding-bottom: 120px;
  }
  overflow: hidden;

  p,
  ul {
    margin-bottom: 0;
  }
`;

const SpecificRulesSection = ({ className, content }) => (
  <SpecificRules className={className}>
    <Oval className="oval" height="720" width="720" bottom="0" left="0" y="10">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="770" text={content.text} />
    <ImageContent image="new-jersey-entity-search-6916" alt="free business name search" paddingTop="120">
      <NumericList content={content.list} bottomMargin="0" />
    </ImageContent>
  </SpecificRules>
);

export default SpecificRulesSection;
