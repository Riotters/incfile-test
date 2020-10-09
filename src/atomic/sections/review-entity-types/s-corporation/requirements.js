import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentImage from "../../../partials/left-content-right-image";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
import Container from "../../../container";

const Requirements = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 112px;

  h2 {
    text-align: left;
  }
`;

const RequirementsSection = ({ className, content }) => (
  <Requirements className={className}>
    <Container>
      <Heading size="2">{content.header}</Heading>
      <Paragraph big maxWidth="700">
        {content.text}
      </Paragraph>
    </Container>
    <ContentImage image="clipboard-9010" contentPadding="0">
      <NumericList content={content.list} bottomMargin="0" />
    </ContentImage>
  </Requirements>
);

export default RequirementsSection;
