import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
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

const Requirements = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

    &::before {
        content: '';
        height: 2032px;
        width: 100%;
        background-image: ${gradient.blue3};
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const dropdownOneOptions = [
    'LCC', 'Corporation', 'Nonprofit'
];
  
const dropdownTwoOptions = states.state.map(state => (state.name));

const RequirementsSection = ({ className, content }) => (
    <Requirements className={className}>
        <Oval className="oval" height="136" width="136" top="0" left="0">
            <OvalSVG />
        </Oval>
        <Oval className="oval" height="570" width="570" y="20" bottom="0" right="0">
            <Oval2SVG />
        </Oval>
        <ContentObject className="help" headlineWidth="450" 
            object={<Card className="card" content={content.card} headline="Dissolution" price="149" dropdownOnePlaceholder="Select Entity Type" dropdownOneOptions={dropdownOneOptions} dropdownTwoPlaceholder="Select State" dropdownTwoOptions={dropdownTwoOptions} />}
        >
            <TextWrapper>
                <Curve top="-15" right="160" color={color.blue1}>
                    <CurveSVG />
                </Curve>
                <Heading size="2" bottomMargin="56" maxWidth="460">{content.header}</Heading>
                <Heading size="4">{content.header2}</Heading>
                <Paragraph big bottomMargin="0">{content.text}</Paragraph>
            </TextWrapper>
        </ContentObject>
    </Requirements>
);
  
export default RequirementsSection;