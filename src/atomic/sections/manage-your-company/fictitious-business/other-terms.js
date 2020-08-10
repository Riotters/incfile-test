import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Circles from "../../../organisms/circles/other-terms-circles";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";

const OtherTerms = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const OtherTermsSection = ({ className, content }) => (
    <OtherTerms className={className}>
        <Oval className="oval" height="420" width="420" top="0" left="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="heading" headline={content.header} headlineWidth="570" />
        <ContentCenter>
            <Circles content={content.circles} />
            <Paragraph big bottomMargin="0" maxWidth="770">{content.text}</Paragraph>
        </ContentCenter>
    </OtherTerms>
  );
  
  export default OtherTermsSection;