import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import LightBoxVideo from "../../../../components/LightBox";
import PlusCircleOrangeSVG from "../../../../images/icons/plus-circle-orange.inline.svg";
import EqualCircleOrangeSVG from "../../../../images/icons/equal-circle-orange.inline.svg";
import Image from "../../../atoms/image/image";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import Oval from "../../../atoms/icons/oval";

const ContainerWrapper = styled.section`
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;
`;

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: relative;

	p {
		text-align: center;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 72px 30px;
	width: 100%;
`;

const Iconbox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	.gatsby-image-wrapper {
		height: 124px;
		width: 124px;
		margin-bottom: 32px;
	}

	span {
		font-family: Engram-Bold;
		font-size: 16px;
		font-weight: bold;
		color: ${color.black};
	}
`;

const WhatIsSCorp = ({ content }) => (
	<ContainerWrapper>
		<Oval height="420" width="420" top="40" left="0" zIndex="0">
			<OvalSvg />
		</Oval>
		<Oval height="570" width="570" top="0" right="0" zIndex="0">
			<OvalSvg2 />
		</Oval>
		<ContentCenter contentWidth="770">
			<TitleBox>
				<Heading size={2} bottomMargin={32} maxWidth="700">
					{content.header}
				</Heading>
				<Paragraph big mixed>
					{parse(content.text)}
				</Paragraph>
				<Paragraph big mixed bottomMargin={104}>
					{parse(content.text2)}
				</Paragraph>
				<Grid>
					{content.icons.map((icon) => (
						<Iconbox>
							<Image filename={icon.image} />
							<span>{icon.text}</span>
						</Iconbox>
					))}
				</Grid>
			</TitleBox>
		</ContentCenter>
	</ContainerWrapper>
);

export default WhatIsSCorp;
