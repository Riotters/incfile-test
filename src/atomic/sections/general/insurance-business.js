import React from "react";
import TextCenterLayout from "../../../components/partials/blocks/heading-center";
import InfoCardsSection from "../../partials/info-cards-section";
import styled from "styled-components";
import {gradient} from "../../atoms/styles/colors";

const InsuranceBusiness = ({children, title, description, InfoCards}) => (
    <Wrapper>
        {children}
        <div style={{paddingBottom: "100px"}}>
            <TextCenterLayout
                headline={title}
                text={description}
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

export default InsuranceBusiness;
