import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors"
import HeadingCenter from "../../../partials/heading-center";
import Cards from "../../../organisms/cards/change-registered-agent-cards"

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <HeadingCenter headline={content.header} headlineWidth="700" />
        <Cards content={content.cards} />
    </Faq>
);
  
export default FaqSection;