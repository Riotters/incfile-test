import React from "react";
import styled from "styled-components";
import Container from "../container";
import OvalSVG from "../../images/oval-blue.inline.svg";

const Wrapper = styled.div`
	padding-top: 75px;
	position: relative;
	z-index: 1;

	@media (min-width: 769px) {
		padding-top: 115px;
	}
`;

const Oval = styled.div`
	height: 100%;
	width: 100%;
	max-height: 460px;
	max-width: 370px;
	position: absolute;
	left: 0;
	top: 60px;
	transform: translateY(40%);
	// transform: rotate(-460deg);

	@media screen and (min-width: 1550px) {
		max-height: 600px;
		max-width: 600px;
		//left: 50px;
		top: 110px;
	}

	svg {
		moz-transform: scale(-1, 1);
		-o-transform: scale(-1, 1);
		-webkit-transform: scale(-1, 1);
		transform: scale(-1, 1);
	}
`;

const WrapperContent = ({ children }) => (
	<Wrapper>
		<Oval>
			<OvalSVG />
		</Oval>
		<Container>{children}</Container>
	</Wrapper>
);

export default WrapperContent;
