import React from "react";
import TextCenterLayout from "../../../components/partials/blocks/heading-center";
import InfoCardsSection from "../../partials/info-cards-section";
import styled from "styled-components";
import {gradient} from "../../atoms/styles/colors";
import Container from "../../container";

const InsuranceBusiness = ({children, title, description, InfoCards, bgColor}) => (
    <Wrapper bgColor={bgColor}>
        {children}
        <Container>
            <div style={{paddingBottom: "100px"}}>
                <TextCenterLayout
                    headline={title}
                    text={description}
                />
            </div>
            <InfoCardsSection cards={InfoCards}/>
        </Container>
    </Wrapper>
);

const Wrapper = styled.section` 
    background: ${props => props.bgColor};
    padding-top: 100px;
    position: relative;
`;

InsuranceBusiness.defaultProps = {
    bgColor: gradient.blue3
}

export default InsuranceBusiness;
