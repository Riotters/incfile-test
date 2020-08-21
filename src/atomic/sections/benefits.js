import React from "react";
import styled from "styled-components";
import Container from "../container";
import TextCenterLayout from "../partials/heading-center";
import Accordion from "../organisms/accordion/benefits-accordion"

const Wrapper = styled.div`
  padding-top: 50px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 105px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 56px;
  padding-top: 76px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <TextCenterLayout
            headline="Providing everything you need when you need it"
            text="As your business grows we'll be there every step of the way to make sure that you
                have the resources at hand to serve your companies ongoing needs."
            headlineWidth="700"
        />
        <Accordion/>
      </Container>
    </Wrapper>
  );
};

export default Benefits;
