import styled from "styled-components";
import React from "react";
import { color, gradient } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import ContentCenter from "../../../partials/content-center";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import parse from "html-react-parser";
import Adventages from "../../../molecules/mixed-blocks/adventages";
import LeftImageRightContent from "../../../partials/left-image-right-content";
import AccordionWithCounting from "../../../organisms/accordion/accordion-with-counting";
import Whitebox from "../../../atoms/boxes/white-box-li";
import CheckSVG from "../../../../images/circle-status-check.inline.svg";
import ExSVG from "../../../../images/circle-status-x.inline.svg";
import Oval from "../../../atoms/icons/oval";
import OvalSVG1 from "../../../../images/ovals/bottom-left-transparent-green3.inline.svg";
import OvalSVG2 from "../../../../images/ovals/bottom-right-transparent-green3.inline.svg";

const Wrapper = styled.section`
	padding: 30px 0;
	width: 100%;
	position: relative;

	@media (min-width: 992px) {
		padding: 0 0 100px;
	}
`;

const ListContainer = styled.ul`
	list-style: none;
	margin-bottom: 72px;

	li {
		padding: 24px;
		vertical-align: middle;
		margin-bottom: 8px;
		display: flex;
		color: ${color.black};
	}

	svg {
		margin-right: 24px;
		z-index: 1;
		min-width: 32px;
	}
`;

const Characteristics = ({ className, content }) => (
	<Wrapper>
		<Oval left="0" top="0" width={570} height={570} className="oval">
			<OvalSVG1 />
		</Oval>
		<Oval right="0" top={50} width={570} height={570} className="oval">
			<OvalSVG2 />
		</Oval>
		<LeftImageRightContent image={content.image}>
			<Heading size={3}>{content.header2}</Heading>
			<Paragraph big mixed>
				{parse(content.text3)}
			</Paragraph>

			<ListContainer>
				{content.list.map((item) => (
					<Whitebox>
						<CheckSVG />
						<Paragraph mixed bottomMargin={0}>
							{parse(item)}
						</Paragraph>
					</Whitebox>
				))}
			</ListContainer>

			<Heading size={3}>{content.header3}</Heading>
			<Paragraph big mixed>
				{parse(content.text4)}
			</Paragraph>

			<ListContainer>
				{content.list2.map((item) => (
					<Whitebox>
						<ExSVG />
						<Paragraph mixed bottomMargin={0}>
							{parse(item)}
						</Paragraph>
					</Whitebox>
				))}
			</ListContainer>

			<Heading size={2} template={3} left bottomMargin={48}>
				{content.header4}
			</Heading>
			<AccordionWithCounting header={3} tab content={content.accordion} />
		</LeftImageRightContent>
	</Wrapper>
);

export default Characteristics;
