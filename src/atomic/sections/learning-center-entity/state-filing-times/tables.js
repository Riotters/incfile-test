import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Accordion from "../../../organisms/tabs/state-filing-times-tabs";
import Heading from "../../../partials/heading-center";

const Wrapper = styled.div`
  padding-top: 50px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 105px;
  }
`;

const Tables = ({ content, stateFilingTimes }) => {
  return (
    <Wrapper>
      <Container>
        <Accordion content={stateFilingTimes} />
        <Heading headline={content.header} linkText={content.link.text} linkUrl={content.link.url} />
      </Container>
    </Wrapper>
  );
};

export default Tables;
