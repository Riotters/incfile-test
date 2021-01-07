import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-pink2.inline.svg";
import TextCheck from "../../../molecules/text-blocks/text-check";
import ContentLeft from "../../../partials/content-left";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/registered-agent-disadventage-cards";

const WhatHappens = styled.section`
  position: relative;
  padding-top: 104px;
  padding-bottom: 104px;

  h2 {
    text-align: left;
  }

  .list {
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 80px;
    grid-row-gap: 24px;
    list-style: none;
    margin-bottom: 32px;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 286px);
    }

    li {
      display: flex;
      align-items: center;
      min-height: 32px;
      position: relative;
      font-family: Avenir, sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: ${color.grey2};

      @media (min-width: 1200px) {
        align-items: flex-start;
      }

      svg {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

const WhatHappensSection = ({ className, content }) => (
  <WhatHappens className={className}>
    <Oval className="oval" height="420" width="420" top="0" right="0">
      <OvalSVG />
    </Oval>
    <ContentLeft>
      <Heading size="2" maxWidth="770">
        {content.header}
      </Heading>
      <Paragraph big maxWidth="770" bottomMargin="0">
        {content.text}
      </Paragraph>
    </ContentLeft>
    <ContentCenter>
      <Cards content={content.cards} />
    </ContentCenter>
  </WhatHappens>
);

export default WhatHappensSection;
