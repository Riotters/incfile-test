import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import VariantsCards from "../../../organisms/cards/variants-cards.js";

const Variants = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  position: relative;
`;

const VariantsSection = ({ content }) => {
  return (
    <Variants>
      <HeadingCenter headline={content.header} headlineWidth="640" text={content.text} />
      <ContentCenter>
        <VariantsCards content={content.cards} />
      </ContentCenter>
    </Variants>
  );
};

export default VariantsSection;
