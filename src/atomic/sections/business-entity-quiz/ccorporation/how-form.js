import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";

const HowForm = styled.section`
	position: relative;
	padding-top: 100px;
	padding-bottom: 100px;

	.headline {
		margin-bottom: 80px;
	}
`;

const HowFormSection = ({ className, content }) => (
	<HowForm className={className}>
		<Oval className="oval" height="720" width="720" top="0" left="0">
			<OvalSVG />
		</Oval>
		<Oval className="oval" height="420" width="420" bottom="0" left="0">
			<OvalSVG />
		</Oval>
		<HeadingCenter
			headline={content.header}
			headlineWidth="770"
			text={content.text}
			textWidth="770"
			bottomMargin={80}
		/>
		<ContentCenter contentWidth="770">
			<NumericBoxedList content={content.list} bottomMargin={48} />
			<Paragraph big mixed bottomMargin={48}>
				{parse(content.text2)}
			</Paragraph>
			<Button theme="primary56" margin="0 auto" content={content.button} />
		</ContentCenter>
	</HowForm>
);

export default HowFormSection;
