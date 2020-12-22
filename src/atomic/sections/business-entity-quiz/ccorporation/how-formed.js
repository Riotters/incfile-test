import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import { Heading } from "../../../atoms/typography/heading";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange3.inline.svg";

const Differences = styled.section`
	position: relative;
	padding-top: 60px;
	padding-bottom: 100px;

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
		<Oval height="570" width="570" top="0" left="0">
			<OvalSVG />
		</Oval>
		<ImageContent image="differences-between-an-s-corp-c-corp-and-llc-7266">
			<Heading size={3} bottomMargin={32} maxWidth="535">
				{parse(content.header)}
			</Heading>
			<Paragraph big mixed bottomMargin={48}>
				{parse(content.text)}
			</Paragraph>
			<Heading size={4} bottomMargin={32}>
				{parse(content.header2)}
			</Heading>
			<NumericBoxedList content={content.list} />
		</ImageContent>
	</Differences>
);

export default DifferencesSection;
