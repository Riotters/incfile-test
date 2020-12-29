import React from "react";
import styled from "styled-components";
import Image from "../atoms/image/image_nobase64";
import Container from "../container";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	padding-top: 100px;
	overflow-x: hidden;
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
	order: 2;

	@media (min-width: 992px) {
		width: 60%;
		padding-top: 230px;
		align-items: flex-start;
		order: 1;
	}

	h1 {
		width: 100%;
		text-align: center;
		padding-bottom: 40px;

		@media (min-width: 992px) {
			text-align: left;
			padding-bottom: 20px;
		}

		@media (min-width: 1200px) {
			max-width: ${(props) =>
				props.headlineWidth ? props.headlineWidth : "480"}px;
		}
	}

	p {
		margin-bottom: 33px;
		text-align: center;

		@media (min-width: 1200px) {
			text-align: left;
			max-width: ${(props) =>
				props.headlineWidth ? props.headlineWidth : "480"}px;
		}
	}
`;

const ImageContainer = styled.div`
	max-width: 950px;
	width: 100%;
	order: 1;

	@media (max-width: 991px) {
		transform: translateX(30px);
	}

	@media (min-width: 992px) {
		width: 70%;
		position: absolute;
		top: 5%;
		right: -20%;
		-ms-transform: translate(-12%, 0);
		transform: translate(0, 0);
		display: flex;
		order: 2;
	}

	@media screen and (min-width: 1550px) {
		width: ${(props) => (props.imageWidthLG ? props.imageWidthLG : "65")}%;
		top: 15px;
		right: ${(props) =>
			props.imageOffsetRightLG ? props.imageOffsetRightLG : "-15"}%;
	}
	.gatsby-image-wrapper {
		width: 100%;
		img {
			object-fit: contain !important;
		}
	}
`;

const Top = ({
	children,
	imageName,
	imageAlt,
	headlineWidth,
	imageWidthLG,
	imageOffsetRightLG
}) => (
	<Wrapper>
		{/*<IconMap>*/}
		{/*{arrayMap[stateName]}*/}
		{/*</IconMap>*/}

		<Container>
			<Content>
				{/* <VisibilitySensor partialVisibility once>
          {({ isVisible }) => ( */}
				<TextContainer
					//className={isVisible ? "slideRight enter" : "slideRight"}
					headlineWidth={headlineWidth}
				>
					{children}
				</TextContainer>
				{/* )}
        </VisibilitySensor> */}

				<ImageContainer
					imageWidthLG={imageWidthLG}
					imageOffsetRightLG={imageOffsetRightLG}
				>
					<Image filename={imageName} alt={imageAlt} />
				</ImageContainer>
			</Content>
		</Container>
	</Wrapper>
);

export default Top;

Top.defaultProps = {
	OvalSVGFile: Map,
};
