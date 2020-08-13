import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Cards from "../../../organisms/cards/annual-report-cards"
import TopImageBox from "../../../molecules/mixed-blocks/top-image-box"
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { states } from "../../../../components/states"
import ContentObject from "../../../partials/left-content-right-object";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import Curve from "../../../atoms/icons/curve";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CurveSVG from "../../../../images/curves/top-left-bottom-right.inline.svg";

const Faq = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;
`;

const FaqSection = ({ className, content }) => (
    <Faq className={className}>
        <HeadingCenter headline={content.header} headlineWidth="700" />
        <Cards content={content.cards} />
    </Faq>
);
  
export default FaqSection;