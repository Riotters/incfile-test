import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import WhiteBox from "../../atoms/boxes/white-box";
import Image from "../../atoms/image/image_nobase64";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";

const Wrapper = styled(WhiteBox)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 30px 15px;
	margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};

	@media (min-width: 430px) {
		padding: 48px 40px;
	}

	.gatsby-image-wrapper {
		width: 100%;
		max-width: 160px;
		margin-bottom: 32px;
	}

	& > p {
		text-align: center;
	}
`;

const Colorbox = styled.div`
	width: 100%;
	border-radius: ${(props) => (props.radius ? props.radius : "")};
	background-color: ${(props) => (props.color ? props.color : "")};
	padding: 32px;
	margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};
`;

const IncfileVsCard = ({ className, content }) => {
	return (
		<Wrapper className={className} bottomMargin={content.bottomMargin}>
			<Image filename={content.image} />
			<Heading size="4" bottomMargin="32">
				{parse(content.header)}
			</Heading>
			<Paragraph mixed maxWidth={content.textWidth}>
				{parse(content.text)}
			</Paragraph>
			{content.boxes.map((box) => (
				<Colorbox
					radius={box.radius}
					color={box.color}
					bottomMargin={box.bottomMargin}
				>
					<Heading size="4" bottomMargin="8">
						{parse(box.header)}
					</Heading>
					<Paragraph mixed bottomMargin="0">
						{parse(box.text)}
					</Paragraph>
				</Colorbox>
			))}
		</Wrapper>
	);
};

export default IncfileVsCard;
