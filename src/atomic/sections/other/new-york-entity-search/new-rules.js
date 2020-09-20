import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/entity-search-adventages";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange3.inline.svg";

const Adventages = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 112px;
`;

const AdventagesSection = ({ className, content }) => (
  <Adventages className={className}>
    <Oval height="720" width="720" top="0" right="0">
      <OvalSVG />
    </Oval>
    <Container>
      <Heading size="2">{content.header}</Heading>
      <Paragraph big>{content.text}</Paragraph>
    </Container>
    <ContentCenter>
      <Cards content={content.cards} />
    </ContentCenter>
  </Adventages>
);

export default AdventagesSection;
