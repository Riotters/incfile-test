import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { shadow } from "../../../atoms/styles/shadows";
import { color, gradient } from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import { toolsList } from "../../../../static/type-of-business/brewery-business";
import OvalSvg from "../../../../images/ovals/top-right-transparent-yellow.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
	<Wrapper>
		<Oval>
			<OvalSvg />
		</Oval>
		<Oval2>
			<OvalSvg2 />
		</Oval2>
		<TextCenterLayout
			headlineWidth={770}
			textWidth={770}
			headline="Groups and Forums for Your Brewery Business"
			text="Here are some useful places where you can connect with other brewery entrepreneurs:"
		/>

		<Container>
			<LinksContainer>
				<LinkItem>
					<PathLink
						to="https://www.beeradvocate.com/community/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						BeerAdvocate Forums
					</PathLink>
				</LinkItem>

				<LinkItem>
					<PathLink
						to="https://discussions.probrewer.com/forum/probrewer-message-board?29-ProBrewer-Message-Board="
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						ProBrewer Message Boards
					</PathLink>
				</LinkItem>

				<LinkItem>
					<PathLink
						to="https://www.brewersassociation.org/forums/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Brewers Association Forums
					</PathLink>
				</LinkItem>
			</LinksContainer>
		</Container>

		<UsefulTools
			toolsList={toolsList.tools}
			headlineText={toolsList.headlineText}
			description={toolsList.description}
		/>
	</Wrapper>
);

const Wrapper = styled.div`
	padding-top: 100px;
	margin-bottom: 200px;
	position: relative;
	background-image: ${gradient.orange3};
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

const Oval = styled.div`
	position: absolute;
	top: calc(50% - 360px);
	right: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval2 = styled.div`
	position: absolute;
	bottom: 150px;
	left: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

export default ToolsAndLinks;
