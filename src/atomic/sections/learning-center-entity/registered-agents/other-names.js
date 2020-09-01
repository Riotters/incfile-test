import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Circles from "../../../organisms/circles/other-names-circles";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const OtherTerms = styled.section`
  position: relative;
`;

const OtherTermsSection = ({ className, content }) => (
  <OtherTerms className={className}>
    <Oval className="oval" height="570" width="570" top="11" left="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter className="heading" headline={content.header} headlineWidth="570" text={content.text} textWidth="620" />
    <ContentCenter>
      <Circles content={content.circles} />
    </ContentCenter>
  </OtherTerms>
);

export default OtherTermsSection;
