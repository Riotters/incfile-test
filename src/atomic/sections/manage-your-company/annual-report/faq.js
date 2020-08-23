import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import Cards from "../../../organisms/cards/annual-report-cards"

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
        <HeadingCenter headline={content.header} headlineWidth="700" />
        <Cards content={content.cards} paddingTop="80" paddingBottom="0"/>
    </Faq>
);
  
export default FaqSection;