import React from "react";
import styled from "styled-components";
import TabScrollable from "../legalzoom/TabScrollable";

const About = ({ content }) => (
	<>
		<TabScrollableWrapper>
			<TabScrollable content={content} />
		</TabScrollableWrapper>
	</>
);

const TabScrollableWrapper = styled.div`
	padding-top: 24px;
`;

export default About;
