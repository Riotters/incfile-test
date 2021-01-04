import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Adventages from "../../../../components/adventages";
import Arrow from "../../../../images/arrow-circle.inline.svg";
import Image from "../../../atoms/image/image";
import { color, gradient } from "../../../atoms/styles/colors";
import { shadow } from "../../../atoms/styles/shadows";
import { Paragraph } from "../../../atoms/typography/paragraph";
import Container from "../../../container";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-center";

const Grants = () => (
	<Wrapper>
		<TextCenterLayout
			headline="Small Business Grants for Women"
			headlineWidth={770}
			textWidth={770}
			text="Before we get into business ideas for moms and other women, we want to point out some funding options available to you. Around a quarter of women seek funding for their business, and around a third of those are successful in obtaining it."
		/>

		<ContentCenter contentWidth={770}>
			<Paragraph big>When you’re applying for funding, remember:</Paragraph>
		</ContentCenter>

		<AdventagesWrapper>
			<Adventages
				text="Follow the application process to the letter, otherwise your application will be rejected"
				width="470px"
				circleBackgroundColor={color.blue1}
				circleBackgroundShadow={shadow.blue1}
				circleText={1}
			/>

			<Adventages
				text="Show the real benefits of your business in terms of local improvement, social good, generating revenue, employing others."
				width="470px"
				circleBackgroundColor={color.blue1}
				circleBackgroundShadow={shadow.blue1}
				circleText={2}
			/>

			<Adventages
				text="Show that you have a strong business plan, you’ve completed your research and you know your market"
				width="470px"
				circleBackgroundColor={color.blue1}
				circleBackgroundShadow={shadow.blue1}
				circleText={3}
			/>
		</AdventagesWrapper>

		<TextCenterLayout
			headlineWidth={770}
			textWidth={770}
			headline="Here are some places you can apply for funding for your woman-owned business:"
			text="Note that the organizations listed provide grants specifically for women. There are many other grants available to both male and female business founders."
		/>

		<Container>
			<BoxWrapper>
				<Franchise
					href="https://www.girlboss.com/foundation"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={129} height={33} className="topContent">
						<div>
							<Image filename="girlboss-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>Girlboss</Title>
							<Description>Fundation</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>

				<Franchise
					to="https://www.sba.gov/local-assistance/find?type=Women%27s%20Business%20Center&pageNumber=1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={84} height={48} className="topContent">
						<div>
							<Image filename="sba-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>SBA</Title>
							<Description>Women's Business Center</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>

				<Franchise
					to="https://ambergrantsforwomen.com/get-an-amber-grant/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={102} height={68} className="topContent">
						<div>
							<Image filename="womensnet-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>Amber Grant</Title>
							<Description>Grant</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>

				<Franchise
					to="https://www.eileenfisher.com/social-consciousness/grants-overview?country=US&currency=USD"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={83} height={41} className="topContent">
						<div>
							<Image filename="eileen-fisher-2-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>Eileen Fisher</Title>
							<Description>Women-Owned Business Grant</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>

				<Franchise
					to="https://sites.google.com/site/openmeadowsfoundation/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={80} height={80} className="topContent">
						<div>
							<Image filename="open-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>Open Meadows Foundation</Title>
							<Description>Fundation</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>

				<Franchise
					to="https://www.grantsforwomen.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={102} height={50} className="topContent">
						<div>
							<Image filename="grants-for-women-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>Grants For Women</Title>
							<Description>Grant</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>

				<Franchise
					to="https://grant.halsteadbead.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TopContent width={60} height={60} className="topContent">
						<div>
							<Image filename="eileen-fisher-logo" alt="set up a women business" />
						</div>
					</TopContent>
					<BottomContent>
						<Content>
							<Title>Eileen Fisher</Title>
							<Description>Women-Owned Business Grant</Description>
						</Content>
						<Icon>
							<Arrow />
						</Icon>
					</BottomContent>
				</Franchise>
			</BoxWrapper>
		</Container>
	</Wrapper>
);

const Wrapper = styled.section`
	background-image: ${gradient.blue3};
	padding-top: 104px;
`;

const BoxWrapper = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 72px;
	margin-top: 76px;
	margin-bottom: 76px;

	@media (min-width: 390px) {
		grid-template-columns: 370px;
	}

	@media (min-width: 768px) {
		grid-template-columns: 370px 370px;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 370px 370px 370px;
	}
`;

const Franchise = styled(Link)`
	display: block;
	width: 100%;
	border-radius: 5px;
	box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
	background-color: #ffffff;
	margin-bottom: 0px;
	transition: all 0.5s ease-in-out;

	&:hover {
		box-shadow: 0 40px 80px 0 rgba(171, 171, 171, 0.5);

		.topContent {
			opacity: 1;
			filter: grayscale(0%);
		}
	}
`;

const TopContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 140px;
	filter: grayscale(100%);
	opacity: 0.3;
	transition: all 0.5s ease-in-out;

	> div {
		width: ${(props) => props.width}px;
		height: ${(props) => props.height}px;
	}
`;

const BottomContent = styled.div`
	margin: 0 24px;
	border-top: 1px solid rgba(171, 171, 171, 0.5);
	padding-top: 16px;
	padding-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Content = styled.div``;

const Title = styled.div`
	font-weight: 900;
	font-family: "Avenir", sans-serif;
	font-size: 16px;
	line-height: 24px;
	color: #1d1d1d;
`;

const Description = styled.div`
	font-family: "Avenir", sans-serif;
	font-size: 16px;
	line-height: 24px;
	color: #4e4e4e;
`;

const Icon = styled.div`
	transform: rotate(90deg);
`;

const AdventagesWrapper = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 20px;
	margin-top: 76px;
	margin-bottom: 76px;

	@media (min-width: 490px) {
		grid-template-columns: 470px;
	}

	@media (min-width: 992px) {
		grid-template-columns: 470px 470px;
	}
`;
export default Grants;
