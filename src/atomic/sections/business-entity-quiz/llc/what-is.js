import React from "react";
import styled from "styled-components";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import { gradient } from "../../../atoms/styles/colors";
import ContentCenter from "../../../partials/content-center";
import LightBoxVideo from "../../../../components/LightBox";

const ContainerWrapper = styled.div`
	background: rgb(255, 255, 255);
	background-image: ${gradient.orange3};
	padding-bottom: 100px;
	position: relative;
	padding-top: 120px;
`;

const TitleBox = styled.div`
	width: 100%;
	position: relative;
	max-width: 750px;

	@media (min-width: 750px) {
		margin: 0 auto;
	}

	p {
		text-align: center;
	}
`;

const OvalCenter = styled.div`
	position: absolute;
	right: 0;
	top: 40%;
	transform: rotate(180deg);
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const ValidatingBusinessIdea = () => (
	<ContainerWrapper>
		<OvalCenter>
			<OvalSvg />
		</OvalCenter>

		<ContentCenter>
			<TitleBox>
				<Heading size={2}>What is an LLC?</Heading>
				<Paragraph big>
					In the United States, a limited liability company is a business entity
					type that combines the pass-through taxation of a partnership or sole
					proprietorship with the limited liability of a corporation, creating
					the best of both worlds for business owners. LLCs have rapidly become
					one of the most popular business structures for new and small
					businesses, largely because they are considered to be simpler and more
					flexible than a corporation.
				</Paragraph>
				<Paragraph big bottomMargin={80}>
					When you form an LLC, your business becomes its own legal entity, with
					separate debts and legal matters. However, LLCs are still tied to your
					personal taxes.
				</Paragraph>
				<LightBoxVideo
					thumbnailVideo="what-is-an-llc-7280"
					videoID="ZuadTwgek5U"
				/>
			</TitleBox>
		</ContentCenter>
	</ContainerWrapper>
);

export default ValidatingBusinessIdea;
