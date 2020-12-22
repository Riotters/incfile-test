import React from "react";
import styled from "styled-components";
import { gradient } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-orange3.inline.svg";
import Oval2SVG from "../../../../images/ovals/bottom-left-transparent-orange3.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { Heading } from "../../../atoms/typography/heading";
import CCorpQuizTable from "../../../organisms/tables/ccorp-quiz-table";

const AdvancesAndDisadvances = styled.section`
	position: relative;
	padding-top: 100px;
	padding-bottom: 100px;

	&::before {
		content: "";
		height: 617px;
		width: 100%;
		background-image: ${gradient.orange3};
		position: absolute;
		top: 0;
		left: 0;
	}

	.headline {
		margin-bottom: 80px;
	}
`;

const AdvancesAndDisadvancesSection = ({ className, content }) => (
	<AdvancesAndDisadvances className={className}>
		<Oval className="oval" height="720" width="720" top="18" right="0">
			<OvalSVG />
		</Oval>
		<Oval className="oval" height="136" width="136" bottom="8" left="0">
			<Oval2SVG />
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
			<Paragraph big maxWidth="770" bottomMargin={40} style={{ width: "100%" }}>
				{content.text3}
			</Paragraph>
			<CCorpQuizTable content={content.table} />
			<Heading size={3} maxWidth="770">
				{content.header3}
			</Heading>
			<Paragraph big maxWidth="770">
				{content.text4}
			</Paragraph>
			<Paragraph big bottomMargin={0} maxWidth="770">
				{content.text5}
			</Paragraph>
		</ContentCenter>
	</AdvancesAndDisadvances>
);

export default AdvancesAndDisadvancesSection;
