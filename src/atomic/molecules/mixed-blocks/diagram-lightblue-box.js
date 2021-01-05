import React from "react";
import styled from "styled-components";
import Bluebox from "../../atoms/boxes/blue-box";

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	max-width: 470px;
	margin: 0 auto;

	@media (min-width: 769px) {
		max-width: 270px;
		margin: 0;
	}

	.box {
		display: flex;
		align-items: center;
		padding: 32px 32px 32px 32px;

		span {
			font-family: Engram, sans-serif;
			font-weight: 900;
			font-size: 20px;
			line-height: 28px;
			margin-left: 24px;
		}

		svg {
			min-width: 32px;
			min-height: 33px;
		}
	}
`;

const LightBlueBox = ({ className, content, Icon }) => (
	<Wrapper className={className}>
		<Bluebox className="box">
			<Icon />
			<span>{content}</span>
		</Bluebox>
	</Wrapper>
);

export default LightBlueBox;
