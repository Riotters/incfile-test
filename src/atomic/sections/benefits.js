import React from "react";
import styled from "styled-components";
import Accordion from "../organisms/accordion/benefits-accordion";
import ContentCenter from "../partials/content-center";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";

const Wrapper = styled.div`
  padding-top: 48px;
  position: relative;
  ${(props) => props.bgImage && `background-image: ${props.bgImage};`}

  @media (min-width: 769px) {
    padding-top: 96px;
  }
`;

const Benefits = ({ bgImage, page }) => {
  return (
    <Wrapper bgImage={bgImage}>
      <ContentCenter>
        <Heading size="2" template={3} style={{ textAlign: "center" }}>
          Providing Everything You Need When You Need It
        </Heading>
        <Paragraph
          big
          bottomMargin="48"
          maxWidth="770"
          style={{ textAlign: "center" }}
        >
          As your business grows we'll be there every step of the way to make
          sure that you have the resources at hand to service your companies
          ongoing needs.
        </Paragraph>
        <Accordion page={page} />
      </ContentCenter>
    </Wrapper>
  );
};

export default Benefits;
