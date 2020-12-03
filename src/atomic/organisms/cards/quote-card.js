import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import IconCircle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import QuoteSVG from "../../../images/icons/quote-icon.inline.svg";
import Whitebox from "../../atoms/boxes/white-box";
import parse from "html-react-parser";

const Wrapper = styled.div`
	width: 100%;
	max-width: 470px;
	padding-top: 24px;

	.box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-ites: center;
		height: 100%;
		width: 100%;
		max-width: 570px;
		padding: 64px 40px 32px;
		border-radius: 20px;
		position: relative;
		margin: 0 auto;

		p {
			text-align: center;
		}

		& > div {
			display: flex;
			flex-direction: column;
			padding-top: 24px;
		}
	}
`;

const Circle = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
	width: 64px;
	border-radius: 50%;
	background-color: ${color.blue1};
	box-shadow: ${shadow.blue1};
	position: absolute;
	top: -30px;
	left: calc(50% - 32px);

	${(props) =>
		props.position && props.position === "center" && "left: calc(50% - 24px);"}

	span {
		font-family: Avenir, sans-serif;
		font-weight: 900;
		color: white;
		font-size: 16px;
		line-height: 24px;
	}

	svg {
		height: 20px;
		width: 24px;
		z-index: 1;
	}
`;

const Author = styled.span`
	font-family: Avenir;
	font-size: 20px;
	font-weight: 900;
	color: ${color.black};
	text-align: center;
`;

const State = styled.span`
	font-family: MarkPro;
	font-size: 12px;
	font-weight: bold;
	color: ${color.grey2};
	text-align: center;
	text-transform: uppercase;
`;

const QuoteCard = ({
	className,
	content,
	colorStroke,
	circlePosition,
	style,
}) => {
	return (
		<Wrapper className={className} style={style}>
			<Whitebox className="box">
				<Circle position={circlePosition} colorStroke={colorStroke}>
					<QuoteSVG />
				</Circle>
				<Paragraph big mixed bottomMargin="0">
					{parse(content.text)}
				</Paragraph>
				<div>
					<Author>{parse(content.author)}</Author>
					<State>{parse(content.state)}</State>
				</div>
			</Whitebox>
		</Wrapper>
	);
};

const ImageWrapper = styled.div`
	width: 150px;
	margin: 0 auto 30px;
`;

QuoteCard.defaultProps = {
	colorStroke: color.white,
	circleBackgroundColor: color.green1,
	circleBackgroundShadow: shadow.green1,
	width: "470px",
};

export default QuoteCard;
