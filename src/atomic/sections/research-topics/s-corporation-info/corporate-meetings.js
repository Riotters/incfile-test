import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../../molecules/blocks/research-topics-path";

const About = styled.section`
	position: relative;
	padding-bottom: 104px;
`;

const AboutSection = ({ className, content }) => (
	<About className={className} id="answers">
		<Oval className="oval" height="570" width="570" y="-40">
			<OvalSVG />
		</Oval>
		<ImageContent image="web-address-search">
			<Path content={content.links} />
			<Heading size={1} template={3} bottomMargin="32">
				{content.header}
			</Heading>
			<Paragraph big bottomMargin="16">
				{content.text}
			</Paragraph>
			<Paragraph big bottomMargin="24">
				{content.text2}
			</Paragraph>
			<IconListColorBox
				content={content.list}
				color={color.red2}
				curve
				curveColor={color.green2}
				rounded
				bottomMargin="48"
			/>
		</ImageContent>
	</About>
);

export default AboutSection;
