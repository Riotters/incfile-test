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
import Whitebox from "../../../atoms/boxes/white-box-li";
import CheckSVG from "../../../../images/circle-status-check.inline.svg";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";

const About = styled.section`
	position: relative;
	padding-top: 100px;
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

const ListContainer = styled.ul`
	list-style: none;
	margin-bottom: 56px;

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

const AboutSection = ({ className, content }) => (
	<About className={className}>
		<Oval height="570" width="570" bottom="0" right="0">
			<OvalSVG />
		</Oval>
		<ImageContent image="mrs-bulb-question-3266">
			<Heading size={3}>{parse(content.header)}</Heading>
			<Paragraph big mixed bottomMargin={64}>
				{parse(content.text)}
			</Paragraph>
			<IconTextColorBox
				color={color.orange3}
				Icon={IconSVG}
				content={content.box}
				rounded
				curve
				curveColor={color.blue1}
				bottomMargin={48}
			/>
			<Heading size={4} bottomMargin={32}>
				{parse(content.header2)}
			</Heading>
			<ListContainer>
				{content.list.map((item) => (
					<Whitebox>
						<CheckSVG />
						<Paragraph mixed bottomMargin={0}>
							{parse(item)}
						</Paragraph>
					</Whitebox>
				))}
			</ListContainer>
			<Button theme="primary56" content={content.button} margin="0 auto 0 0" />
		</ImageContent>
	</About>
);

export default AboutSection;
