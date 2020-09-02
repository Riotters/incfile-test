import React from "react";
import styled from "styled-components";
import InfoCardsSection from "../../../partials/info-cards-section";
import {InfoCards} from "../../../../static/type-of-business/bed-and-breakfast";
import {gradient} from "../../../atoms/styles/colors";
import TextCenterLayout from "../../../../components/partials/blocks/heading-center";

const InsuranceBusiness = () => (
    <Wrapper>
        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline="Insurance for Your Bed and Breakfast or Hotel Business"
                text="Most bed and breakfast businesses should have comprehensive business insurance. There are various types."
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

export default InsuranceBusiness;
