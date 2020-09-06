import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/beauty-salon";
import Container from "../../../../atomic/container";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const HireEmployees = () => (
    <BlueContainer>
        <Oval>
            <OvalSvg />
        </Oval>
        <Container>
            <ContentCenter>
                <TextCenterLayout headline="Hire Employees"
                                  text="If you are hiring people to work at your beauty salon, you will need to know what to do. See our 10 tips on hiring employees."/>
                <AccordionWithCounting content={AccordionCounting}/>
            </ContentCenter>
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
      
      @media (min-width: 720px){
        display: block;
      }
`;
export default HireEmployees;
