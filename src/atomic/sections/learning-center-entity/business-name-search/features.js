import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentObject from "../../../partials/left-content-right-object";
import ObjectContent from "../../../partials/left-object-right-content";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const Features = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .headline {
    margin-bottom: 80px;
  }
`;

const FeaturesSection = ({ className, content }) => (
  <Features className={className}>
    <Oval className="oval" height="720" width="720" top="0" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter headline={content.header} headlineWidth="640" />
    <ContentObject>
      <Heading size="3" bottomMargin="0">
        {content.header2}
      </Heading>
    </ContentObject>
    <ObjectContent>
      <Heading size="3" bottomMargin="0">
        {content.header3}
      </Heading>
    </ObjectContent>
    <ContentObject>
      <Heading size="3" bottomMargin="0">
        {content.header4}
      </Heading>
    </ContentObject>
    <ObjectContent>
      <Heading size="3" bottomMargin="0">
        {content.header5}
      </Heading>
    </ObjectContent>
    <ContentObject>
      <Heading size="3" bottomMargin="0">
        {content.header6}
      </Heading>
    </ContentObject>
  </Features>
);

export default FeaturesSection;
