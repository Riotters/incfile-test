import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/daycare-business";
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
    
    @media (min-width: 420px){
       width: 420px;
    }
`;

export default InsuranceBusinessSection;
