import React from "react";
import styled from "styled-components";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import Tabs from "../../../organisms/tabs/business-resources-tabs";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";

const Resources = styled.section`
	position: relative;
	padding-top: 24px;
	padding-bottom: 104px;

	@media (min-width: 576px) {
		padding-top: 104px;
	}

	ul {
		margin-bottom: 0;
	}
`;

const ResourcesSection = ({ className, content, openModal }) => (
	<Resources className={className} id="guides-section">
		<Oval width="720" height="720" top="0" right="0">
			<OvalSVG />
		</Oval>
		<HeadingCenter
			headline={content.header}
			headlineWidth="770"
			bottomMargin="24"
			bottomMarginMD={80}
		/>
		<ContentCenter>
			<Tabs content={content.tabs} openModal={openModal} />
		</ContentCenter>
	</Resources>
);

export default ResourcesSection;
