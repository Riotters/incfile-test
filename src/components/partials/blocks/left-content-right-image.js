import React from "react";
import styled from "styled-components";
import Image from "../../../atomic/atoms/image/image_nobase64";

const Wrapper = styled.div`
	display: flex;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 769px) {
		width: 60%;
		padding-right: 100px;
	}

	h2,
	p {
		max-width: ${(props) => (props.textWidth ? props.textWidth : "")}px;
	}

	h2 {
		text-align: left;
		padding-bottom: 40px;
	}

	p {
		padding-bottom: 40px;
	}
`;

const Imagebox = styled.div`
	display: none;
	align-items: center;
	width: 100%;
	max-width: ${(props) => (props.imageWidth ? props.imageWidth : "")}px;

	@media (min-width: 769px) {
		display: flex;
	}

	.gatsby-image-wrapper {
		width: 100%;
	}
`;

const LeftContentRightImage = ({ children, image, imageAlt, imageWidth, textWidth }) => {
	return (
		<Wrapper>
			<Content textWidth={textWidth}>{children}</Content>
			<Imagebox imageWidth={imageWidth}>
				<Image filename={image} alt={imageAlt ?? 'start your business'} />
			</Imagebox>
		</Wrapper>
	);
};

export default LeftContentRightImage;
