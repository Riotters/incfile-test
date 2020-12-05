import React from "react";
import styled from "styled-components";
import { color, gradient } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import StatesMap from "../../../../components/states-map/states-map";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-left-transparent-blue3.inline.svg";
import { Heading } from "../../../atoms/typography/heading";

const Map = styled.div`
	padding-top: 180px;
	padding-bottom: 40px;
	position: relative;

	&::before {
		content: "";
		height: 1564px;
		width: 100%;
		background-image: ${gradient.blue3};
		position: absolute;
		top: 0;
		left: 0;
	}

	h1 {
		text-align: center;
	}
`;

const MapSection = ({ className, content }) => (
	<Map className={className}>
		<Oval className="oval" height="570" width="570" bottom="0" left="0">
			<OvalSVG />
		</Oval>
		<ContentCenter contentWidth="770">
			<Heading size={1} template={2}>
				{content.header}
			</Heading>
			<StatesMap />
		</ContentCenter>
	</Map>
);

export default MapSection;
