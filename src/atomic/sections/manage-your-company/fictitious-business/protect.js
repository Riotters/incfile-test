import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import Diagram from "../../../organisms/diagrams/fictitious-diagram";
import ContentImage from "../../../partials/left-content-right-image";
import Link from "../../../molecules/buttons/text";

const Protect = styled.section`
    position: relative;
    padding-top: 75px;
    padding-bottom: 64px;
    background-color: ${color.orange3};
`;

const ProtectSection = ({ className, content }) => (
    <Protect className={className}>
        <ContentImage image="protecting-your-business-name" contentWidth="770">
            <Heading size="2" bottomMargin="56">{content.header}</Heading>
            <Paragraph big bottomMargin="24">{content.text}</Paragraph>
            <Paragraph big bottomMargin="56">{content.text2}</Paragraph>
            <Link content={content.link} />
        </ContentImage>
    </Protect>
  );
  
  export default ProtectSection;