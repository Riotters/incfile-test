import React from "react";
import styled from "styled-components";
import parser from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentCenter from "../../../partials/content-center";
import Cards from "../../../organisms/cards/registered-agent-cards";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-green3.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Offering = styled.section`
  position: relative;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (min-width: 769px) {
    padding-top: 104px;
    padding-bottom: 120px;
  }

  h2,
  p {
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
    <ContentCenter contentWidth="770" relative>
      <Curve top="-15" right="175" color={color.purple1}>
        <CurveSVG />
      </Curve>
      <Heading size="2" bottomMargin="80">
        {content.header}
      </Heading>
      <Paragraph big mixed>
        {parser(content.text)}
      </Paragraph>
      {/* <Heading size="3" maxWidth="770" bottomMargin="40">{content.header2}</Heading>
            <Cards content={content.cards} /> */}
      <Paragraph big mixed>
        {parser(content.text2)}
      </Paragraph>
      <Paragraph big bottomMargin="0" mixed>
        {parser(content.text3)}
      </Paragraph>
    </ContentCenter>
  </Offering>
);

export default OfferingSection;
