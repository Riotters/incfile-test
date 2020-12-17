import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../../components/container";
import Adventages from "../../../../components/adventages";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { PHeading } from "../../../atoms/typography/p-to-heading";
import OvalSvg from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";
import { color, gradient } from "../../../atoms/styles/colors";
import Oval from "../../../atoms/icons/oval";

const IsItForYou = ({ content }) => (
	<Wrapper>
		<Oval height="570" width="570" top="40" right="0" zIndex="0">
			<OvalSvg />
		</Oval>
		<TextCenterLayout headline={content.header} headlineWidth={770} />

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
		<ContentCenter contentWidth={530}>
			<PHeading size={4} big mixed center>
				{parse(content.text)}
			</PHeading>
		</ContentCenter>
	</Wrapper>
);

const Wrapper = styled.section`
	padding-top: 120px;
	padding-bottom: 100px;
	position: relative;
	background-image: ${gradient.blue3};
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
