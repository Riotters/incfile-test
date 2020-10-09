import React from "react";
import styled from "styled-components";
import InfoCardsSection from "../../../partials/info-cards-section";
import {InfoCards} from "../../../../static/type-of-business/event-planning";
import {gradient} from "../../../atoms/styles/colors";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";

const InsuranceBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline="Insurance for Your Party or Event Planning Business"
                text="Most planning businesses should have comprehensive business insurance. There are various types."
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
    right: 0;
    top: 176px;
    width: 100%;
    z-index: -1;
    
    @media (min-width: 720px){
        width: 720px; 
    }
`;

export default InsuranceBusiness;
