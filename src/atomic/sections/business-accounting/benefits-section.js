import styled from "styled-components";
import React from "react";
import ContentCenter from "../../partials/content-center";
import { gradient } from "../../../components/styles/colors";
import InfoCardWithImage from "../../organisms/cards/info-card-with-image";

const Wrapper = styled.div`
	position: relative;
	padding: 32px 0;

	@media (min-width: 576px) {
		padding: 100px 0;
	}

	background: ${gradient.blue3};
`;

const GridWrapper = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-gap: 30px;

	@media screen and (min-width: 768px) {
		grid-template-columns: auto auto;
	}
`;

const BusinessAccountingBenefitsSection = ({ content }) => (
	<Wrapper>
		<ContentCenter contentWidth={970}>
			<GridWrapper>
				{content.map((item, i) => (
                    <InfoCardWithImage
                        key={i}
						backgroundColor={item.backgroundColor}
						title={item.title}
						content={item.content}
						imageName={item.imageName}
						headerSize={2}
					/>
				))}
			</GridWrapper>
		</ContentCenter>
	</Wrapper>
);

export default BusinessAccountingBenefitsSection;
