import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import LightBoxVideo from "../../../components/LightBox";

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;

	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 16px;
		overflow: unset;

		@media (min-width: 576px) {
			padding: 32px;
		}
	}

	h2 {
		text-align: left;
	}
`;

const ContentCard = ({ className }) => {
	return (
		<Wrapper className={className}>
			<Whitebox className="card" overflow>
				<Heading size={1} template={2} left>
					Video Library
				</Heading>
				<Heading size={2} template={3} left topMargin="48" bottomMargin="48">
					How easy is forming an LLC or corporation
				</Heading>
				<Paragraph big bottomMargin="24">
					Shows how easy and inexpensive it is to have your very own corporation
					or LLC. Just watch the simple 3 step process and you will have
					completed all the steps to forming your new business entity.
				</Paragraph>
				<LightBoxVideo
					thumbnailVideo="what-is-an-s-corp-7321"
					videoID="97238919"
					vimeo
				/>
				<Heading size={2} template={3} left topMargin="48" bottomMargin="48">
					Protect your personal assets
				</Heading>
				<Paragraph big bottomMargin="24">
					By incorporating your business, you are essentially drawing a line of
					demarkation between your personal assets and the assets owned by the
					business. After all, who wants their hard-earned savings or child’s
					college fund wiped out due to some unforeseen trouble with a business
					venture?
				</Paragraph>
				<LightBoxVideo
					thumbnailVideo="how-to-start-a-consulting-business-9829"
					videoID="144693528"
					vimeo
				/>
				<Heading size={2} template={3} left topMargin="48" bottomMargin="48">
					Learn how to save money with incfile
				</Heading>
				<Paragraph big bottomMargin="24">
					There are a multitude of companies on the web that perform the
					function of starting new entities. You will pay less to get more value
					with Incfile, view some distinguishing features that separate us from
					other companies.
				</Paragraph>
				<LightBoxVideo
					thumbnailVideo="starting-a-cashless-business-4929"
					videoID="117685402"
					vimeo
				/>
			</Whitebox>
		</Wrapper>
	);
};

export default ContentCard;
