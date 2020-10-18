import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import { Heading } from "../../../atoms/typography/heading";
import BenefitsSection from "../../other/incorporate/benefits-section";
import ContentCenter from "../../../partials/content-center";
import Button from "../../../molecules/buttons/button";

const Wrapper = styled.div`
  position: relative;

  .section-content {
    padding-top: 148px;
  }
`;

const IncludedInAll = ({ className, content }) => (
  <Wrapper>
    <ContentCenter contentWidth={1140} className="section-content">
      <Heading size={2} maxWidth={770} bottomMargin={104}>
        {content.header}
      </Heading>
      <BenefitsSection content={content.benefits} />
      <Button content={content.button} margin="56px 0 0 0" arrow theme="primary56" />
    </ContentCenter>
  </Wrapper>
);

export default IncludedInAll;
