import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ImageContent from "../../partials/left-image-right-content";
import IconSVG from "../../../images/icons/no-pass-sign.inline.svg";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-blue3.inline.svg";
import Path from "../../molecules/blocks/research-topics-path";
import LightBoxVideo from "../../../components/LightBox";

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
			<Heading size={3} bottomMargin="24">
				{content.header2}
			</Heading>
			<LightBoxVideo
				thumbnailVideo="comparison-chart-video-3611"
				videoID="R_oIgzYh7NU"
				bottomMargin="48"
			/>
			<Paragraph big bottomMargin="48">
				{content.text}
			</Paragraph>
			<Heading size={3} bottomMargin="24">
				{content.header3}
			</Heading>
			<LightBoxVideo
				thumbnailVideo="comparison-chart-video-3611"
				videoID="R_oIgzYh7NU"
				bottomMargin="48"
			/>
			<Paragraph big bottomMargin="48">
				{content.text2}
			</Paragraph>
			<Heading size={3} bottomMargin="24">
				{content.header4}
			</Heading>
			<LightBoxVideo
				thumbnailVideo="comparison-chart-video-3611"
				videoID="R_oIgzYh7NU"
				bottomMargin="48"
			/>
			<Paragraph big bottomMargin="48">
				{content.text3}
			</Paragraph>
		</ImageContent>
	</About>
);

export default AboutSection;
