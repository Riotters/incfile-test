import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InfoCardWithImage from "../organisms/cards/info-card-with-image";

const InfoCardsSection = ({cards}) => (
    <SectionWrapper>
        {cards.map((item, i) => (
            <InfoCardWithImage
                key={i}
                roundTopLeft={item.roundTopLeft}
                roundBottomLeft={item.roundBottomLeft}
                roundBottomRight={item.roundBottomRight}
                roundTopRight={item.roundTopRight}
                backgroundColor={item.backgroundColor}
                title={item.title}
                content={item.content}
                imageName={item.imageName}
            />
        ))}
    </SectionWrapper>
);

const SectionWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
        
    @media (min-width: 992px) {
        grid-template-columns: 300px 300px 300px;
        grid-gap: 30px;
        grid-auto-flow: column;
    }
    
    @media (min-width: 1200px) { 
        grid-template-columns: 370px 370px 370px;
    }
`;

InfoCardsSection.propTypes = {
    cards: PropTypes.array.isRequired
}

export default InfoCardsSection;
