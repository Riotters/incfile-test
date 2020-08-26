import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Accordion from "../../../organisms/accordion/benefits-accordion";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-pink.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-babyblue2.inline.svg";

const Wrapper = styled.div`
  padding-top: 104px;
  position: relative;

  @media (min-width: 769px) {
    padding-top: 48px;
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
      <Oval className="oval" height="720" width="720" top="0" left="0">
        <OvalSVG />
      </Oval>
      <Oval className="oval" height="570" width="570" top="25" right="0">
        <Oval2SVG />
      </Oval>
      <ContentCenter className="heading">
        <Heading size="3">Providing everything you need when you need it</Heading>
        <Paragraph big bottomMargin="48" maxWidth="770">
          We are here to help you every step of the way. We provide lifetime company alerts to make sure that you never miss an important due date and can assist with protecting your good standing by filing any mandatory reports with the state.
        </Paragraph>
      </ContentCenter>
      <Container>
        <Accordion />
      </Container>
    </Wrapper>
  );
};

export default Benefits;
