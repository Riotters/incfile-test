import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import IconCircle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import Image from "../../atoms/image/image";
import Whitebox from "../../atoms/boxes/white-box";
import parse from "html-react-parser";

const Wrapper = styled.div`
	width: 100%;
	padding-top: 24px;

	.box {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		max-width: 570px;
		padding: 48px 40px 40px;
		border-radius: 20px;
		position: relative;
		margin: 0 auto;
	}
`;

const Circle = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	width: 48px;
	border-radius: 50%;
	background-color: ${(props) => props.circleBackgroundColor};
	box-shadow: ${(props) => props.circleBackgroundShadow};
	position: absolute;
	top: -24px;
	left: 40px;

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
		width: 20px;
		fill: none;
		stroke: ${(props) => props.colorStroke};
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-dasharray: 18;
		stroke-dashoffset: 0;
		transform: translate3d(0, 0, 0);
		z-index: 1;
	}
`;

const AdeventageLink = styled(Link)`
	font-family: Avenir, sans-serif;
	font-weight: 900;
	margin-top: 24px;
	display: flex;
	align-items: center;
	justify-content: center;

	> span {
		margin-left: -32px;
	}
`;

const Author = styled.span`
	font-family: Avenir;
	font-size: 20px;
	font-weight: 900;
	color: ${color.black};
`;

const State = styled.span`
	font-family: MarkPro;
	font-size: 12px;
	font-weight: bold;
	color: ${color.grey2};
`;

const QuoteCard = ({
	className,
	content,
	colorStroke,
	circleBackgroundShadow,
	circlePosition,
	style,
}) => {
	return (
		<Wrapper className={className} style={style}>
			<Whitebox className="box">
				<Circle
					position={circlePosition}
					circleBackgroundColor={color.blue1}
					circleBackgroundShadow={circleBackgroundShadow}
					colorStroke={colorStroke}
				>
					<svg viewBox="-1 0 16 12">
						<polyline points="2 6 4.5 9 10.5 3"></polyline>
					</svg>
				</Circle>
				<Paragraph mixed bottomMargin="0">
					{parse(content.text)}
				</Paragraph>
				<Author>{parse(content.author)}</Author>
				<State>{parse(content.state)}</State>
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
