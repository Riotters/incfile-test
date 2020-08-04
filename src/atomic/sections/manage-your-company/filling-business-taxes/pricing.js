import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import PricingCards from "../../../organisms/cards/pricing-cards";

const Pricing = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &:before {
    content: '';
    height: 1900px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: ${gradient.green3};
  }
`;

const PricingSection = ({ className, content }) => (
    <Pricing className={className}>
        <HeadingCenter headline={content.header} />
        <ContentCenter>
          <PricingCards content={content.cards} />
        </ContentCenter>
    </Pricing>
  );
  
  export default PricingSection;