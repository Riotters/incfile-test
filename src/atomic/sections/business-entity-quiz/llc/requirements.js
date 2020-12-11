import React from "react";
import Container from "../../../container";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import { color } from "../../../../components/styles/colors";
import styled from "styled-components";
import GreenOval from "../../../../images/ovals/bottom-left-transparent-green2.inline.svg";
import { Link } from "gatsby";
import { Heading } from "../../../atoms/typography/heading";
const SettingBusiness = () => (
	<GreenContainer>
		<Oval>
			<GreenOval />
		</Oval>

		<TextCenterLayout
			headline="Understanding LLC Requirements"
			headlineWidth={770}
			textWidth={770}
			text="LLCs, unlike corporations, are not required to hold annual meetings and keep minutes, nor are they subject to the more stringent record keeping required 
            of corporations. But there are certain LLC requirements you'll need to keep in mind."
		/>

		<Container>
			<ImageBoxes>
				<TopImageBox image="permits-licences" color={color.orange3}>
					<Heading size={3} template={4}>
						LLC Operating Agreements
					</Heading>
					<p>
						The governing document of the LLC is called an operating agreement,
						and it is within this document that the members lay out all
						important provisions, such as standards for LLC governance,
						ownership parameters, and rules around member changes (adding or
						removing members, or what happens in case of death or incapacity of
						a member). The operating agreement is an internal document and is an
						agreement amongst the members or owners, which means it is not
						recorded with the state.
					</p>
				</TopImageBox>

				<TopImageBox image="sign-932" color={color.purple3}>
					<Heading size={3} template={4}>
						LLC Annual Reports
					</Heading>
					<p>
						In many states, LLCs must file an annual or biennial report with
						their Secretary of State. Failing to file can result in your
						business being dissolved. To learn more about annual reports (or to
						have Incfile file yours for you), click here, or view our LLC state
						guides to learn about specific requirements for your state.
					</p>
				</TopImageBox>
			</ImageBoxes>
		</Container>
	</GreenContainer>
);

const GreenContainer = styled.div`
	padding-bottom: 100px;
	padding-top: 100px;
	position: relative;
`;

const ImageBoxes = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	padding-top: 112px;
	width: 100%;
	max-width: 970px;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 970px) {
		margin: 0 auto;
	}
`;

const Oval = styled.div`
	position: absolute;
	left: 0;
	bottom: 164px;
	width: 100%;

	@media (min-width: 570px) {
		width: 570px;
	}
`;

export default SettingBusiness;
