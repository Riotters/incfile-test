import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {HiringAccordionContent} from "../../../../static/type-of-business/tshirt-business";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const HireEmployees = () => (
    <BlueContainer>
        <Oval>
            <OvalSvg/>
        </Oval>

        <ContentCenter contentWidth={770}>
            <TextCenterLayout headline="Hire Employees for Your T-Shirt Business"
                              text="If you’re just running your T-shirt business solo, you don’t need to worry about employees. If you are hiring people to work for you, you will need to know what to do. See our 10 tips on hiring employees."/>
            <AccordionWithCounting content={HiringAccordionContent}/>
        </ContentCenter>

    </BlueContainer>
);

const BlueContainer = styled.div`
    padding-top: 100px;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
    position: relative;
`;

const Oval = styled.div`
    width: 570px;
    right: 0;
    top: 0px;
    position: absolute;
    display: none;
    
    @media (min-width: 1200px){
        display: block;
    }
`;
export default HireEmployees;
