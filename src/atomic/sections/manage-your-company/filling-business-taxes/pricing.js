import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import PricingCards from "../../../organisms/cards/pricing-cards";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green3.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Pricing = styled.section`
  position: relative;
  padding-top: 164px;
`;

const PricingSection = ({ className, content }) => (
    <Pricing className={className}>
        <Oval className="oval" height="570" width="570" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter headline={content.header} />
        <ContentCenter>
          <PricingCards content={content.cards} />
          <Paragraph big bottomMargin="0">
            {content.text}
          </Paragraph>
        </ContentCenter>
    </Pricing>
  );
  
  export default PricingSection;