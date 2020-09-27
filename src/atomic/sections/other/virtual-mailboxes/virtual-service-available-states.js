import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-blue3-transparent.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-left-transparent-orange3-big.inline.svg";
import LeftContentRightObject from "../../../partials/left-content-right-object";

const AdvantagesSection = styled.section`
  position: relative;
  padding: 120px 0;
  background-color: ${color.blue3};
  overflow: hidden;
`;

const ServiceAvailableSection = ({ className, content }) => (
    // TODO: Add Amendment form to the object prop of LCRO
    <AdvantagesSection className={className}>
        <Oval className="oval" height="420" width="420" top="0" right="0">
            <OvalSVG />
        </Oval>
        <LeftContentRightObject contentWidth={1170}>
            <Heading size={2}>{content.header}</Heading>
            <Paragraph>{content.text}</Paragraph>
        </LeftContentRightObject>
    </AdvantagesSection>
);

export default ServiceAvailableSection;
