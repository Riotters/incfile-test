import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { shadow } from "../../../atoms/styles/shadows";
import { color } from "../../../atoms/styles/colors";
import { Paragraph } from "../../../atoms/typography/paragraph";

const EtsyLinks = () => (
	<Wrapper>
		<TextCenterLayout
			headlineWidth={770}
			textWidth={770}
			headline="Social Media and Discussion Groups for Your Landscaping Business"
			text="Connecting with other business owners in your industry can be incredibly helpful. Here are some of the best social media and discussion groups:"
		/>

		<Container>
			<LinksContainer>
				<LinkItem>
					<PathLink
                        externalLink
						to="https://www.lawnsite.com/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Lawnsite
					</PathLink>
					<Paragraph style={{ marginTop: "20px" }} bottomMargin={0}>
						One of the busiest landscaping forums
					</Paragraph>
				</LinkItem>

				<LinkItem>
					<PathLink
                        externalLink
						to="http://www.groundtradesxchange.com/forums/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Ground Trades Xchange
					</PathLink>
					<Paragraph style={{ marginTop: "20px" }} bottomMargin={0}>
						A forum for landscape design and installation
					</Paragraph>
				</LinkItem>

				<LinkItem>
					<PathLink
                        externalLink
						to="https://www.lawnserviceforum.com/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Lawn Service Forum
					</PathLink>
					<Paragraph style={{ marginTop: "20px" }} bottomMargin={0}>
						A discussion group for lawn maintenance
					</Paragraph>
				</LinkItem>

				<LinkItem>
					<PathLink
                        externalLink
						to="http://www.gopherforum.com/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Gopher Lawn Care Business Forum
					</PathLink>
					<Paragraph style={{ marginTop: "20px" }} bottomMargin={0}>
						Lots of great resources for starting a lawn care business
					</Paragraph>
				</LinkItem>

				<LinkItem>
					<PathLink
                        externalLink
						to="http://lawncare.forumsmotion.com/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Lawncare & Landscaping Forum
					</PathLink>
					<Paragraph style={{ marginTop: "20px" }} bottomMargin={0}>
						A totally free forum for the residential and commercial lawn care
						and landscaping enthusiast
					</Paragraph>
				</LinkItem>

				<LinkItem>
					<PathLink
                        externalLink
						to="https://www.contractortalk.com/f7/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Contractor Talk — Landscaping
					</PathLink>
					<Paragraph style={{ marginTop: "20px" }} bottomMargin={0}>
						A sub-forum on the popular Contractor Talk website
					</Paragraph>
				</LinkItem>
			</LinksContainer>
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	padding-top: 100px;
`;

const LinksContainer = styled.div`
	width: 100%;
	margin: 100px auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (min-width: 1100px) {
		width: 1000px;
	}
`;

const LinkItem = styled.div`
	margin: 0 auto;
	padding: 28px 40px 28px 40px;
	background-color: white;
	box-shadow: ${shadow.white1};
	width: 100%;
	margin-bottom: 30px;

	@media (min-width: 470px) {
		width: 470px;
	}

	@media (min-width: 1100px) {
		margin-left: 15px;
		margin-right: 15px;
	}
`;

export default EtsyLinks;
