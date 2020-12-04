import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Whitebox from "../../atoms/boxes/white-box";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import { Paragraph } from "../../atoms/typography/paragraph";
import { Heading } from "../../atoms/typography/heading";
import Image from "../../atoms/image/image";
import Button from "../../molecules/buttons/additional";

const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	max-width: 920px;
	margin: 0 auto;

	.slide__item {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 570px;
		padding: 48px;
		margin: 0 auto;
		position: relative;

		&::before {
			content: "";
			width: 1px;
			height: 50px;
			box-shadow: ${shadow.white1};
			position: absolute;
			left: 0;
			bottom: -50px;
		}

		&::after {
			content: "";
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 50px 50px 0 0;
			border-color: ${color.white} transparent transparent transparent;
			position: absolute;
			left: 0;
			bottom: -50px;
		}

		@media screen and (max-width: 768px) {
			p {
				font-size: 16px;
			}
		}
	}
`;

const CarouselWrapper = styled.div`
	margin: 0 -15px;
	overflow: hidden;
	padding-top: 32px;
	width: 100%;

	@media screen and (min-width: 850px) {
		max-width: 920px;
	}

	.custom-left-arrow,
	.custom-right-arrow {
		display: none;
		position: absolute;
		border: none;
		cursor: pointer;

		@media (min-width: 769px) {
			display: flex;
		}
	}

	.custom-left-arrow {
		left: calc(4% + 1px);
	}

	.custom-right-arrow {
		right: calc(4% + 1px);
		transform: scale(-1);
	}

	.react-multi-carousel-list {
		overflow: visible;

		.react-multi-carousel-item {
			//opacity: 0;
			pointer-events: none;
			transition: opacity 0.3s ease;

			&--active {
				opacity: 1;
				pointer-events: auto;

				a {
					box-shadow: 0 20px 30px 0 #e6e6e6;
				}
			}
		}
	}

	.react-multi-carousel-dot-list {
		position: relative;
		z-index: 1;
		margin-top: 48px;

		.react-multi-carousel-dot {
			button {
				width: 8px;
				height: 8px;
				background-color: #fce7d0;
				border: none;
				border-radius: 4px;
				transition: width 0.3s ease;
			}

			&--active {
				button {
					width: 16px;
					background-color: #fd8550;
				}
			}
		}
	}
`;

const Name = styled.span`
	font-family: Avenir;
	font-weight: 900;
	font-size: 20px;
	line-height: 1.2;
	color: ${color.black};
	margin-bottom: 4px;
`;

const State = styled.span`
	font-family: MarkPro, sans-serif;
	font-size: 12px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: 1px;
	color: ${color.grey2};
	margin-bottom: 32px;
`;

const ImageWrapper = styled.div`
	height: 64px;
	width: 64px;
	position: absolute;
	top: -32px;
	left: 48px;
	border-radius: 50%;
	overflow: hidden;
	background-color: ${color.orange3};
`;

const responsive = {
	all: {
		breakpoint: { max: 9999, min: 1 },
		items: 1,
		slidesToSlide: 1,
	},
};

const CustomLeftArrow = ({ onClick }) => (
	<Button className="custom-left-arrow" onClick={() => onClick()} />
);

const CustomRightArrow = ({ onClick }) => (
	<Button className="custom-right-arrow" onClick={() => onClick()} />
);

const SlideReviews = ({ content }) => (
	<Wrapper>
		<CarouselWrapper>
			<Carousel
				responsive={responsive}
				arrows={true}
				customLeftArrow={<CustomLeftArrow />}
				customRightArrow={<CustomRightArrow />}
				showDots
				renderDotsOutside
			>
				{content.map((item) => (
					<Whitebox className="slide__item" flex>
						<ImageWrapper>
							<Image filename={item.photo} />
						</ImageWrapper>
						<Name>{item.name}</Name>
						<State>{item.city}</State>
						<Paragraph big bottomMargin="0">
							{item.text}
						</Paragraph>
					</Whitebox>
				))}
			</Carousel>
		</CarouselWrapper>
	</Wrapper>
);

export default SlideReviews;
