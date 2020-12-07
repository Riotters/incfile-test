import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Accordion from "../../../organisms/accordion/accordion";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-reverse-green1.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const Faq = styled.section`
	position: relative;
	padding: 100px 0 120px;
`;

const FaqSection = ({ className, content }) => (
	<Faq className={className}>
		<Oval className="oval" height="420" width="420" top="0" right="0">
			<OvalSVG />
		</Oval>
		<ContentCenter>
			<Heading size={3} template={2} bottomMargin={104} maxWidth={770} center>
				{content.header}
			</Heading>
			<Accordion
				content={content.faq}
				tab
				curve
				curveTopLeft
				curveLeft="-30"
				curveColor={color.orange1}
			/>
		</ContentCenter>
	</Faq>
);

export default FaqSection;
