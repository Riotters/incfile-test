import React, { useState } from "react";
import styled from "styled-components";
//import { Tabs, Panel, useTabState } from "@bumaga/tabs";
// import { motion } from "framer-motion"
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Container from "../../container";
import { color } from "../../atoms/styles/colors";
import Tab1SVG from "../../../images/icons/20200406_icon.inline.svg";
import Tab2SVG from "../../../images/icons/20200406_icon2.inline.svg";
import Tab3SVG from "../../../images/icons/20200406_icon3.inline.svg";
import Tab4SVG from "../../../images/icons/20200406_icon4.inline.svg";
import Tab5SVG from "../../../images/icons/20200406_icon5.inline.svg";
import CheapLLC from "../../../images/icons/form-an-llc-without-breaking-the-bank.inline.svg";
import TexasSVG from "../../../images/icons/texas.inline.svg";
import DelawareSVG from "../../../images/icons/delaware.inline.svg";
import NevadaSVG from "../../../images/icons/nevada.inline.svg";
import FloridaSVG from "../../../images/icons/florida.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import LLCLimitedSVG from "../../../images/icons/llc-limited-liability-protection.inline.svg";
import LLCTaxesSVG from "../../../images/icons/llc-taxes-and-tax-returns.inline.svg";
import { Collapse } from "react-collapse";
import VisibilitySensor from "../../../components/VisibilitySensor";
import ArrowLink from "../../molecules/buttons/text";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
import Circle from "../../atoms/icons/circle";
import Table from "../tables/the-c-corp-table";
import Table2 from "../tables/the-nonprofit-corp-table";
import AccordionWithCheckmark from "../accordion/accordion-with-checkmark";
import AccordionWithCounting from "../accordion/accordion-with-counting";
import LightBoxVideo from "../../../components/LightBox";

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

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	max-width: 670px;
	grid-gap: 8px;
	margin-bottom: 32px;
`;

const ColorBox = styled.div`
	display: flex;
	background-color: ${color.orange3};
	border-radius: 5px;
	padding: 35px 35px 35px 88px;
	position: relative;

	&:first-child {
		border-radius: 15px 5px 5px 5px;
	}

	&:nth-child(2) {
		border-radius: 5px 15px 5px 5px;
	}

	&:nth-last-child(2) {
		border-radius: 5px 5px 5px 15px;
	}

	&:last-child {
		border-radius: 5px 5px 15px 5px;
	}
`;

const ColorboxIcon = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	width: 80px;
	position: absolute;
	top: 50%;
	left: 8px;
	transform: translateY(-50%);
`;

const Text = styled.span`
	display: inline;
	font-family: Avenir, sans-serif;
	font-size: 20px;
	font-weight: 900;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: ${color.black};
`;

// const cn = (...args) => args.filter(Boolean).join(" ");

// const Tab = ({ children }) => {
// 	const { isActive, onClick } = useTabState();

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
	<Tab1SVG />,
	<Tab2SVG />,
	<Tab3SVG />,
	<Tab4SVG />,
	<Tab5SVG />,
	<CheapLLC />,
];
const iconsState = [
	<TexasSVG />,
	<DelawareSVG />,
	<NevadaSVG />,
	<FloridaSVG />,
];

const CCorpTabs = ({ layout, columns, content }) => {
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
									<Tab>
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
								<Heading size="3">{content.content[0].header}</Heading>
								<Paragraph big bottomMargin="48">
									{content.content[0].text}
								</Paragraph>
								<Heading size="3">{content.content[0].header2}</Heading>
								<Paragraph big bottomMargin="48">
									{content.content[0].text2}
								</Paragraph>
								<AccordionWithCheckmark
									content={content.content[0].list}
									tab
									bottomMargin="40"
								/>
								<Heading size="3">{content.content[0].header3}</Heading>
								<LightBoxVideo
									thumbnailVideo="how-to-start-an-llc-2379"
									videoID="R_oIgzYh7NU"
									bottomMargin="40"
								/>
								<Paragraph big bottomMargin="48">
									{content.content[0].text3}
								</Paragraph>
								<AccordionWithCounting
									content={content.content[0].list2}
									tab
									bottomMargin="40"
								/>
								<Heading size="3">{content.content[0].header4}</Heading>
								<Paragraph big bottomMargin="0">
									{content.content[0].text4}
								</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">{content.content[1].header}</Heading>
								<Paragraph big>{content.content[1].text}</Paragraph>
								<Paragraph big bottomMargin="24">
									{content.content[1].text2}
								</Paragraph>
								<ArrowLink content={content.content[1].link} />
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel3" layout={layout}>
								<Heading size="3">{content.content[2].header}</Heading>
								<Paragraph big bottomMargin="56">
									{content.content[2].text}
								</Paragraph>
								<Grid>
									{content.content[2].boxes.map((box, i) => (
										<ColorBox>
											<ColorboxIcon>{iconsState[i]}</ColorboxIcon>
											<Text>{box}</Text>
										</ColorBox>
									))}
								</Grid>
								<ArrowLink content={content.content[2].link} />
								<Paragraph big bottomMargin="56">
									{content.content[2].text2}
								</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel4" layout={layout}>
								<Heading size="3">{content.content[3].header}</Heading>
								<Paragraph big>{content.content[3].text}</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel4" layout={layout}>
								<Heading size="3">{content.content[4].header}</Heading>
								<Paragraph big>{content.content[4].text}</Paragraph>
								<IconListColorBox
									color={color.blue3}
									content={content.content[4].box}
									rounded
									bottomMargin="48"
								/>
								<Paragraph big>{content.content[4].text2}</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel6" layout={layout}>
								<Heading size="3">{content.content[5].header}</Heading>
								<Paragraph big>{content.content[5].text}</Paragraph>
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
