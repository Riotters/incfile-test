import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/bakery";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import InsuranceBusiness from "../../general/insurance-business";

const InsuranceBusinessSection = () => (
    <InsuranceBusiness title={InfoCards.title} description={InfoCards.description} InfoCards={InfoCards.items} bgColor="white">
        <Oval>
            <OvalSVG/>
        </Oval>
    </InsuranceBusiness>
);

const Oval = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0;
    width: 100%;
    
    @media (min-width: 420px){
        width: 420px;
    }
`;

export default InsuranceBusinessSection;
