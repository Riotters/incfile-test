import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import PathLink from "../../../molecules/buttons/path";
import { shadow } from "../../../atoms/styles/shadows";
import { color } from "../../../atoms/styles/colors";
import UsefulTools from "../../../partials/useful-tools";
import { toolsList } from "../../../../static/type-of-business/construction-company";
import Curve from "../../../atoms/shapes/curve";
import BabyBlueOval from "../../../../images/ovals/top-left-transparent-babyblue.inline.svg";
import OvalSvg from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";

const ToolsAndLinks = () => (
	<Wrapper>
		<Oval>
			<BabyBlueOval />
		</Oval>
		<Oval2>
			<BabyBlueOval />
		</Oval2>
		<Oval3>
			<OvalSvg />
		</Oval3>
		<Container>
			<TextCenterLayout
				headline="Groups and Forums for Your Construction Business"
				text="Here are some useful places where you can connect with other construction entrepreneurs."
			/>

			<LinksContainer>
				<LinkItem>
					<PathLink
						to="https://www.contractortalk.com//"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Contractor Talk forums
					</PathLink>
				</LinkItem>

				<LinkItem>
					<CurveWrapper>
						<Curve color={color.orange1} />
					</CurveWrapper>
					<PathLink
						to="https://forums.jlconline.com/forums/forum"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Journal of Light Construction forum
					</PathLink>
				</LinkItem>

				<LinkItem>
					<PathLink
						to="https://www.facebook.com/AGCofA/"
						textColor={color.blue1}
						hoverColor={color.orange1}
						arrowColor={color.blue1}
					>
						Facebook Associated General Constructors of America
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
	background-image: linear-gradient(
		to top,
		rgba(255, 255, 255, 0) 50%,
		#eef9fe
	);
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
	position: relative;
`;

const CurveWrapper = styled.div`
	position: absolute;
	right: -24px;
	top: -24px;
`;

const Oval = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const Oval2 = styled.div`
	position: absolute;
	top: calc(50% - 210px);
	right: 0;
	width: 100%;
	transform: scaleX(-1);

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const Oval3 = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;
export default ToolsAndLinks;
