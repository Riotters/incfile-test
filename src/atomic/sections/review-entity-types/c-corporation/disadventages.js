import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/disadventage-card";

const Disadventages = styled.section`
  position: relative;
  padding-top: 104px;

  h2 {
    text-align: left;
  }
`;

const DisadventagesSection = ({ className, content }) => (
  <Disadventages className={className}>
    <Container>
      <Heading size="2">{content.header}</Heading>
      <Paragraph big>{content.text}</Paragraph>
    </Container>
    <ContentCenter>
      <Cards content={content.cards} paragraphHeading />
    </ContentCenter>
  </Disadventages>
);

export default DisadventagesSection;
