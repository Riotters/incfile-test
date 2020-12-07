import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ImageContent from "../../../partials/left-image-right-content";
import LightBoxVideo from "../../../../components/LightBox";

const About = styled.section`
	position: relative;
	padding-bottom: 48px;

	@media (min-width: 769px) {
		padding-bottom: 120px;
	}
`;

const AboutSection = ({ className, content }) => (
	<About className={className}>
		<ImageContent image="business-license-requirements-about" imageWidth="350">
			<Heading size={2} template={3} left bottomMargin="48">
				{content.header}
			</Heading>
			<Paragraph big bottomMargin="32">
				{content.text}
			</Paragraph>
			<LightBoxVideo
				thumbnailVideo="do-i-need-a-business-license-6829"
				videoID="ZHQDyf2-kYk"
			/>
		</ImageContent>
	</About>
);

export default AboutSection;
