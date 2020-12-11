import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Colorbox from "../../atoms/boxes/color-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color } from "../../atoms/styles/colors";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";
import ArrowLink from "../buttons/text";
import {PHeading} from "../../atoms/typography/p-to-heading";

const dotColor = (circleColor) => {
	switch (circleColor) {
		case color.blue3: {
			return color.blue1;
		}
		case color.orange3: {
			return color.orange1;
		}
		case color.green3: {
			return color.green1;
		}
		case color.purple3: {
			return color.purple1;
		}
		case color.babyblue3: {
			return color.babyblue1;
		}
		case color.yellow3: {
			return color.yellow1;
		}
		default:
			return "";
	}
};

const Wrapper = styled.div`
	position: relative;
	margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};

	.box {
		padding: 40px;
		border-radius: ${(props) => (props.rounded ? "5px 50px 50px 5px" : "")};

		@media (min-width: 576px) {
			padding: 40px 40px 40px 112px;
		}

		.icon-wrapper svg {
			display: none;
			position: absolute;
			top: 40px;
			left: 40px;

			@media (min-width: 576px) {
				display: block;
			}
		}
	}

	p:not([class*="i-believe-i-can-be-a-h"]) {
		color: ${color.grey1} !important;

		span {
			display: block;
			width: 100%;
			color: ${color.black};
			font-weight: bold;
			margin-bottom: 16px;
		}
	}
`;

const ChooseHeading = ({ paragraphHeader, headingSize, headingSizeTemplate, content, ...rest }) => (
	<>
		{paragraphHeader && (
			<PHeading size={headingSizeTemplate} template={headingSizeTemplate} {...rest}>{parse(content)}</PHeading>
		)}
		{!paragraphHeader && (
			<Heading size={headingSize} template={headingSizeTemplate} {...rest}>
				{parse(content)}
			</Heading>
		)}
	</>
);

const IconTextColorBox = ({
	className,
	Icon,
	color,
	content,
	bottomMargin,
	linkBottomMargin,
	headingSize = 4,
	headingSizeTemplate = 4,
	paragraphHeader = false,
	left,
	rounded,
	curve,
	curveColor,
}) => {
	return (
		<Wrapper
			className={className}
			rounded={rounded}
			bottomMargin={bottomMargin}
		>
			{curve && (
				<Curve
					top="-15"
					right="-15"
					color={curveColor ? curveColor : dotColor(color)}
				>
					<CurveSVG />
				</Curve>
			)}
			<Colorbox className="box" color={color}>
				<div className="icon-wrapper">
					<Icon />
				</div>
				{content.header ? (
					<ChooseHeading headingSizeTemplate={headingSizeTemplate} headingSize={headingSize} paragraphHeader={paragraphHeader} content={content.header} left />
				) : null}
				{content.text && (
					<Paragraph mixed bottomMargin="0">
						{parse(content.text)}
					</Paragraph>
				)}
				{content.link && (
					<ArrowLink
						className="more-info-link"
						content={content.link}
						topMargin={8}
						bottomMargin={linkBottomMargin}
					/>
				)}
			</Colorbox>
		</Wrapper>
	);
};

export default IconTextColorBox;
