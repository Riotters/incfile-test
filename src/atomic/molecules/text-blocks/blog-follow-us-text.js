import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { SpanHeading } from "../../atoms/typography/span-as-heading";

const Wrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid ${color.grey4};
	padding-bottom: 24px;
	margin-bottom: 24px;

	span {
		text-align: ${(props) => (props.leftAlign ? "left" : "center")};
	}
`;

const BlogFollowUsTexts = ({ className, content, leftAlign }) => {
	return (
		<Wrapper className={className} leftAlign={leftAlign}>
			<SpanHeading size={4} bottomMargin={0}>
				{content ? content : "Follow Incfile"}
			</SpanHeading>
		</Wrapper>
	);
};

export default BlogFollowUsTexts;
