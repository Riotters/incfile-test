import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import LightBoxVideo from "../../../../components/LightBox";
import PlusCircleOrangeSVG from "../../../../images/icons/plus-circle-orange.inline.svg";
import EqualCircleOrangeSVG from "../../../../images/icons/equal-circle-orange.inline.svg";
import Image from "../../../atoms/image/image";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import SCorpQuizTable from "../../../organisms/tables/scorp-quiz-table";

const ContainerWrapper = styled.section`
	background: rgb(255, 255, 255);
	background-image: ${gradient.orange3};
	padding-bottom: 100px;
	position: relative;
	padding-top: 120px;
`;

const TitleBox = styled.div`
	width: 100%;
	position: relative;
	max-width: 750px;

	@media (min-width: 750px) {
		margin: 0 auto;
	}

	p {
		text-align: center;
	}
`;

const OvalCenter = styled.div`
	position: absolute;
	right: 0;
	top: 40%;
	transform: rotate(180deg);
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const Boxes = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 100%;
	padding-top: 40px;

	@media (min-width: 576px) {
		padding-top: 72px;
	}

	@media (min-width: 769px) {
		flex-direction: row;
	}

	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: ${color.white};
		box-shadow: ${shadow.white1};
		padding: 40px 24px;

		@media (min-width: 400px) {
			padding: 40px 48px;
		}

		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 140px;
			width: 140px;
			margin-bottom: 16px;

			.gatsby-image-wrapper {
				height: 100%;
				width: 100%;

				img {
					object-fit: contain !important;
				}
			}
		}

		h3,
		h4 {
			margin-bottom: 8px;
			text-align: center;
		}

		p {
			font-size: 16px;
			line-height: 24px;
			color: ${color.grey1};
			text-align: center;
		}
	}

	.circle {
		align-self: center;
		height: 30px;
		width: 100%;
		max-width: 30px;
		position: relative;

		& > span {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 96px;
			width: 96px;
			background-color: ${color.white};
			box-shadow: inset ${shadow.white1};
			box-shadow: inset 0 0 32px 0 rgba(236, 236, 236, 0.4);
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			@media (min-width: 769px) {
				background-image: linear-gradient(0deg, #f7f9fc 0%, #f6f8fc 100%);
			}
		}
	}
`;

const SCorpVsCCorpSection = ({ content }) => (
	<ContainerWrapper>
		<OvalCenter>
			<OvalSvg />
		</OvalCenter>

		<ContentCenter>
			<TitleBox>
				<Heading size={2}>{content.header}</Heading>
				<Paragraph big>{content.text}</Paragraph>
			</TitleBox>
			<SCorpQuizTable content={content.table} />
		</ContentCenter>
	</ContainerWrapper>
);

export default SCorpVsCCorpSection;
