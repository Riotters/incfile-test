import React from "react";
import styled from "styled-components";
import Container from "../../../atomic/container";
import Image from "../../../atomic/atoms/image/image_nobase64";

const Wrapper = styled.div`
	position: relative;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 670px;
	padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0")}px;

	h2,
	h3 {
		text-align: left;
		//max-width: 410px;
		//padding-bottom: 40px;
	}

	& > p {
		padding-bottom: 40px;
	}
`;

const Sticky = styled.div`
	display: block;
	width: 100%;

	.gatsby-image-wrapper {
		position: sticky !important;
		top: 100px;
	}
`;

const Imagebox = styled.div`
	display: none;
	width: 100%;
	max-width: 485px;
	position: relative;

	@media (min-width: 769px) {
		display: flex;
	}

	.gatsby-image-wrapper {
		height: auto;
		width: calc(100% - 45px);
	}
`;

const Certificates = ({ children, image, imageAlt, paddingTop }) => {
	return (
		<Wrapper>
			<Container>
				<Flex>
					<Imagebox>
						<Sticky>
							<Image filename={image} alt={imageAlt} />
						</Sticky>
					</Imagebox>
					<Content paddingTop={paddingTop}>{children}</Content>
				</Flex>
			</Container>
		</Wrapper>
	);
};

export default Certificates;
