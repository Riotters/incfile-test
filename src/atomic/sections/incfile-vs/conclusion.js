import React from "react";
import styled from "styled-components";
import Container from "../../container";
import Image from "../../atoms/image/image_nobase64";
import OvalSVG from "../../../images/ovals/top-right-orange3-to-transparent.inline.svg";
import { color } from "../../atoms/styles/colors";

const Wrapper = styled.div`
	padding: 60px 0;
	position: relative;
	background-color: ${color.orange3};

	@media (min-width: 576px) {
		padding: 100px 0;
	}
`;

const Iconbox = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;

	svg {
		height: 100%;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: center;

	@media (min-width: 992px) {
		justify-content: flex-start;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 570px;

	@media (min-width: 992px) {
		width: 60%;

		h2,
		p {
			max-width: 570px;
		}
	}

	h2,
	p {
		text-align: center;

		@media (min-width: 992px) {
			text-align: left;
		}
	}

	h2 {
		padding-bottom: 40px;
	}
`;

const Imagebox = styled.div`
	display: none;
	align-items: center;
	width: 100%;
	max-width: 600px;

	@media (min-width: 992px) {
		display: flex;
	}

	.gatsby-image-wrapper {
		width: 100%;
	}
`;

const Conclusion = ({ content }) => {
	return (
		<Wrapper>
			<Iconbox>
				<OvalSVG />
			</Iconbox>
			<Container>
				<Flex>
					<Content>
						<h2>{content.header}</h2>
						<p>{content.text}</p>
					</Content>
					<Imagebox>
						<Image filename={content.image} />
					</Imagebox>
				</Flex>
			</Container>
		</Wrapper>
	);
};

export default Conclusion;
