import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Circles from "../../../organisms/circles/tax-rates-circles";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange3.inline.svg";

const TaxRates = styled.section`
  position: relative;
  padding-top: 62px;
  
  @media (min-width: 576px) {
    padding-top: 124px;
  }
`;

const TaxRatesSection = ({ className, content }) => (
  <TaxRates className={className}>
    <Oval className="oval" height="720" width="720" top="2" right="0">
      <OvalSVG />
    </Oval>
    <HeadingCenter className="heading" headline={content.header} headlineWidth="770" text={content.text} textWidth="770" />
    <ContentCenter>
      <Circles content={content.circles} />
    </ContentCenter>
  </TaxRates>
);

export default TaxRatesSection;
