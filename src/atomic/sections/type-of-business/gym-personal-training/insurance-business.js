import React from "react";
import styled from "styled-components";
import InfoCardsSection from "../../../partials/info-cards-section";
import {InfoCards} from "../../../../static/type-of-business/gym-personal-training";
import {gradient} from "../../../atoms/styles/colors";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";

const InsuranceBusiness = () => (
    <Wrapper>
        <Oval>
            <OvalSvg />
        </Oval>
        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline="Insurance for Your Gym, Fitness or Personal Training Business"
                text="Most fitness businesses should have comprehensive business insurance. There are various types."
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
    bottom: 0;
    width: 100%;
    z-index: -1;
  
    @media (min-width: 420px) {
        width: 420px;
    }
`;

export default InsuranceBusiness;
