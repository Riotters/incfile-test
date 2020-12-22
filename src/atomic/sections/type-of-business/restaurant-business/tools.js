import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import { shadow } from "../../../atoms/styles/shadows";
import UsefulTools from "../../../partials/useful-tools";
import { toolsList } from "../../../../static/type-of-business/restaurant-business";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { color } from "../../../atoms/styles/colors";
import Curve from "../../../atoms/shapes/curve";
import { Paragraph } from "../../../atoms/typography/paragraph";
import LinkOvalSvg from "../../../../images/ovals/top-left-transparent-blue3.inline.svg";
import LinkOvalSvg2 from "../../../../images/ovals/bottom-right-transparent-blue3.inline.svg";
import ToolsOvalSvg from "../../../../images/ovals/top-right-transparent-blue2.inline.svg";
import ToolsOvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
	<Wrapper>
		<LinksWrapper>
			<LinkOval>
				<LinkOvalSvg />
			</LinkOval>

			<LinkOval2>
				<LinkOvalSvg2 />
			</LinkOval2>

			<TextCenterLayout
				headlineWidth={770}
				textWidth={770}
				headline="Discussion Groups and Forums for Your Restaurant Business"
				text="There are plenty of forums and online discussion groups for restaurant businesses. Start with these:"
			/>

			<Container>
				<LinksContainer>
					<LinkItem>
						<PathLink
							to="https://www.reddit.com/r/restaurateur/"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							Restaurateur subreddit
						</PathLink>
						<Paragraph style={{ marginBottom: 0 }}>
							An active discussion forum on the ever-popular reddit.
						</Paragraph>
					</LinkItem>

					<LinkItem>
						<CurveWrapper>
							<Curve color={color.orange1} />
						</CurveWrapper>
						<PathLink
							to="https://www.topix.com/forum/business/restaurant-management"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							Restaurant Management Forum
						</PathLink>
						<Paragraph style={{ marginBottom: 0 }}>
							Another discussion group for eatery owners.
						</Paragraph>
					</LinkItem>

					<LinkItem>
						<PathLink
							to="https://www.restaurantowner.com/public/Restaurant-Discussion-Forum.cfm"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							Restaurant Owners
						</PathLink>
						<Paragraph style={{ marginBottom: 0 }}>
							Restaurant Owners is a useful paid online resource ($29 a month)
							for owning, starting and running a restaurant. With over 40,000
							members, they have a very active discussion forum.
						</Paragraph>
					</LinkItem>
				</LinksContainer>
			</Container>

			<TextCenterLayout
				headlineWidth={770}
				textWidth={770}
				headline="Conferences for Your Restaurant Business"
				text="Of course, there are also regular conferences for restaurant businesses:"
			/>

			<Container>
				<LinksContainer>
					<LinkItem>
						<PathLink
							to="https://restaurantleadership.com/"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							The Restaurant Leadership Conference
						</PathLink>
					</LinkItem>

					<LinkItem>
						<PathLink
							to="https://www.restaurant.org/events"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							The National Restaurant Association
						</PathLink>
					</LinkItem>

					<LinkItem>
						<PathLink
							to="https://www.nrn.com/news/restaurant-trends-watch-2020"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							MUFSO Restaurant News
						</PathLink>
					</LinkItem>

					<LinkItem>
						<PathLink
							to="https://fastcasualsummit.com/"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							The Fast Casual Summit
						</PathLink>
					</LinkItem>

					<LinkItem>
						<PathLink
							to="https://www.internationalrestaurantny.com/"
							textColor={color.blue1}
							hoverColor={color.orange1}
							arrowColor={color.blue1}
						>
							The International Restaurant and Foodservice Show
						</PathLink>
					</LinkItem>
				</LinksContainer>
			</Container>
		</LinksWrapper>

		<ToolsWrapper>
			<ToolsOval>
				<ToolsOvalSvg />
			</ToolsOval>
			<ToolsOval2>
				<ToolsOvalSvg2 />
			</ToolsOval2>
			<UsefulTools
				toolsList={toolsList.tools}
				headlineText={toolsList.headlineText}
				description={toolsList.description}
			/>
		</ToolsWrapper>
	</Wrapper>
);

const ToolsWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;

const Wrapper = styled.div`
	padding-top: 100px;
	margin-bottom: 100px;
	overflow: hidden;
`;

const LinksContainer = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 30px;
	margin-top: 76px;
	margin-bottom: 76px;

	@media (min-width: 490px) {
		grid-template-columns: 470px;
	}

	@media (min-width: 992px) {
		grid-template-columns: 470px 470px;
	}
`;

const LinkItem = styled.div`
	margin: 0 auto;
	padding: 28px 40px 28px 40px;
	background-color: white;
	box-shadow: ${shadow.white1};
	width: 100%;
`;

const CurveWrapper = styled.div`
	position: absolute;
	right: -24px;
	top: -24px;
`;

const LinksWrapper = styled.div`
	background-image: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0) 40%,
		#f2f6ff
	);
	padding-bottom: 100px;
	position: relative;
`;

const LinkOval = styled.div`
	position: absolute;
	left: 0;
	top: 246px;
	width: 100%;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const LinkOval2 = styled.div`
	position: absolute;
	right: 0;
	bottom: 179px;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

const ToolsOval = styled.div`
	position: absolute;
	right: 0;
	top: 596px;
	width: 100%;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const ToolsOval2 = styled.div`
	position: absolute;
	left: 0;
	bottom: 180px;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

export default ToolsAndLinks;
