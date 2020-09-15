import React from "react";
import styled from "styled-components";
import InfoCardColorBgHeader from "../../molecules/image-blocks/info-card-color-bg-header";
import PropTypes from "prop-types";
import {color} from "../../atoms/styles/colors";
import InfoCardContent from "../../molecules/image-blocks/info-card-content";

const InfoCardWithImage = ({roundTopLeft, roundTopRight, roundBottomLeft, roundBottomRight, backgroundColor, imageName, title, content}) => (
    <CardWrapper roundTopLeft={roundTopLeft} roundTopRight={roundTopRight} roundBottomLeft={roundBottomLeft} roundBottomRight={roundBottomRight}>
        <InfoCardColorBgHeader backgroundColor={backgroundColor} imageName={imageName} />
        <InfoCardContent title={title} content={content} />
    </CardWrapper>
);

const CardWrapper = styled.div`
    box-shadow: 0 24px 32px rgba(236, 236, 236, 0.5);
    margin: 0 15px 30px;
    overflow: hidden;
    background-color: white;
    width: 100%;
    
    @media (min-width: 992px) { 
        margin: 0 auto 30px;
        width: 300px;
    }
    
    @media (min-width: 1200px) { 
        margin: 0 15px 30px;
        width: 370px;
        min-height: 708px;
    }
    
    @media (min-width: 1024px) {
        ${props => props.roundTopLeft && 
            "border-top-left-radius: 40px;"
        }
        
        ${props => props.roundTopRight &&
        "border-top-right-radius: 40px;"
        }
        
        ${props => props.roundBottomLeft &&
            "border-bottom-left-radius: 40px;"
        }
        
        ${props => props.roundBottomRight &&
            "border-bottom-right-radius: 40px;"
        }
    }
`;

InfoCardWithImage.propTypes = {
    roundTopLeft: PropTypes.bool,
    roundTopRight: PropTypes.bool,
    roundBottomLeft: PropTypes.bool,
    roundBottomRight: PropTypes.bool,
    backgroundColor: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string
}

InfoCardWithImage.defaultProps = {
    roundTopLeft: false,
    roundTopRight: false,
    roundBottomLeft: false,
    roundBottomRight: false,
    backgroundColor: color.babyblue3,
    imageName: "workers-compensation-insurance",
    title: "Sample Title",
    content: "Sample Content"
}

export default InfoCardWithImage;
