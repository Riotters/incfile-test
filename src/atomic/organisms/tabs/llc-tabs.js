import React, { useState } from "react";
import styled from "styled-components";
//import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import parse from "html-react-parser";
// import { motion } from "framer-motion"
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Container from "../../container";
import ArrowLink from "../../molecules/buttons/text";
import GeneralSVG from "../../../images/icons/general-information.inline.svg";
import WhenChooseSVG from "../../../images/icons/when-choose-an-llc.inline.svg";
import ProsAndConsSVG from "../../../images/icons/pros-and-cons-of-llc.inline.svg";
import RequirementsSVG from "../../../images/icons/llc-requirements.inline.svg";
import TypesSVG from "../../../images/icons/types-of-llc.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Collapse } from "react-collapse";
import { color } from "../../atoms/styles/colors";
import IconSVG from "../../../images/icons/generally-arrow.inline.svg";
import Icon2SVG from "../../../images/icons/llc-operating-agreements.inline.svg";
import Icon3SVG from "../../../images/icons/llc-annual-reports.inline.svg";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import VisibilitySensor from "../../../components/VisibilitySensor";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import LightBoxVideo from "../../../components/LightBox";
import ContentButton from "../../molecules/buttons/button";
import Accordion from "../../organisms/accordion/accordion";
import PlusSVG from "../../../images/icons/plus.inline.svg";
import Advantages from "../../organisms/accordion/accordion-with-checkmark";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
	}

	.accordion-panel {
		overflow: hidden;
	}

	.react-tabs {
		display: flex;
		flex-direction: column;
		justify-content: space-beteen;
		width: 100%;

		@media (min-width: 769px) {
			flex-direction: row;
		}

		&__tab-list {
			list-style: none;
			display: flex;
			overflow: auto;

			@media (min-width: 769px) {
				flex-direction: column;
				overflow: visible;
			}
		}

		&__tab {
			padding: 0;

			&--selected {
				button {
					border-bottom: 2px solid ${color.blue1};

					span {
						font-weight: 600;
						color: ${color.blue1};
					}

					@media (min-width: 769px) {
						box-shadow: 0 40px 80px 0 #e6e6e6;
						z-index: 1;
						border-bottom: 0px;

						span {
							color: #4e4e4e;
						}

						.tabArrow {
							opacity: 1;
							transform: translateX(0);
						}
					}
				}
			}
		}

		&__tab-panel {
			display: none;

			&--selected {
				display: block;
			}
		}
	}

	.ReactCollapse--collapse {
		width: 100%;
		transition: height 500ms;
		margin-left: auto;

		@media (min-width: 769px) {
			max-width: ${(props) => (props.layout !== "grid" ? "55%" : "")};
		}

		@media (min-width: 1200px) {
			max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
		}
	}
`;

const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media (min-width: 769px) {
		max-width: ${(props) => (props.layout !== "grid" ? "40%" : "")};
	}

	@media (min-width: 1200px) {
		max-width: ${(props) => (props.layout !== "grid" ? "370px" : "")};
	}
`;

const Sticky = styled.div`
	display: ${(props) => (props.layout === "grid" ? "grid" : "flex")};
	flex-direction: ${(props) => (props.layout !== "grid" ? "column" : "")};
	grid-template-columns: ${(props) =>
		props.columns ? `repeat(${props.columns}, 1fr)` : ""};
	grid-gap: ${(props) => (props.layout === "grid" ? "30px" : "")};
	position: ${(props) => (props.layout !== "grid" ? "sticky" : "")};
	top: 100px;
`;

const PanelWrapper = styled.article`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
	margin-left: auto;
	padding-top: 24px;
`;

const Button = styled.button`
	height: 48px;
	width: 100%;
	line-height: 48px;
	color: #4e4e4e;
	background: transparent;
	display: flex;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	margin-bottom: 7px;
	border: none;
	z-index: 0;

	@media (min-width: 769px) {
		box-shadow: 0 20px 30px 0 #e6e6e6;
		transition: box-shadow 0.3s ease;
		background: #fff;
		border-radius: 5px;
		height: 78px;
		line-height: 78px;
	}
`;

const Icon = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 50px;
	opacity: 0.75;

	@media (min-width: 769px) {
		display: flex;
	}

	@media (min-width: 992px) {
		width: 80px;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 0 16px;

	@media (min-width: 769px) {
		border-left: 1px solid #f4f4f4;
		padding: 0 24px;
	}

	span {
		color: #4e4e4e;
		font-family: Avenir;
		font-size: 16px;
		white-space: nowrap;
	}

	.tabArrow {
		display: none;
		opacity: 0;
		transform: translateX(-3px);
		transition: opacity 0.3s ease, transform 0.3s ease;

		@media (min-width: 769px) {
			display: flex;
		}

		svg {
			path {
				fill: #1d1d1d;
			}
		}
	}

	&:hover {
		.tabArrow {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;

const Arrow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 12px;
	width: 12px;
	margin-right: 10px;

	svg {
		path {
			transition: fill 0.3s ease;
			fill: #5088fd;
		}
	}
`;

const Boxes = styled.div`
	display: flex;
	display: grid;
	grid-template-columns: 100%;
	grid-gap: 10px;
	width: 100%;
	position: relative;
	margin-bottom: 32px;

	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const CircleWhite = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
	width: 64px;
	background-color: ${color.white};
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	&::before {
		content: "";
		height: 48px;
		width: 48px;
		background-color: ${color.orange1};
		border-radius: 50%;
		position: absolute;
		z-index: -1;
	}
`;

const BlueBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 153px;
	border-radius: 24px 0 0 24px;
	background-color: ${color.blue3};
`;

const YellowBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 153px;
	border-radius: 0 24px 24px 0;
	background-color: ${color.yellow3};
`;

// const cn = (...args) => args.filter(Boolean).join(" ");

// const Tab = ({ children }) => {
// 	const { isActive, onClick } = useTabState();

// 	const scrollTop = (l) => {
// 		const el = document.getElementById(l);
// 		const offset = 100;
// 		const bodyRect = document.body.getBoundingClientRect().top;
// 		const elementRect = el.getBoundingClientRect().top;
// 		const elementPosition = elementRect - bodyRect;
// 		const offsetPosition = elementPosition - offset;

// 		if (typeof window !== "undefined") {
// 			window.scrollTo({
// 				top: offsetPosition,
// 			});
// 		}
// 	};

// 	return (
// 		<Button
// 			className={cn("accordion-tab", isActive && "active")}
// 			onClick={() => {
// 				onClick();
// 				scrollTop("tabs-wrapper");
// 			}}
// 		>
// 			{children}
// 		</Button>
// 	);
// };

const scrollTop = (l) => {
	const el = document.getElementById(l);
	const offset = 100;
	const bodyRect = document.body.getBoundingClientRect().top;
	const elementRect = el.getBoundingClientRect().top;
	const elementPosition = elementRect - bodyRect;
	const offsetPosition = elementPosition - offset;

	if (typeof window !== "undefined") {
		window.scrollTo({
			top: offsetPosition,
		});
	}
};

const icons = [
	<GeneralSVG />,
	<WhenChooseSVG />,
	<ProsAndConsSVG />,
	<RequirementsSVG />,
	<TypesSVG />,
];

const CCorpTabs = ({ layout, columns, content, clickOpenModal }) => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Container>
			<Wrapper id="tabs-wrapper" layout={layout}>
				{/* <VisibilitySensor partialVisibility once>
				{({ isVisible }) => ( */}
				<Tabs
					forceRenderTabPanel="true"
					selectedIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
				>
					<TabsWrapper
						//className={isVisible ? "slideUp enter" : "slideUp"}
						layout={layout}
					>
						<Sticky layout={layout} columns={columns}>
							<TabList>
								{content.panels.map((panel, i) => (
									<Tab key={i}>
										<Button
											onClick={() => {
												scrollTop("tabs-wrapper");
											}}
										>
											<Icon>{icons[i]}</Icon>
											<Content>
												<span>{panel}</span>
												<Arrow className="tabArrow">
													<ArrowSVG />
												</Arrow>
											</Content>
										</Button>
									</Tab>
								))}
							</TabList>
						</Sticky>
					</TabsWrapper>
					{/* <Panels> */}
					<Collapse isOpened={true}>
						<TabPanel>
							<PanelWrapper
								//className={isVisible ? "slideUp enter panel1" : "slideUp panel1"}
								layout={layout}
							>
								<Paragraph big>{content.content[0].text}</Paragraph>
								<IconTextColorBox
									color={color.babyblue3}
									Icon={IconSVG}
									content={content.content[0].box}
									bottomMargin="48"
									rounded
									curve
								/>
								<Heading size="3">{content.content[0].header}</Heading>
								<LightBoxVideo
									thumbnailVideo="what-is-an-llc-7280"
									videoID="ZuadTwgek5U"
								/>
								<Paragraph big topMargin="32">
									{content.content[0].text2}
								</Paragraph>
								<Boxes>
									<BlueBox>
										<Heading size="4" bottomMargin="8">
											Pass-Through Taxation
										</Heading>
										<Paragraph bottomMargin="0">
											of a sole proprietorship
										</Paragraph>
									</BlueBox>
									<CircleWhite>
										<PlusSVG />
									</CircleWhite>
									<YellowBox>
										<Heading size="4" bottomMargin="8">
											Limited Liability
										</Heading>
										<Paragraph bottomMargin="0">of a corporation</Paragraph>
									</YellowBox>
								</Boxes>
								<Paragraph big>{content.content[0].text3}</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">{content.content[1].header}</Heading>
								<Paragraph big>{content.content[1].text}</Paragraph>
								<Paragraph big mixed>
									{parse(content.content[1].text2)}
								</Paragraph>
								<ContentButton
									content={content.content[1].button}
									onClick={clickOpenModal}
									theme="primary56"
									margin="0 auto 0 0"
									arrow
								/>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">{content.content[2].header}</Heading>
								<Paragraph big>{content.content[2].text}</Paragraph>
								<Heading size="3">{content.content[2].header2}</Heading>
								<Advantages content={content.content[2].advantages} tab />
								<Heading size="3" topMargin="32">
									{content.content[2].header3}
								</Heading>
								<Advantages
									content={content.content[2].disadvantages}
									tab
									red
								/>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">{content.content[3].header}</Heading>
								<Paragraph big>{content.content[3].text}</Paragraph>
								<IconTextColorBox
									color={color.yellow3}
									Icon={Icon2SVG}
									content={content.content[3].box}
									bottomMargin="48"
									rounded
								/>
								<Paragraph big>{content.content[3].text2}</Paragraph>
								<IconTextColorBox
									color={color.blue3}
									Icon={Icon3SVG}
									content={content.content[3].box2}
									bottomMargin="48"
									rounded
									curve
								/>
								<Paragraph big mixed>
									{parse(content.content[3].text3)}
								</Paragraph>
								<ArrowLink content={content.content[3].link} />
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Accordion content={content.content[4].faq} tab />
							</PanelWrapper>
						</TabPanel>
					</Collapse>
					{/* </Panels> */}
				</Tabs>
				{/* )}
			</VisibilitySensor> */}
			</Wrapper>
		</Container>
	);
};
export default CCorpTabs;
