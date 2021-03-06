import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/left-content-right-object";
import BusinessNameSearchForm from "../../../organisms/forms/business-name-search-form";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue1.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/bottom-left-top-right-big.inline.svg";
import { PHeading } from "../../../atoms/typography/p-to-heading";

const Search = styled.section`
	position: relative;
	padding: 54px 0;

	@media (min-width: 992px) {
		padding: 108px 0;
	}

	background-color: ${color.blue3};
	overflow: hidden;
`;

const SearchSection = ({ className, content, id }) => (
	<Search className={className} id={id}>
		<Oval className="oval" height="570" width="570" bottom="5" right="0">
			<OvalSVG />
		</Oval>
		<ContentObject
			object={
				<BusinessNameSearchForm
					propState="Virginia"
					curveColor={color.blue1}
					curvePosition="bottomRight"
					curveRotate="90"
				/>
			}
			contentWidth="500"
			contentCenter
		>
			<Heading size="2" bottomMargin="48" style={{ position: `relative` }}>
				<Curve top="-85" left="-85" color={color.blue1}>
					<CurveSVG />
				</Curve>
				{content.header}
			</Heading>
			<PHeading size="4">{content.header2}</PHeading>
			<Paragraph big bottomMargin="24">
				{content.text}
			</Paragraph>
		</ContentObject>
	</Search>
);

export default SearchSection;
