import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/benefits";

const Benefits = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const BenefitsSection = ({ className, content }) => (
    <Benefits className={className}>
        <HeadingCenter headline={content.header} />
        <ContentCenter>
          <Cards content={content.cards} />
        </ContentCenter>
    </Benefits>
  );
  
  export default BenefitsSection;