import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../styles/colors";

const Wrapper = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Engram, sans-serif;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	text-align: center;
	background-color: ${color.blue3};
	border-radius: 20px;
	color: ${color.blue1};
	padding: 8px 12px;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: ${color.orange3};
		color: ${color.orange1};
	}
`;

const BlueboxLink = ({ className, content, ...rest }) => (
	<Wrapper className={className} to={content.url} {...rest}>
		{content.name}
	</Wrapper>
);

export default BlueboxLink;
