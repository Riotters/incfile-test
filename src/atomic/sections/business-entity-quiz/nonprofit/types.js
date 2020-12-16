import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import TextCenterLayout from "../../../partials/heading-center";
import Container from "../../../../components/container";
import Adventages from "../../../../components/adventages";
import ContentCenter from "../../../partials/content-center";
import TextBlockWithImage from "../../../molecules/mixed-blocks/text-block-with-absolute-image";
import IdentifyIcon from "../../../../images/icons/identify-your-unique-selling-point.inline.svg";
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
		<TextCenterLayout
			headline={content.header}
			text={content.text}
			headlineWidth={770}
			textWidth={770}
		/>

		<Container>
			<TypesWrapper>
				{content.boxes.map((box) => (
					// <Adventages
					// 	disadventage={box.disadventage}
					// 	circleBackgroundColor={box.circleBackgroundColor}
					// 	circleBackgroundShadow={box.circleBackgroundShadow}
					// 	text={box.text}
					// 	width="100%"
					// />
					<TextBlockWithImage
						width={100}
						widthUnit="%"
						className="containerMargin"
						SvgImage={IdentifyIcon}
						imageBackgroundColor={color.white}
						imageShadowColor={color.white1}
					>
						<Heading size={3} template={4}>
							{box.header}
						</Heading>
						<Paragraph bottomPadding={0} bottomMargin={0}>
							{box.text}
						</Paragraph>
					</TextBlockWithImage>
				))}
			</TypesWrapper>
		</Container>
		<ContentCenter contentWidth={630}>
			<Paragraph big mixed center>
				{parse(content.text2)}
			</Paragraph>
		</ContentCenter>
	</Wrapper>
);

const Wrapper = styled.section`
	padding-top: 120px;
	padding-bottom: 100px;
	position: relative;
	background-image: ${gradient.blue3};
`;

const TypesWrapper = styled.div`
	display: grid;
	grid-gap: 70px 30px;
	grid-template-columns: 100%;
	justify-content: center;
	width: 100%;
	max-width: 970px;
	margin: 76px auto;

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
