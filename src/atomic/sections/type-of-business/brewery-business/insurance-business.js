import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/brewery-business";
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
    bottom: -175px;
    right: 0;
    z-index: -1;
    width: 100%;
    
  
    @media (min-width: 720px) {
        width: 720px;
    }
`;

export default InsuranceBusinessSection;
