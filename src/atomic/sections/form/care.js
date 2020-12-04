import React from "react";
import styled from "styled-components";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import LeftContentRightImage from "../../partials/left-content-right-image";
import parse from "html-react-parser";
import { color } from "../../atoms/styles/colors";
import CheckBlueSVG from "../../../images/circle-status-check.inline.svg";
import ContentCenter from "../../partials/content-center";
import QuoteCard from "../../organisms/cards/quote-card";

const Care = styled.section`
	position: relative;
	padding-top: 100px;

	p {
		span {
			font-weight: bold;
			color: ${color.grey1};
		}
	}

	.numericlist {
		display: grid;
		grid-template-columns: 100%;
		grid-gap: 24px 27px;
		list-style: none;

		@media (min-width: 1200px) {
			grid-template-columns: 296px 277px;
		}

		li {
			display: flex;
			align-items: center;
			min-height: 32px;
			position: relative;
			padding-left: 52px;
			font-family: Avenir, sans-serif;
			font-size: 16px;
			line-height: 24px;
			color: ${color.black};
			font-weight: bold;

			span {
				padding-top: 5px;
			}

			@media (min-width: 1200px) {
				align-items: flex-start;
			}

			svg {
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-gap: 30px;
	padding-top: 128px;
	padding-bottom: 64px;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const CareSection = ({ className, content }) => (
	<Care>
		<LeftContentRightImage
			image="after-formation-cta-7994"
			contentWidth="545"
			contentPadding="45"
		>
			<Heading size="2" bottomMargin="32">
				{parse(content.header)}
			</Heading>
			<Paragraph big mixed bottomMargin="48">
				{parse(content.text)}
			</Paragraph>
			<ul className="numericlist">
				{content.list.map((item) => (
					<li>
						<CheckBlueSVG />
						<span>{item}</span>
					</li>
				))}
			</ul>
		</LeftContentRightImage>
		<ContentCenter>
			<Grid>
				{content.cards.map((card) => (
					<QuoteCard content={card} />
				))}
			</Grid>
		</ContentCenter>
	</Care>
);

export default CareSection;