import React from "react";
import styled from "styled-components";
import Container from "../container";
import Accordion from "../organisms/accordion/benefits-accordion";
import ContentCenter from "../partials/content-center";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";

const Wrapper = styled.div`
  padding-top: 50px;
  position: relative;
  ${props => props.bgImage && `background-image: ${props.bgImage};`}

  @media (min-width: 769px) {
    padding-top: 105px;
  }

  .heading {
    h3,
    p {
      text-align: center;
    }
  }
`;

const Benefits = ({ bgImage }) => {
  return (
    <Wrapper bgImage={bgImage}>
      <Container>
        <ContentCenter className="heading">
          <Heading size="3">Providing everything you need when you need it</Heading>
          <Paragraph big bottomMargin="48" maxWidth="770">
            As your business grows we'll be there every step of the way to make sure that you have the resources at hand to service your companies ongoing needs.
          </Paragraph>
        </ContentCenter>
        <Accordion />
      </Container>
    </Wrapper>
  );
};

export default Benefits;
