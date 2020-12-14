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
import Whitebox from "../../../atoms/boxes/white-box-li";
import CheckSVG from "../../../../images/circle-status-check.inline.svg";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";

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

const ListContainer = styled.ul`
	list-style: none;
	margin-bottom: 72px;

	li {
		padding: 24px;
		vertical-align: middle;
		margin-bottom: 8px;
		display: flex;
		color: ${color.black};
	}

	svg {
		margin-right: 24px;
		z-index: 1;
		min-width: 32px;
	}
`;

const DifferencesSection = ({ className, content }) => (
	<Differences className={className}>
		<ImageContent image="differences-between-an-s-corp-c-corp-and-llc-7266">
			<Heading size={3}>{parse(content.header)}</Heading>
			<Paragraph big mixed>
				{parse(content.text)}
			</Paragraph>
			<Heading size={3}>{parse(content.header2)}</Heading>
			<NumericBoxedList content={content.list} />
		</ImageContent>
	</Differences>
);

export default DifferencesSection;
