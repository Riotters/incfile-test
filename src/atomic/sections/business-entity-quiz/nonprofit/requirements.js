import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";
import ContentCenter from "../../../partials/content-center";
import NumericBoxedList from "../../../organisms/lists/numeric-boxed-list";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Button from "../../../molecules/buttons/button";

const SettingBusiness = ({ content }) => (
	<GreenContainer>
		<Oval>
			<GreenOval />
		</Oval>

		<TextCenterLayout
			headline="How to Start a Nonprofit Corporation"
			headlineWidth={770}
			textWidth={770}
			text="If a C Corporation is right for you, here’s how to form one:"
		/>

		<ContentCenter contentWidth="970">
			<NumericBoxedList content={content.list} bottomMargin={40} />
			<Paragraph big center maxWidth="770">
				After the meeting is completed, minutes of the meeting should be created
				and filed in your corporate records book. You should hold board meetings
				annually.
			</Paragraph>
			<Button theme="primary56" margin="0 auto" content={content.button} />
		</ContentCenter>
	</GreenContainer>
);

const GreenContainer = styled.div`
	padding-bottom: 100px;
	padding-top: 100px;
	position: relative;
`;

const ImageBoxes = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	padding-top: 112px;
	width: 100%;
	max-width: 970px;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 970px) {
		margin: 0 auto;
	}
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	bottom: 164px;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

export default SettingBusiness;
