import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InfoCardWithImage from "../organisms/cards/info-card-with-image";

const InfoCardsSection = ({cards}) => (
    <SectionWrapper>
        {cards.map(item => (
            <InfoCardWithImage
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
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
        
    @media (min-width: 1170px) {
        width: 1170px;
    }
`;

InfoCardsSection.propTypes = {
    cards: PropTypes.array.isRequired
}

export default InfoCardsSection;
