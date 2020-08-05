import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import PricingCards from "../../../organisms/cards/pricing-cards";

const Pricing = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
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