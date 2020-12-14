import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green3.inline.svg";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";
import { Heading } from "../../../atoms/typography/heading";
import CCorpQuizTable from "../../../organisms/tables/ccorp-quiz-table";

const AdvancesAndDisadvances = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;

	.headline {
		margin-bottom: 80px;
	}
`;

const AdvancesAndDisadvancesSection = ({ className, content }) => (
	<AdvancesAndDisadvances className={className}>
		<Oval className="oval" height="720" width="720" top="0" left="0">
			<OvalSVG />
		</Oval>
		<ContentCenter contentWidth="970">
			<Heading size={2} left maxWidth="770">
				{content.header}
			</Heading>
			<Paragraph big maxWidth="770">
				{content.text}
			</Paragraph>
			<Paragraph big bottomMargin={48} maxWidth="770">
				{content.text2}
			</Paragraph>
			<Heading size={3} maxWidth="770">
				{content.header2}
			</Heading>
			<Paragraph big maxWidth="770">
				{content.text4}
			</Paragraph>
			<CCorpQuizTable content={content.table} />
			<Heading size={3} maxWidth="770">
				{content.header3}
			</Heading>
			<Paragraph big maxWidth="770">
				{content.text5}
			</Paragraph>
			<Paragraph big bottomMargin={0} maxWidth="770">
				{content.text6}
			</Paragraph>
		</ContentCenter>
	</AdvancesAndDisadvances>
);

export default AdvancesAndDisadvancesSection;
