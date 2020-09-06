import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/beauty-salon";
import Container from "../../../../atomic/container";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import Links from "./links";
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
            <ContentCenter>
                <TextCenterLayout headline="Hire Employees"
                                  text="If you’re just running your cleaning business solo, you don’t need to worry about employees. If you are hiring people to work for you, you will need to know what to do. See our 10 tips on hiring employees."/>
                <AccordionWithCounting content={AccordionCounting}/>
            </ContentCenter>
        </Container>

        <Container>
            <Links />
        </Container>
    </BlueContainer>
);

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
  bottom: 50px;
  transform: scaleX(-1);
  width: 570px;
  display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;

const BlueContainer = styled.div`
    padding-top: 100px;
    position: relative;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

export default HireEmployees;
