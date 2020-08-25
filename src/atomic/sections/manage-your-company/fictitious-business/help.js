import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import Button from "../../../molecules/buttons/button";
import ContentCenter from "../../../partials/content-center";
import { gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green3.inline.svg";

const Help = styled.section`
  position: relative;
  padding-top: 75px;
  padding-bottom: 64px;

  &::before {
    content: '';
    height: 1186px;
    width: 100%;
    background-image: ${gradient.green3};
    position: absolute;
    top: 0;
    left: 0;
  }

  .headline {
    margin-bottom: 32px;
    
    @media (min-width: 992px) {
        margin-bottom: 80px;
    }
  }
  
`;

const HelpSection = ({ className, content }) => (
    <Help className={className}>
        <Oval className="oval" height="420" width="420" top="0" right="0">
            <OvalSVG />
        </Oval>
        <HeadingCenter className="headline" headline={content.header} headlineWidth="770" />
        <ContentCenter>
            <Heading size="3" style={{textAlign: "center"}}>{content.header2}</Heading>
            <Paragraph big maxWidth="770" bottomMargin="48" style={{textAlign: "center"}}>{content.text}</Paragraph>
            <Button content={content.button} theme="primary56" arrow />
        </ContentCenter>
    </Help>
  );
  
  export default HelpSection;