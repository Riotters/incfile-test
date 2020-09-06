import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/laundromat";
import Container from "../../../../atomic/container";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import EtsyLinks from "../../../../atomic/sections/type-of-business/laundromat/links";
import {Paragraph} from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const HireEmployees = () => (
    <BlueContainer>
        <Oval>
            <OvalSvg />
        </Oval>
        <Oval2>
            <OvalSvg />
        </Oval2>
        <Container>
            <ContentCenter contentWidth={770}>
                <TextCenterLayout headline="Hire Laundromat Employees" />
                <Paragraph big mixed={true}>
                    If you’re just running your laundromat business solo, you don’t need to worry about employees. If you are hiring people to work for you, you will need to know what to do. See our 10 tips on hiring employees.
                </Paragraph>

                <AccordionWithCounting content={AccordionCounting}/>
            </ContentCenter>
        </Container>

        <Container>
            <EtsyLinks />
        </Container>
    </BlueContainer>
);

const BlueContainer = styled.div`
    padding-top: 100px;
    position: relative;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 570px;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0;
    bottom: 52px;
    width: 570px;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;
export default HireEmployees;
