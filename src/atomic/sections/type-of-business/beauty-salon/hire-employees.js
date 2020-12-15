import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import AccordionWithCounting from "../../../../atomic/organisms/accordion/accordion-with-counting";
import { AccordionCounting } from "../../../../static/type-of-business/beauty-salon";
import ContentCenter from "../../../../atomic/partials/content-center";
import TextCenterLayout from "../../../../atomic/partials/heading-left";
import OvalSvg from "../../../../images/ovals/top-right-transparent-blue.inline.svg";
import { Paragraph } from "../../../atoms/typography/paragraph";

const HireEmployees = () => (
	<BlueContainer>
		<Oval>
			<OvalSvg />
		</Oval>

		<ContentCenter contentWidth={770}>
			<TextCenterLayout headlineWidth={770} headline="Hire Employees" />

			<Paragraph big mixed>
				If you are hiring people to work at your beauty salon, you will need to
				know what to do. See our{" "}
				<Link to="https://www.incfile.com/blog/post/avoid-confusion-when-hiring/">
					10 tips on hiring employees
				</Link>
				.
			</Paragraph>
		</ContentCenter>

		<ContentCenter>
			<AccordionWithCounting content={AccordionCounting} />
		</ContentCenter>
	</BlueContainer>
);

const BlueContainer = styled.div`
	padding-top: 100px;
	position: relative;
	background-image: linear-gradient(to bottom, #f2f6ff, #ffffff);
`;

const Oval = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;
export default HireEmployees;
