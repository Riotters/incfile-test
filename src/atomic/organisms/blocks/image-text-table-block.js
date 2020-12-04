import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import ImageInColoredBox from "../../molecules/image-blocks/image-in-colored-block";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ITTBTable from "../../molecules/tables/ittb-table";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};
`;
const Content = styled.div`
	display: flex;
`;
const Texts = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 32px;
`;

const ImageTextTableBlock = ({ content }) => (
	<Wrapper bottomMargin={content.bottomMargin}>
		<Content>
			<ImageInColoredBox
				boxColor={content.boxColor}
				boxSize={content.boxSize}
				image={content.image}
			/>
			<Texts>
				<Heading size={3} template={4} bottomMargin="12">
					{parse(content.header)}
				</Heading>
				<Paragraph big mixed>
					{parse(content.text)}
				</Paragraph>
			</Texts>
		</Content>
		<ITTBTable content={content.table} />
	</Wrapper>
);

export default ImageTextTableBlock;
