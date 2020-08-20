import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import Cards from "../../../organisms/cards/change-registered-agent-cards"
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-top: 56px;
  padding-bottom: 48px;
  
  @media(min-width: 992px) {
    padding-top: 104px;
  }
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <Oval height="570" width="570" top="10" right="0">
            <OvalSVG />
        </Oval>
        <Oval height="720" width="720" bottom="3" left="0">
            <Oval2SVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="700" />
        <Cards content={content.cards} paddingTop="80" paddingBottom="0" />
    </Faq>
);
  
export default FaqSection;