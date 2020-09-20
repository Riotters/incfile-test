import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/coach";
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
    top: 0;
    right: 0;
    width: 100%;
    z-index: -1;
    
    @media (min-width: 570px){
        width: 570px;
    }
`;

export default InsuranceBusinessSection;
