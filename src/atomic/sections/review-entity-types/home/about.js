import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import Tabs from "../../../organisms/tabs/review-entity-types-tabs";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-orange3.inline.svg";

const About = styled.section`
	position: relative;
	padding-bottom: 64px;

	p {
		color: ${color.grey2};
	}
`;

const AboutSection = ({ className, content }) => (
	<About className={className}>
		<Oval className="oval" height="720" width="720" y="-10">
			<OvalSVG />
		</Oval>
		<Tabs content={content.tabs} />
	</About>
);

export default AboutSection;
