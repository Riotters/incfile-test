import React from "react";
import styled from "styled-components";

import Top from "../../../../atomic/partials/top";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import Searchbar from "./search-bar";

const Wrapper = styled.div`
	position: relative;
`;

const TopSection = ({ content }) => {
	return (
		<Wrapper>
			<Top
				imageName="mrs-bulb-question-7726"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="yellow"
				headlineWidth="400"
				textWidth="800"
				contentWidth="800"
				contentPaddingTop="0"
			>
				<h1>{content.header}</h1>
				<Heading
					size={2}
					template={4}
					bottomMargin={32}
					style={{ fontWeight: "normal", color: color.grey2 }}
				>
					{content.text}
				</Heading>
				<Searchbar typeSubmit="newPage" />
			</Top>
		</Wrapper>
	);
};

export default TopSection;
