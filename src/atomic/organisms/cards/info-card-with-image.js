import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InfoCardColorBgHeader from "../../molecules/image-blocks/info-card-color-bg-header";
import { color } from "../../atoms/styles/colors";
import InfoCardContent from "../../molecules/image-blocks/info-card-content";

const InfoCardWithImage = ({
	roundTopLeft,
	roundTopRight,
	roundBottomLeft,
	roundBottomRight,
	backgroundColor,
    imageName,
    imageAlt,
	title,
	content,
	headerSize,
	headerTemplate,
}) => (
	<CardWrapper
		roundTopLeft={roundTopLeft}
		roundTopRight={roundTopRight}
		roundBottomLeft={roundBottomLeft}
		roundBottomRight={roundBottomRight}
	>
		<InfoCardColorBgHeader
			backgroundColor={backgroundColor}
            imageName={imageName}
            imageAlt={imageAlt ?? title}
		/>
		<InfoCardContent
			title={title}
			content={content}
			headerSize={headerSize}
			headerTemplate={headerTemplate}
		/>
	</CardWrapper>
);

const CardWrapper = styled.div`
    box-shadow: 0 24px 32px rgba(236, 236, 236, 0.5);
    margin-bottom: 30px;
    overflow: hidden;
    background-color: white;
    width: 100%;
    justify-self: center;
    
    @media (min-width: 1024px) {
        ${(props) => props.roundTopLeft && "border-top-left-radius: 40px;"}
        
        ${(props) => props.roundTopRight && "border-top-right-radius: 40px;"}
        
        ${(props) =>
					props.roundBottomLeft && "border-bottom-left-radius: 40px;"}
        
        ${(props) =>
					props.roundBottomRight && "border-bottom-right-radius: 40px;"}
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
	content: PropTypes.string,
};

InfoCardWithImage.defaultProps = {
	roundTopLeft: false,
	roundTopRight: false,
	roundBottomLeft: false,
	roundBottomRight: false,
	backgroundColor: color.babyblue3,
	imageName: "workers-compensation-insurance",
	title: "Sample Title",
	content: "Sample Content",
};

export default InfoCardWithImage;
