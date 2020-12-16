import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/top-left-transparent-orange.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import LightBoxVideo from "../../../../components/LightBox";
import PlusCircleOrangeSVG from "../../../../images/icons/plus-circle-orange.inline.svg";
import EqualCircleOrangeSVG from "../../../../images/icons/equal-circle-orange.inline.svg";
import Image from "../../../atoms/image/image";
import { color } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import Oval from "../../../atoms/icons/oval";

const ContainerWrapper = styled.section`
	background: rgb(255, 255, 255);
	background-image: ${gradient.orange3};
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;
`;

const TitleBox = styled.div`
	width: 100%;
	position: relative;

	p {
		text-align: center;
	}
`;

const WhatIsSCorp = ({ content }) => (
	<ContainerWrapper>
		<Oval height="570" width="570" top="0" left="0" zIndex="0">
			<OvalSvg />
		</Oval>
		<ContentCenter contentWidth="770">
			<TitleBox>
				<Heading size={2} bottomMargin={32}>
					{content.header}
				</Heading>
				<Paragraph big mixed>
					{parse(content.text)}
				</Paragraph>
				<Paragraph big mixed>
					{parse(content.text2)}
				</Paragraph>
				<Paragraph big mixed bottomMargin={0}>
					{parse(content.text3)}
				</Paragraph>
			</TitleBox>
		</ContentCenter>
	</ContainerWrapper>
);

export default WhatIsSCorp;
