import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/cleaning-business";
import Container from "../../../../atomic/container";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import Links from "./links";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Link} from "gatsby";

const HireEmployees = () => (
    <BlueContainer>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg />
        </Oval2>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout headlineWidth={770} headline="Hire Employees" />

            <Paragraph big mixed>
                If you are hiring people to work at your beauty salon, you will need to know what to do. See our <Link to="/">10 tips on hiring employees</Link>.
            </Paragraph>
        </ContentCenter>

        <ContentCenter>
            <AccordionWithCounting content={AccordionCounting}/>
        </ContentCenter>

        <Links />
    </BlueContainer>
);

const Oval = styled.div`
  position: absolute; 
  right: 0;
  top: 0;
  width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const Oval2 = styled.div`
  position: absolute; 
  left: 0;
  bottom: 50px;
  transform: scaleX(-1);
  width: 100%;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

const BlueContainer = styled.div`
    padding-top: 100px;
    position: relative;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

export default HireEmployees;
