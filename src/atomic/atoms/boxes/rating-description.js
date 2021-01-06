import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
	color: #878787;
	font-family: Engram;
	font-size: 14px;
	line-height: 20px;
	text-align: left;
	margin-bottom: 0;

	div {
		display: flex;
	}

	span {
		font-weight: 900;
		padding: 0 4px;
	}

	@media (min-width: 768px) {
		margin-top: 0;
	}
`;

const RatingDescription = ({ children, className }) => (
	<Wrapper className={className}>{children}</Wrapper>
);

export default RatingDescription;
