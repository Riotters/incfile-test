import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/landscaping-business";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import EtsyLinks from "../../../../atomic/sections/type-of-business/landscaping-business/links";

const HireEmployees = () => (
    <BlueContainer>
        <ContentCenter contentWidth={770}>
            <TextCenterLayout headlineWidth={770} textWidth={770} headline="Hire Landscape Employees"
                              text="If you’re just running your landscaping business solo, you don’t need to worry about employees. If you are hiring people to work for you, you will need to know what to do. See our 10 tips on hiring employees."/>
            <AccordionWithCounting content={AccordionCounting}/>
        </ContentCenter>

        <EtsyLinks/>
    </BlueContainer>
);

const BlueContainer = styled.div`
    padding-top: 100px;
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

export default HireEmployees;
