import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/megafon.inline.svg";
import IconTextColorBox from "../../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

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
		<Oval className="oval" height="420" width="420" y="15">
			<OvalSVG />
		</Oval>
		<ImageContent image="clipboard-9010">
			<IconTextColorBox
				color={color.blue3}
				Icon={IconSVG}
				content={content.box}
				rounded
				curve
				curveColor={color.blue1}
			/>
			<Paragraph big mixed bottomMargin={64}>
				{parse(content.text)}
			</Paragraph>
			<Paragraph big mixed bottomMargin={64}>
				{parse(content.text2)}
			</Paragraph>
		</ImageContent>
	</About>
);

export default AboutSection;
