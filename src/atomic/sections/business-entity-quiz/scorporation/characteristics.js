import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../../components/container";
import Adventages from "../../../../components/adventages";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { color, gradient } from "../../../atoms/styles/colors";

const IsItForYou = ({ content }) => (
	<Wrapper>
		<TextCenterLayout headline={content.header} headlineWidth={770} />

		<Container>
			<AdventagesWrapper>
				{content.boxes.map((box) => (
					<Adventages
						disadventage={box.disadventage}
						circleBackgroundColor={box.circleBackgroundColor}
						text={box.text}
						width="100%"
					/>
				))}
			</AdventagesWrapper>
		</Container>
	</Wrapper>
);

const Wrapper = styled.section`
	padding-top: 120px;
	padding-bottom: 100px;
	position: relative;
`;

const AdventagesWrapper = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 0px;
	margin-top: 76px;
	margin-bottom: 76px;

	@media (min-width: 490px) {
		grid-template-columns: 1fr;
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	ul {
		list-style: none;

		li {
			span {
				display: block;
				margin-bottom: 8px;
				font-size: 20px;
				line-height: 28px;
				color: ${color.black};
				font-weight: bold;
			}

			&:not(:last-child) {
				margin-bottom: 32px;
			}
		}
	}
`;

const Oval = styled.div`
	position: absolute;
	top: 447px;
	left: 0;
	width: 100%;

	@media (min-width: 520px) {
		width: 520px;
	}
`;

export default IsItForYou;
