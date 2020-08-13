import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors"
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Adventages from "../../../organisms/cards/registered-agent-adventages"
import Cards from "../../../organisms/cards/registered-agent-cards";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-babyblue1.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-left-transparent-babyblue1.inline.svg";

const Offering = styled.section`
  position: relative;
  background-color: ${color.babyblue3};
  padding-top: 104px;
  padding-bottom: 112px;
`;

const OfferingSection = ({ className, content }) => (
    <Offering className={className}>
        <Oval height="720" width="720" top="0" right="0">
            <OvalSVG />
        </Oval>
        <Oval height="720" width="720" top="20" left="0">
            <Oval2SVG />
        </Oval>
        <HeadingCenter headline={content.header} headlineWidth="770" />
        <ContentCenter>
            <Adventages content={content.cards} />
        </ContentCenter>
        <HeadingCenter headline={content.header2} headlineWidth="640" text={content.text} textWidth="770" linkText={content.link.text} linkUrl={content.link.url} />
  </Offering>
  );
  
  export default OfferingSection;