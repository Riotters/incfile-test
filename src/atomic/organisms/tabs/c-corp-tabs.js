import React, { useState } from "react";
import styled from "styled-components";
//import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
// import { motion } from "framer-motion"
import Container from "../../container";
import BookSVG from "../../../images/icons/book.inline.svg";
import WrenchSVG from "../../../images/icons/wrench.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Collapse } from "react-collapse";
import { color } from "../../atoms/styles/colors";
import IconSVG from "../../../images/icons/generally-arrow.inline.svg";
import IconTextColorBox from "../../molecules/text-blocks/icon-h4-text-color";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import CheckText from "../../../components/static-check/text-boxed";
import LightBoxVideo from "../../../components/LightBox";
import {PHeading} from "../../atoms/typography/p-to-heading";

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

const icons = [<BookSVG />, <WrenchSVG />];

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
								<Heading size="2" template={3} left>{content.content[0].header}</Heading>
                                <LightBoxVideo
                                    alt="what is a c corporation"
									thumbnailVideo="what-is-a-c-corporation-2737"
									videoID="BmZ7zyLd710"
									bottomMargin="32"
								/>
								<Paragraph big>{content.content[0].text}</Paragraph>
								<IconTextColorBox
									color={color.orange3}
									Icon={IconSVG}
									content={content.content[0].box}
									bottomMargin="48"
									rounded
									curve
									curveColor={color.yellow1}
									paragraphHeader
								/>
								<Paragraph big>{content.content[0].text2}</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">How Is a C Corporation Formed?</Heading>
								<Paragraph big>
									A C Corp, also known as a corporation, is a type of business
									entity that is formed and regulated on a state level. The
									corporation is formed by filing “Articles of Incorporation”
									with the Secretary of State in the state of incorporation. The
									policies, articles, cost and regulations for forming a C Corp
									vary from state-to-state. Details on exactly how to form a C
									Corporation can be found at the end of this article.
								</Paragraph>
								<Paragraph big>
									The corporation is the oldest form of business entity. It has
									long been a successful way to do business and allows groups of
									individuals to pool their resources and capital to pursue a
									common purpose, with their risk limited solely to the amount
									of stock they own. Although a C Corp is a popular business
									structure, there are other options for forming businesses in
									the US.
								</Paragraph>
								<PHeading size={4}>Chosing a C Corp</PHeading>
								<PHeading size={5}>Pros</PHeading>
								<CheckText bottomMargin="8">
									<p>Limited Liability</p>
								</CheckText>
								<CheckText bottomMargin="8">
									<p>Exist Independently of Owners</p>
								</CheckText>
								<CheckText bottomMargin="8">
									<p>Fluid Ownership</p>
								</CheckText>
								<CheckText bottomMargin="8">
									<p>Ability to Rise Money Through IPO</p>
								</CheckText>
								<CheckText bottomMargin="40">
									<p>Enhanced Corporate Credibility</p>
								</CheckText>
								<PHeading size={5}>Cons</PHeading>
								<CheckText isRed bottomMargin="8">
									<p>Different Tax Structure</p>
								</CheckText>
								<CheckText isRed bottomMargin="8">
									<p>Double Taxation Investors</p>
								</CheckText>
								<CheckText isRed bottomMargin="0">
									<p>Extensive Legal Requirements</p>
								</CheckText>
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
