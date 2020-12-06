import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import HeadingCenter from "../../../partials/heading-center";
import ContentCenter from "../../../partials/content-center";
import List from "../../../organisms/lists/related-questions-list";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";

const Related = styled.section`
	position: relative;
	padding-top: 104px;
	padding-bottom: 104px;
	background-color: ${color.orange3};
`;

const RelatedSection = ({ className, content }) => (
	<Related className={className}>
		<ContentCenter contentWidth="770">
			<Heading size={2} left bottomMargin="24" maxWidth="700">
				{content.header}
			</Heading>
			<Paragraph big bottomMargin={104}>
				{content.text}
			</Paragraph>
			<List content={content} />
		</ContentCenter>
	</Related>
);

export default RelatedSection;
