import React from "react";
import styled from "styled-components";
import {InfoCards} from "../../../../static/type-of-business/food-truck-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import InsuranceBusiness from "../../general/insurance-business";

const InsuranceBusinessSection = () => (
    <InsuranceBusiness title={InfoCards.title} description={InfoCards.description} InfoCards={InfoCards.items}>
        <Oval>
            <OvalSvg/>
        </Oval>
        <Oval2>
            <OvalSvg/>
        </Oval2>
    </InsuranceBusiness>
);

const Oval = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 100%;
    z-index: -1;
  
  @media (min-width: 720px){
    width: 720px;
  }
`;

const Oval2 = styled.div`
    position: absolute;
    left: 0px;
    bottom: -350px;
    width: 100%;
    transform: rotate(180deg);
    z-index: -1;
  
      @media (min-width: 720px){
        width: 720px;
      }
`;

export default InsuranceBusinessSection;
