import React from "react";
import Image from "../../atoms/image/image";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.boxColor ? props.boxColor : color.orange3};
	height: ${(props) => (props.boxSize ? `${props.boxSize}px` : `88px`)};
	width: ${(props) => (props.boxSize ? `${props.boxSize}px` : `88px`)};
	min-height: ${(props) => (props.boxSize ? `${props.boxSize}px` : `88px`)};
	min-width: ${(props) => (props.boxSize ? `${props.boxSize}px` : `88px`)};
	max-height: ${(props) => (props.boxSize ? `${props.boxSize}px` : `88px`)};
	max-width: ${(props) => (props.boxSize ? `${props.boxSize}px` : `88px`)};
	border-radius: 15px;
	padding: 12px;

	.gatsby-image-wrapper {
		width: 100%;
	}
`;

const ImageInColoredBox = ({ boxColor, boxSize, image }) => (
	<Wrapper boxColor={boxColor} boxSize={boxSize}>
		<Image filename={image} />
	</Wrapper>
);

export default ImageInColoredBox;
