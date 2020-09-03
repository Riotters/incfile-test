import React from "react";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import {AccordionCounting} from "../../../../static/type-of-business/tshirt-business";
import Container from "../../../../atomic/container";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import styled from "styled-components";
import EtsyLinks from "../../../../atomic/sections/type-of-business/tshirt-business/links";
import Curve from "../../../atoms/shapes/curve";
import {color} from "../../../../components/styles/colors";

const HireEmployees = () => (
    <BlueContainer>
        <Container>
            <ContentCenter>
                <AbsoluteCurve>
                    <Curve color={color.blue1}/>
                </AbsoluteCurve>
                <TextCenterLayout headline="Hire T-shirt Employees"
                                  text="If you’re just running your T-shirt business solo, you don’t need to worry about employees. If you are hiring people to work for you, you will need to know what to do. See our 10 tips on hiring employees."/>
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
    background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

const AbsoluteCurve = styled.div`
    position: absolute;
    left: -27px;
    top: -16px;
    transform: rotate(-90deg);
`;

export default HireEmployees;
