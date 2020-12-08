import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ArrowLink from "../../../molecules/buttons/text";
import ImageContent from "../../../partials/left-image-right-content";
import IconSVG from "../../../../images/icons/no-pass-sign.inline.svg";
import IconListColorBox from "../../../molecules/text-blocks/icon-h4-list-color";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import NumericList from "../../../organisms/lists/numeric-boxed-list";
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
			<Paragraph big bottomMargin="16">
				{content.text2}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text3}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text4}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text5}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text6}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text7}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text8}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header2}
			</Heading>
			<Paragraph big bottomMargin="16">
				{content.text9}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text10}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header3}
			</Heading>
			<Paragraph big bottomMargin="16">
				{content.text11}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text12}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header4}
			</Heading>
			<Paragraph big bottomMargin="16">
				{content.text13}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text14}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text15}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header5}
			</Heading>
			<Paragraph big bottomMargin="24">
				{content.text16}
			</Paragraph>
			<IconListColorBox
				content={content.list}
				color={color.green3}
				curve
				curveColor={color.babyblue2}
				rounded
				bottomMargin="24"
			/>
			<Paragraph big bottomMargin="48">
				{content.text17}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header6}
			</Heading>
			<Paragraph big bottomMargin="16">
				{content.text18}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text19}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header7}
			</Heading>
			<Paragraph big bottomMargin="16">
				{content.text20}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text21}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text22}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text23}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text24}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text25}
			</Paragraph>
			<Heading size={2} template={4} left bottomMargin="24">
				{content.header8}
			</Heading>
			<Paragraph big bottomMargin="48">
				{content.text26}
			</Paragraph>
		</ImageContent>
	</About>
);

export default AboutSection;
