import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/event-planning";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import InsuranceBusiness from "../../general/insurance-business";

const InsuranceBusinessSection = () => (
    <InsuranceBusiness title={InfoCards.title} description={InfoCards.description} InfoCards={InfoCards.items}>
        <Oval>
            <OvalSVG/>
        </Oval>
    </InsuranceBusiness>
);

const Oval = styled.div`
    position: absolute;
    right: 0;
    top: 176px;
    width: 100%;
    z-index: -1;
    
    @media (min-width: 720px){
        width: 720px; 
    }
`;

export default InsuranceBusinessSection;
