import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import TextCheck from "../../molecules/text-blocks/text-check";
import Button from "../buttons/button";
import HelpMarkSVG from "../../../images/icons/help-mark.inline.svg";
import Image from "../../atoms/image/image_nobase64";

import SaveFlagSVG from "../../../images/icons/flag-backdrop.inline.svg";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 470px;
	padding: 40px;
	position: relative;
	border: ${(props) => (props.border ? `solid 1px ${color.grey4}` : "")};
	background-color: ${(props) => (props.color ? props.color : "")};
	border-radius: 5px;

	& > h4,
	& > p {
		text-align: center;
	}

	& > p {
		max-width: 210px;
		color: ${color.grey1};
	}

	ul {
		width: 100%;
		list-style: none;

		li {
			font-family: Engram, sans-serif;
			font-size: 16px;
			line-height: 24px;
			color: ${color.grey1};

			&:not(:last-child) {
				margin-bottom: 8px;
			}
		}
	}
`;

const Box = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${color.white};
	border: 2px solid ${color.blue1};
	border-radius: 5px;
	padding: 12px 16px;
	margin-bottom: 8px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);

	span {
		font-family: Engram-Bold, sans-serif;
		font-weight: 900;
		font-size: 12px;
		line-height: 12px;
		color: ${color.blue1};
		text-transform: uppercase;
	}
`;

const ImageWrapper = styled.div`
	height: 120px;
	width: 120px;
	margin-bottom: 8px;
`;

const Price = styled.span`
	font-family: Engram-Bold, sans-serif;
	font-size: 40px;
	line-height: 48px;
	color: ${color.black};
	margin-bottom: 0;
`;

const Package = styled(Whitebox)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 32px;
	margin-bottom: 24px;

	span {
		font-family: Engram, sans-serif;
		font-size: 12px;
		line-height: 1;
		font-weight: 900;
		color: ${color.grey1};
		text-transform: uppercase;
		letter-spacing: 1px;
	}
`;

const Fee = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	& > div {
		display: flex;
		align-items: center;
	}

	.help-mark {
		display: flex;
		align-items: center;
		margin-right: 24px;
		cursor: pointer;
	}

	.text,
	.price {
		font-family: Engram, sans-serif;
		font-size: 16px;
		line-height: 24px;
	}

	.text {
		color: ${color.grey1};
	}

	.price {
		${color.black};
	}
`;

const SaveWrapper = styled.div`
	top: 0;
	right: 65px;
	position: absolute;

	svg {
		position: absolute;
		top: 0;
		left: -5px;
		z-index: 0;
	}

	p {
		position: absolute;
		top: 8px;
		left: 7px;
		line-height: 10px;
		font-size: 10px;
		text-align: center;
		color: ${color.white};
	}
`;

const PricingCard = ({ className, content, image, fullInfo, ...rest }) => (
	<Wrapper className={className} {...rest}>
		{content.variant && (
			<Box>
				<span>{content.variant}</span>
			</Box>
		)}
		{content.savings && (
			<SaveWrapper>
				<div style={{ position: "relative" }}>
					<SaveFlagSVG />
					<Paragraph>{content.savings}</Paragraph>
				</div>
			</SaveWrapper>
		)}
		<Heading size={3} template={4} center marginBottom="16">
			{content.header}
		</Heading>
		<Paragraph bottomMargin="8">{content.text}</Paragraph>
		<ImageWrapper>
			<Image filename={image} alt="select package" />
		</ImageWrapper>
		<Price>${content.price}</Price>
		<Paragraph>One time payment</Paragraph>
		<Button
			theme="primary48"
			content={content.button}
			margin="0 0 32px 0"
			arrow
		/>
		<ul style={{ marginBottom: "48px" }}>
			{content.fees.map((fee, i) => (
				<li key={i}>
					<Fee>
						<div>
							<span className="help-mark">
								<HelpMarkSVG />
							</span>
							<span className="text">{fee.text}</span>
						</div>
						<span className="price">${fee.price}</span>
					</Fee>
				</li>
			))}
		</ul>
		{fullInfo === true && content.include && (
			<Package>
				<span>{content.include}</span>
			</Package>
		)}
		<ul className="list">
			{fullInfo === true &&
				content.list &&
				content.list.map((item, i) => (
					<li key={i}>
						<TextCheck>{item}</TextCheck>
					</li>
				))}
		</ul>
		{content.fee && <Paragraph bottomMargin="6">{content.fee}</Paragraph>}
	</Wrapper>
);

export default PricingCard;
