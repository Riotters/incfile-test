import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color, gradient } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import { Heading } from "../../../atoms/typography/heading";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";

const HowTo = styled.section`
	position: relative;
	padding-top: 100px;
	padding-bottom: 100px;
	background-image: ${gradient.green3};

	p {
		span {
			display: block;
			color: ${color.black};
			font-weight: bold;
			margin-top: 24px;
		}
	}
`;

const HowToSection = ({ className, content }) => (
	<HowTo className={className}>
		<ImageContent image="mrs-bulb-question-3266" imageWidth="435">
			<Heading size={3}>{parse(content.header)}</Heading>
			<Paragraph big mixed bottomMargin={64}>
				{parse(content.text)}
			</Paragraph>
			<NumericBoxedList content={content.list} bottomMargin={40} />
			<Paragraph big mixed bottomMargin={56}>
				{parse(content.text2)}
			</Paragraph>
		</ImageContent>
	</HowTo>
);

export default HowToSection;
