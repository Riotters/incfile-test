import React from "react";
import styled from "styled-components";
import InfoCardsSection from "../../../partials/info-cards-section";
import {InfoCards} from "../../../../static/type-of-business/daycare-business";
import {gradient} from "../../../atoms/styles/colors";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";

const InsuranceBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>

        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline="Insurance for Your Professional Coaching Organization"
                text="Most life or business coaching organizations should have comprehensive business insurance. There are various types."
            />
        </div>
        <InfoCardsSection cards={InfoCards}/>
    </Wrapper>
);

const Wrapper = styled.section`
    background: rgb(255,255,255);
    background: ${gradient.blue3};
    padding-top: 100px;
    position: relative;
    padding-bottom: 100px;
`;

const Oval = styled.div`
    position: absolute; 
    top: 0;
    right: 0;
    width: 420px;
    display: none;
    transform: rotate(-180deg);
    
    @media (min-width: 1200px){
       display: block;
    }
`;

export default InsuranceBusiness;
