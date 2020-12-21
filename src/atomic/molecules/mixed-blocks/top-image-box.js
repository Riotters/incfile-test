import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Image from "../../atoms/image/image";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../buttons/text";
import parse from "html-react-parser";
import ChooseHeadingType from "../../atoms/typography/ConditionalHeading";

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

	p:not([class*="i-believe-i-can-be-a-h"]),
	a {
		font-size: 16px;
		line-height: 24px;
	}

	p:not([class*="i-believe-i-can-be-a-h"]) {
		color: ${color.grey1};
	}
	
	h2 {
		text-align: left;
	}
`;

const TopImageBox = ({
	className,
	image,
	color,
	headlineSize = 3,
	headlineTemplateSize = 4,
	paragraphHeader = false,
	content,
	noShadow,
    padding
}) => {
	return (
		<Wrapper
			className={className}
			color={color}
			noShadow={noShadow}
			padding={padding}
		>
			<div className="top">{image && <Image filename={image} alt={content?.imgAlt ? content.imgAlt : content.header} />}</div>
			<div className="content">
				<div>
					<ChooseHeadingType
						headerSize={headlineSize}
						headerTemplateSize={headlineTemplateSize}
						content={content.header}
						paragraphHeader={paragraphHeader}
						bottomMargin={16} />
					{/*<Heading size={3} template={4} bottomMargin="16">*/}
						{/*{parse(content.header)}*/}
					{/*</Heading>*/}
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
