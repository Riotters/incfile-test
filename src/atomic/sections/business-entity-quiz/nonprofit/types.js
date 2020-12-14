import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import { Heading } from "../../../atoms/typography/heading";
import Button from "../../../molecules/buttons/button";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";

const About = styled.section`
	position: relative;
	padding-bottom: 30px;

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

const AboutSection = ({ className, content }) => (
	<About className={className}>
		<ImageContent image="mrs-bulb-question-3266">
			<Heading size={3}>{parse(content.header)}</Heading>
			<Paragraph big mixed bottomMargin={64}>
				{parse(content.text)}
			</Paragraph>
			<NumericBoxedList content={content.list} bottomMargin={40} />
			<Paragraph big mixed bottomMargin={56}>
				{parse(content.text2)}
			</Paragraph>
		</ImageContent>
	</About>
);

export default AboutSection;
