import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  .headline {
      margin-bottom: 80px;
  }
  
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <HeadingCenter headline={content.header} headlineWidth="640" />
        <ContentCenter>
            <Accordion content={content.faq} />
        </ContentCenter>
  </Faq>
  );
  
  export default FaqSection;