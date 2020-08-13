import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/registered-agent-cards";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-green3.inline.svg";

const Offering = styled.section`
  position: relative;
  padding-top: 100px;
  padding-bottom: 120px;

  h2, p {
      text-align: left;
  }

  h3 {
    text-align: center;
  }

  p {
       width: 100%;
  }
`;

const OfferingSection = ({ className, content }) => (
    <Offering className={className}>
        <Oval height="570" width="570" top="10" right="0">
            <OvalSVG />
        </Oval>
        <ContentCenter>
            <Heading size="2" maxWidth="770" bottomMargin="80">{content.header}</Heading>
            <Paragraph big maxWidth="770" bottomMargin="104">{content.text}</Paragraph>
            <Heading size="3" maxWidth="770" bottomMargin="40">{content.header2}</Heading>
            <Cards content={content.cards} />
            <Paragraph big maxWidth="770">{content.text2}</Paragraph>
            <Paragraph big maxWidth="770">{content.text3}</Paragraph>
        </ContentCenter>
  </Offering>
  );
  
  export default OfferingSection;