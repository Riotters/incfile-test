import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-blue2.inline.svg";

const Faq = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;

	.headline {
		margin-bottom: 80px;
	}
`;

const FaqSection = ({ className, content }) => (
	<Faq className={className}>
		<Oval className="oval" height="720" width="720" top="0" left="0">
			<OvalSVG />
		</Oval>
		<ContentCenter>
			<Heading size={3} template={2} bottomMargin={24} maxWidth={770} center>
				{content.header}
			</Heading>
			<Accordion
				content={content.faq}
				curve
				curveLeftBottom
				curveColor={color.blue1}
			/>
		</ContentCenter>
	</Faq>
);

export default FaqSection;
