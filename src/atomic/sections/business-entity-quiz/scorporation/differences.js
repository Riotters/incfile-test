import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import { Heading } from "../../../atoms/typography/heading";
import Button from "../../../molecules/buttons/button";

const Differences = styled.section`
	position: relative;
	padding-bottom: 30px;

	&::before {
		content: "";
		height: 600px;
		width: 100%;
		background-image: ${gradient.blue3};
		position: absolute;
		top: 0;
		left: 0;
	}

	@media (min-width: 992px) {
		padding-bottom: 120px;
	}

	p {
		span {
			display: block;
			color: ${color.black};
			font-weight: bold;
			margin-top: 24px;
		}
	}
`;

const DifferencesSection = ({ className, content }) => (
	<Differences className={className}>
		<ImageContent image="differences-between-an-s-corp-c-corp-and-llc-7266">
			<Heading size={3}>{parse(content.header)}</Heading>
			<Paragraph big mixed>
				{parse(content.text)}
			</Paragraph>
			<Paragraph big mixed>
				{parse(content.text2)}
			</Paragraph>
			<Paragraph big mixed>
				{parse(content.text3)}
			</Paragraph>
			<Paragraph big mixed>
				{parse(content.text4)}
			</Paragraph>
			<Paragraph big mixed>
				{parse(content.text5)}
			</Paragraph>
			<Paragraph big mixed bottomMargin={64}>
				{parse(content.text6)}
			</Paragraph>
			<IconTextColorBox
				color={color.orange3}
				Icon={IconSVG}
				content={content.box}
				rounded
				curve
				curveColor={color.orange1}
				bottomMargin={48}
			/>
			<Paragraph big mixed bottomMargin={56}>
				{parse(content.text7)}
			</Paragraph>
			<Heading size={3}>{parse(content.header2)}</Heading>
			<Paragraph big mixed bottomMargin={56}>
				{parse(content.text8)}
			</Paragraph>
			<Paragraph big mixed bottomMargin={56}>
				{parse(content.text9)}
			</Paragraph>
		</ImageContent>
	</Differences>
);

export default DifferencesSection;
