import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/dog-walking";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const InsuranceBusiness = () => (
    <InsuranceBusiness title={InfoCards.title} description={InfoCards.description} InfoCards={InfoCards.items}>
        <Oval>
            <OvalSVG/>
        </Oval>
    </InsuranceBusiness>
);

const Oval = styled.div`
    position: absolute; 
    right: 0;
    bottom: 55px;
    z-index: -1;
    width: 100%;
    
    @media (min-width: 720px){
        width: 720px;
    }
`;

export default InsuranceBusiness;
