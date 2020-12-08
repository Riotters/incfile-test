import React from "react";
import styled from "styled-components";
import Image from "../image_nobase64";
import Container from "../container";
import OvalSVG from "../../images/oval.inline.svg";
import Button from "../button";
import VisibilitySensor from "../VisibilitySensor";

const Wrapper = styled.div`
	padding-top: 50px;
	position: relative;

	@media (min-width: 769px) {
		padding-top: 190px;
		padding-bottom: 150px;
	}
`;

const Oval = styled.div`
	width: 90%;
	max-width: 350px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 0;
	overflow: hidden;

	@media (min-width: 769px) {
		width: 50%;
		max-width: 850px;
	}

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		path {
			transform: matrix(1, 0, 0, -1, -115, 777);
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-top: 50px;

	@media (min-width: 769px) {
		width: 50%;
		align-items: flex-start;
	}

	h1 {
		width: 100%;
		max-width: 480px;
		text-aling: center;
		padding-bottom: 40px;

		@mnedia (min-width: 769px) {
			text-aling: left;
			padding-bottom: 20px;
		}
	}

	p {
		max-width: 470px;
		margin-bottom: 33px;
	}
`;

const ImageContainer = styled.div`
	display: none;
	width: 50%;
	padding-left: 60px;

	@media (min-width: 769px) {
		display: flex;
	}

	.gatsby-image-wrapper {
		width: 100%;
		max-width: 400px;

		img {
			object-fit: contain !important;
		}
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 576px) {
		flex-direction: row;
	}

	a {
		@media (max-width: 576px) {
			margin-bottom: 15px;
			margin-left: 0;
		}
	}
`;

const Top = ({ headline, text, imageName, imageAlt }) => (
	<Wrapper>
		{/* <VisibilitySensor partialVisibility once>
			{({ isVisible }) => ( */}
		<Oval
		// className={isVisible ? "scaleUp enter" : "scaleUp"}
		>
			<OvalSVG />
		</Oval>
		{/* )}
		</VisibilitySensor> */}
		<Container>
			<Content>
				{/* <VisibilitySensor partialVisibility once>
          {({ isVisible }) => ( */}
				<TextContainer
				//className={isVisible ? "slideRight enter" : "slideRight"}
				>
					<h1>{headline}</h1>
					<p>{text}</p>
					<ButtonsContainer>
						<Button theme="primary56" width="200px" arrow="yes" padding="0">
							Start Now
						</Button>
						<Button
							arrow2="yes"
							height="56px"
							width="200px"
							padding="0"
							margin="0 0 0 16px"
						>
							How it works
						</Button>
					</ButtonsContainer>
				</TextContainer>
				{/* )}
        </VisibilitySensor> */}
				<ImageContainer>
					<Image filename={imageName} alt={imageAlt} />
				</ImageContainer>
			</Content>
		</Container>
	</Wrapper>
);

export default Top;
