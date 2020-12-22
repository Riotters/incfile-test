import React from "react";
import styled from "styled-components";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../../components/container";
import Adventages from "../../../../components/adventages";
import { color, gradient } from "../../../atoms/styles/colors";

const IsItForYou = ({ content }) => (
	<Wrapper>
		<TextCenterLayout
			headline={content.header}
			text={content.text}
			headlineWidth={770}
			textWidth={770}
		/>

		<Container>
			<AdventagesWrapper>
				{content.boxes.map((box) => (
					<Adventages
						disadventage={box.disadventage}
						circleBackgroundColor={box.circleBackgroundColor}
						circleBackgroundShadow={box.circleBackgroundShadow}
						text={box.text}
						width="100%"
					/>
				))}
			</AdventagesWrapper>
		</Container>
	</Wrapper>
);

const Wrapper = styled.section`
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;

	&::before {
		content: "";
		height: 600px;
		width: 100%;
		background-image: ${gradient.blue3};
		position: absolute;
		top: 0;
		left: 0;
	}

	&::after {
		content: "";
		height: 600px;
		width: 100%;
		background-image: ${gradient.blue3reverse};
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

const AdventagesWrapper = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 0px;
	margin-top: 76px;

	@media (min-width: 490px) {
		grid-template-columns: 1fr;
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
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

export default IsItForYou;
