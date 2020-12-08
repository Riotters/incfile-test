import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
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
import parse from "html-react-parser";
import Circle from "../../../atoms/icons/circle";
import {PHeading} from "../../../atoms/typography/p-as-heading";

const About = styled.section`
	position: relative;
	padding-bottom: 104px;
`;

const AbsoluteCircle = styled.div`
	border-radius: 50%;
	box-shadow: ${(props) => props.imageShadowColor};
	margin-right: auto;
	margin-bottom: 24px;
`;

const NumberSpan = styled.span`
	font-family: MarkPro;
	font-size: 24px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #5089fd;
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
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{1}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={4} template={4} left bottomMargin="24">
				{content.header2}
			</PHeading>
			<Paragraph big bottomMargin="16">
				{content.text}
			</Paragraph>
			<Paragraph big bottomMargin="24">
				{content.text2}
			</Paragraph>
			<IconListColorBox
				content={content.list}
				color={color.green3}
				rounded
				paragraphHeader
				bottomMargin="24"
			/>
			<IconListColorBox
				content={content.list2}
				color={color.red2}
				curve
				curveColor={color.yellow2}
				rounded
				paragraphHeader
				bottomMargin="24"
			/>
			<Paragraph big bottomMargin="48">
				{content.text3}
			</Paragraph>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{2}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header3}
			</PHeading>
			<Paragraph big bottomMargin="16">
				{content.text4}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text5}
			</Paragraph>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{3}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header4}
			</PHeading>
			<Paragraph big bottomMargin="16">
				{content.text6}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text7}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text8}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text9}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text10}
			</Paragraph>
			<Paragraph big bottomMargin="48">
				{content.text11}
			</Paragraph>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{4}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header5}
			</PHeading>
			<Paragraph big bottomMargin="48">
				{content.text12}
			</Paragraph>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{5}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header6}
			</PHeading>
			<Paragraph big bottomMargin="48">
				{content.text13}
			</Paragraph>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{6}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header7}
			</PHeading>
			<Paragraph big bottomMargin="24">
				{content.text14}
			</Paragraph>
			<IconListColorBox
				content={content.list3}
				color={color.red2}
				curve
				paragraphHeader
				curveColor={color.yellow2}
				rounded
				bottomMargin="48"
			/>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{7}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header8}
			</PHeading>
			<Paragraph big bottomMargin="48">
				{content.text15}
			</Paragraph>
			<AbsoluteCircle imageShadowColor={shadow.white1}>
				<Circle
					circleColor={color.white}
					padding={0}
					height={80}
					width={80}
					paddingLeft={0}
				>
					<NumberSpan>{8}</NumberSpan>
				</Circle>
			</AbsoluteCircle>
			<PHeading size={2} template={4} left bottomMargin="24">
				{content.header9}
			</PHeading>
			<Paragraph big bottomMargin="16">
				{content.text16}
			</Paragraph>
			<Paragraph big bottomMargin="16">
				{content.text17}
			</Paragraph>
			<Paragraph big bottomMargin="48" mixed>
				{parse(content.text18)}
			</Paragraph>
		</ImageContent>
	</About>
);

export default AboutSection;
