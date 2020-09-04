import React from "react";
import styled from "styled-components";
import InfoCardsSection from "../../../partials/info-cards-section";
import {InfoCards} from "../../../../static/type-of-business/airbnb";
import {gradient} from "../../../atoms/styles/colors";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";
import OvalSVG from "../../../../images/ovals/top-right-transparent-blue.inline.svg";

const InsuranceAirBnb = () => (
    <Wrapper>
        <Oval>
            <OvalSVG/>
        </Oval>
        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline="Insurance for Your Airbnb Business"
                text="Most Airbnb businesses should have comprehensive business insurance. There are various types."
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
`;

const Oval = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  width: 570px;
  z-index: -1;
  
  @media (min-width: 720px){
    display: block;
  }
`

export default InsuranceAirBnb;
