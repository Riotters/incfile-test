import React from "react";
import styled from "styled-components";
import Container from "../container";
import TextCenterLayout from "../partials/heading-center";
import Accordion from "../organisms/accordion/benefits-accordion";
import ContentCenter from "../partials/content-center";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";

const Wrapper = styled.div`
  padding-top: 50px;
  position: relative;

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

const Benefits = () => {
  return (
    <Wrapper>
      <Container>
        <ContentCenter className="heading">
          <Heading size="3">Providing everything you need when you need it</Heading>
          <Paragraph big bottomMargin="48" maxWidth="770">
            We are here to help you every step of the way. We provide lifetime company alerts to make sure that you never miss an important due date and can assist with protecting your good standing by filing any mandatory reports with the state.
          </Paragraph>
        </ContentCenter>
        <Accordion />
      </Container>
    </Wrapper>
  );
};

export default Benefits;
