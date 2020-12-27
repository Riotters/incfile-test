import React from "react";
import styled from "styled-components";
import { color } from "../../../atomic/atoms/styles/colors";
import Image from "../../../atomic/atoms/image/image_nobase64";
import Container from "../../container";
import OvalSVG from "../../../images/oval.inline.svg";

const switch1 = (ovalColor) => {
	switch (ovalColor) {
		case "blue": {
			return color.blue1;
		}
		case "orange": {
			return color.orange1;
		}
		case "purple": {
			return color.purple1;
		}
		case "yellow": {
			return color.yellow1;
		}
		case "green": {
			return color.green1;
		}
		case "sun": {
			return "#ffb059";
		}
		default:
			return "";
	}
};

const switch2 = (ovalColor) => {
	switch (ovalColor) {
		case "blue": {
			return color.babyblue2;
		}
		case "orange": {
			return color.orange2;
		}
		case "purple": {
			return color.purple2;
		}
		case "green": {
			return color.green2;
		}
		case "yellow": {
			return color.yellow2;
		}
		case "sun": {
			return "#ffe3c5";
		}
		default:
			return "";
	}
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	min-height: 100vh;
	max-height: 777px;
`;

const Oval = styled.div`
	width: 90%;
	max-height: 777px;
	max-width: 350px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;

	@media (min-width: 992px) {
		width: 50%;
		max-width: 850px;
	}

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}

	& > svg {
		position: absolute;
		right: 0;
		bottom: 0;

		defs {
			radialGradient {
				stop {
					&:nth-child(1) {
						stop-color: ${({ ovalColor }) => switch1(ovalColor)};
					}
					&:nth-child(2) {
						stop-color: ${({ ovalColor }) => switch2(ovalColor)};
					}
				}
			}
		}

		path {
			transform: matrix(1, 0, 0, -1, -115, 777);
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 150px;
	padding-bottom: 120px;

	@media (min-width: 992px) {
		width: 50%;
		align-items: flex-start;
	}

	h1 {
		width: 100%;
		text-align: center;
		padding-bottom: 40px;

		@media (min-width: 992px) {
			text-align: left;
			padding-bottom: 20px;
		}

		@media (min-width: 1200px) {
			max-width: ${(props) =>
				props.headlineWidth ? props.headlineWidth : "480"}px;
		}
	}

	p {
		margin-bottom: 33px;
		text-align: center;

		@media (min-width: 1200px) {
			text-align: left;
			max-width: ${(props) =>
				props.headlineWidth ? props.headlineWidth : "480"}px;
		}
	}
`;

const ImageContainer = styled.div`
	display: none;
	//width: 50%;
	//padding-left: 60px;
	width: 55%;
	max-width: 950px;
	position: absolute;
	top: 50%;
	right: 55%;
	transform: translate(100%, -50%);

	@media (min-width: 992px) {
		display: flex;
	}

	.gatsby-image-wrapper {
		width: 100%;
		//max-height: 500px;

		img {
			object-fit: contain !important;
		}
	}
`;

const Top = ({ children, imageName, imageAlt, headlineWidth, ovalColor }) => (
	<Wrapper>
		{/* <VisibilitySensor partialVisibility once>
			{({ isVisible }) => ( */}
		<Oval
			//className={isVisible ? "scaleUp enter" : "scaleUp"}
			ovalColor={ovalColor}
		>
			<OvalSVG />
		</Oval>
		{/* )}
		</VisibilitySensor> */}
		<ImageContainer>
			<Image filename={imageName} alt={imageAlt} />
		</ImageContainer>
		<Container>
			<Content>
				{/* <VisibilitySensor partialVisibility once>
					{({ isVisible }) => ( */}
				<TextContainer
					//className={isVisible ? "slideRight enter" : "slideRight"}
					headlineWidth={headlineWidth}
				>
					{children}
				</TextContainer>
				{/* )}
				</VisibilitySensor> */}
			</Content>
		</Container>
	</Wrapper>
);

export default Top;

Top.defaultProps = {
	OvalSVGFile: OvalSVG,
};
