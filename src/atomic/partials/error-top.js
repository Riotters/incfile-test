import React from "react";
import styled from "styled-components";
import { color } from "../atoms/styles/colors";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";
import VisibilitySensor from "../VisibilitySensor";
import Container from "../container";
import Image from "../atoms/image/image_nobase64";
import Button from "../molecules/buttons/button";
import Oval from "../atoms/icons/oval";
import OvalSVG from "../../images/ovals/top-right-transparent-blue.inline.svg";
import Oval2SVG from "../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import Curve from "../atoms/icons/curve";
import CurveSVG from "../../images/curves/bottom-left-top-right-big.inline.svg";

const switch1 = (ovalColor) => {
	switch (ovalColor) {
		case "blue": {
			return color.blue1;
		}
		case "orange": {
			return color.orange1;
		}
		case "purple": {
			return "#9168ff";
		}
		case "purple-2": {
			return "#d2aafb";
		}
		case "yellow": {
			return "#ffc95b";
		}
		case "green": {
			return "#97e0c7";
		}
		case "sun": {
			return "#ffb059";
		}
		case "sun-2": {
			return "#ffc95b";
		}
		case "blackpink": {
			return "#ffb8b8";
		}
		case "darkblue": {
			return "#7891fc";
		}
		case "lightpurple": {
			return "#d2aafb";
		}
		case "love": {
			return "#fdabab";
		}
		case "babyblue": {
			return "#71bef8";
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
			return "#dad2ff";
		}
		case "purple-2": {
			return "#ede0fa";
		}
		case "yellow": {
			return "#fff5d4";
		}
		case "green": {
			return "#d5f3e8";
		}
		case "sun": {
			return "#ffe3c5";
		}
		case "sun-2": {
			return "#fff5d4";
		}
		case "blackpink": {
			return "#ffdddd";
		}
		case "darkblue": {
			return "#ced7ff";
		}
		case "lightpurple": {
			return "#ede0fa";
		}
		case "love": {
			return "#f9e0e0";
		}
		case "babyblue": {
			return "#d2eeff";
		}
		default:
			return "";
	}
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding-top: 80px;
	background-image: ${(props) => (props.bgColor ? props.bgColor : "")};
	min-height: 100vh;

	@media (min-width: 992px) {
		flex-direction: row;
		padding-top: 0;
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

	@media (min-width: 992px) {
		width: ${(props) => (props.contentWidth ? props.contentWidth : "50")}%;
		align-items: flex-start;
	}

	h1 {
		width: 100%;
		text-align: center;
		padding-bottom: 40px;

		@media (min-width: 992px) {
			text-align: left;
			padding-bottom: 24px;
		}

		@media (min-width: 992px) {
			max-width: ${(props) =>
				props.headlineWidth ? props.headlineWidth : "480"}px;
		}
	}

	p {
		margin-bottom: 32px;
		text-align: center;

		@media (min-width: 992px) {
			text-align: left;
			max-width: ${(props) =>
				props.textWidth
					? props.textWidth
					: props.headlineWidth
					? props.headlineWidth
					: "480"}px;
		}
	}
`;

const ImageContainer = styled.div`
	display: flex;
	max-width: ${(props) =>
		props.imageWidth ? `${props.imageWidth}px` : "950px"};
	width: 100%;
	top: 50%;
	right: 55%;

	@media (min-width: 992px) {
		position: absolute;
		width: 55%;
		transform: translate(100%, -50%);
	}

	.gatsby-image-wrapper {
		width: 100%;

		img {
			object-fit: contain !important;
		}
	}
`;

const Top = ({
	content,
	imageName,
	imageAlt,
	imageWidth,
	contentWidth,
	headlineWidth,
	textWidth,
	ovalColor,
	...rest
}) => (
	<Wrapper {...rest}>
		{/* {({ isVisible }) => (
    <Oval className={isVisible ? "scaleUp enter" : "scaleUp"} ovalColor={ovalColor}>
        <OvalSVG />
    </Oval>
    )} */}
		<Oval height="720" width="720" top="50" right="0" y="-50">
			<OvalSVG />
		</Oval>
		<Oval height="420" width="420" bottom="0" left="0">
			<Oval2SVG />
		</Oval>
		<ImageContainer imageWidth={imageWidth}>
			<Image filename={imageName} alt={imageAlt} />
		</ImageContainer>
		<Container>
			<Content>
				{/* <VisibilitySensor partialVisibility once>
            {({ isVisible }) => ( */}
				<TextContainer
					//className={isVisible ? "slideRight enter" : "slideRight"}
					contentWidth={contentWidth}
					headlineWidth={headlineWidth}
					textWidth={textWidth}
				>
					<Curve top="-80" left="-100" color={color.blue2}>
						<CurveSVG />
					</Curve>
					<Heading size="1" bottomMargin="0">
						{content.header}
					</Heading>
					<Paragraph big bottomMargin="0">
						{content.text}
					</Paragraph>
					<Button content={content.button} theme="primary56" width="200px" />
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
