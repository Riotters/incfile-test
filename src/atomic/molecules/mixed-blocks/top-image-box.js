import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Image from "../../atoms/image/image";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../buttons/text";
import parse from "html-react-parser";

const Wrapper = styled.div`
	width: 100%;
	max-width: 470px;
	padding: ${(props) => (props.padding ? props.padding : "16px 16px 40px")};
	position: relative;
	border-radius: 5px;
	background-color: ${color.white};
	box-shadow: ${(props) => (props.noShadow ? "" : shadow.white1)};
	margin: 0 auto;

	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 128px;
		width: 100%;
		background-color: ${(props) => (props.color ? props.color : color.white)};
		border-radius: 5px;

		.gatsby-image-wrapper {
			height: 96px;
			width: 96px;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: calc(100% - 128px);
		padding: 24px 24px 0;
	}

	p,
	a {
		font-size: 16px;
		line-height: 24px;
	}

	p {
		color: ${color.grey1};
	}
`;

const TopImageBox = ({
	className,
	image,
	color,
	content,
	noShadow,
	padding,
}) => {
	return (
		<Wrapper
			className={className}
			color={color}
			noShadow={noShadow}
			padding={padding}
		>
			<div className="top">{image && <Image filename={image} />}</div>
			<div className="content">
				<div>
					<Heading size={3} template={4} bottomMargin="16">
						{parse(content.header)}
					</Heading>
					<Paragraph bottomMargin="0" mixed>
						{parse(content.text)}
					</Paragraph>
				</div>
				{content.link && (
					<ArrowLink content={content.link} bottomMargin="0" topMargin="24" />
				)}
			</div>
		</Wrapper>
	);
};

export default TopImageBox;
