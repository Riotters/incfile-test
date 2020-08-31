import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import Form from "../../../organisms/forms/annual-report-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-orange1-to-transparent.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const NextState = styled.section`
  position: relative;
  padding: 108px 0;
  background-color: ${color.orange3};
`;


const NextStateSection = ({ className, content }) => {
    const CheckDueDate = <Form content={content.form} />

    return (
        <NextState className={className}>
            <Oval className="oval" height="720" width="720" top="0" right="0">
                <OvalSVG />
            </Oval>
            <Oval className="oval" height="420" width="420" bottom="0" left="0">
                <Oval2SVG />
            </Oval>
            <ContentObject object={CheckDueDate} contentWidth="500">
                <Heading size="2" bottomMargin="48">{content.header}</Heading>
                <Heading size="4">{content.header2}</Heading>
                <Paragraph big bottomMargin="32">{content.text}</Paragraph>
            </ContentObject>
        </NextState>
    )
  };
  
  export default NextStateSection;