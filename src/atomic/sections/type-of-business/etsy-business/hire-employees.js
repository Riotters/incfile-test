import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/etsy-business";
import Container from "../../../../atomic/container";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import EtsyLinks from "../../../../atomic/sections/type-of-business/etsy-business/links";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import {Paragraph} from "../../../atoms/typography/paragraph";
import {Link} from "gatsby";

const HireEmployees = () => (
    <BlueContainer>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>
        <Container>
            <ContentCenter contentWidth={770}>
                <div>
                    <TextCenterLayout headline="Hire Employees for Your Etsy Business" headlineWidth={770}/>

                    <Paragraph big mixed={true}>
                        If you’re just running your Etsy business solo, you don’t need to worry about employees. If you
                        are hiring people to work for you, you will need to know what to do. See <Link to="/">our 10
                        tips on hiring employees.</Link>
                    </Paragraph>
                </div>
                <AccordionWithCounting content={AccordionCounting}/>
            </ContentCenter>
        </Container>

        <Container>
            <EtsyLinks/>
        </Container>
    </BlueContainer>
);

const BlueContainer = styled.div`
    padding-top: 100px;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
    position: relative;
`;

const Oval = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 570px;
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0px;
    bottom: 50px;
    width: 570px;
    transform: scaleX(-1);
    display: none;
    
    @media (min-width: 720px){
        display: block; 
    }
`;

export default HireEmployees;
