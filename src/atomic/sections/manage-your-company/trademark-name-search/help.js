import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import Card from "../../../../components/certificate-card";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-right-transparent-blue2.inline.svg";
import CheckBlueSVG from "../../../../images/circle-status-check-blue.inline.svg";

const Help = styled.section`
	position: relative;
	padding-top: 50px;
	padding-bottom: 70px;

	@media (min-width: 576px) {
		padding-top: 100px;
		padding-bottom: 144px;
	}

	&::before {
		content: "";
		height: 2225px;
		width: 100%;
		background-image: ${gradient.blue3};
		position: absolute;
		top: 0;
		left: 0;
	}

	.numericlist {
		display: grid;
		grid-template-columns: 100%;
		grid-gap: 30px;
		list-style: none;
		margin-top: 40px;

		@media (min-width: 1200px) {
			grid-template-columns: repeat(2, 270px);
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
			color: ${color.grey2};

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

const TextWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const HelpSection = ({ className, content }) => (
	<Help className={className}>
		<Oval className="oval" height="136" width="136" top="0" left="0">
			<OvalSVG />
		</Oval>
		<Oval className="oval" height="570" width="570" y="20" bottom="0" right="0">
			<Oval2SVG />
		</Oval>
		<ContentObject
			className="help"
			headlineWidth="450"
			object={
				<Card
					className="card"
					content={content.card}
					orderPage="/trademark.php"
					headline="Register a Trademark"
					extraFeeText="+ Federal Filing Fee"
				/>
			}
		>
			<TextWrapper>
				<Heading size="2" bottomMargin="56" maxWidth="460">
					{content.header}
				</Heading>
				<Heading size="3" template={4}>{content.header2}</Heading>
				<Paragraph big bottomMargin="0">
					{content.text}
				</Paragraph>
				<ul className="numericlist">
					{content.list.map((item) => (
						<li>
							<CheckBlueSVG />
							{item}
						</li>
					))}
				</ul>
			</TextWrapper>
		</ContentObject>
	</Help>
);

export default HelpSection;
