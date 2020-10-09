import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/gym-personal-training";
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
    bottom: 0;
    width: 100%;
    z-index: -1;
  
    @media (min-width: 420px) {
        width: 420px;
    }
`;

export default InsuranceBusinessSection;
