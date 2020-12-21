import React, { useState } from "react";
import styled from "styled-components";
//import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
// import { motion } from "framer-motion"
import Container from "../../container";
import ProfitsSVG from "../../../images/icons/profits-and-taxes.inline.svg";
import TaxSVG from "../../../images/icons/tax-rates.inline.svg";
import StockSVG from "../../../images/icons/stock-dividends.inline.svg";
import LegalSVG from "../../../images/icons/legal-requirements.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Collapse } from "react-collapse";
import { color } from "../../atoms/styles/colors";
import IconListColorBox from "../../molecules/text-blocks/icon-h4-list-color";
//import VisibilitySensor from "../../../components/VisibilitySensor";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";

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

const cn = (...args) => args.filter(Boolean).join(" ");

const CustomTab = ({ children }) => {
	//const { isActive, onClick } = useState();

	return (
		<Tab>
			<Button
			//className={cn("accordion-tab", isActive && "active")}
			//onClick={onClick}
			>
				{children}
			</Button>
		</Tab>
	);
};

const icons = [<ProfitsSVG />, <TaxSVG />, <StockSVG />, <LegalSVG />];

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

const CCorpTabs = ({ layout, columns, content }) => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Container>
			<Wrapper layout={layout} id="tabs-wrapper-2">
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
												scrollTop("tabs-wrapper-2");
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
								<Heading size="2" template={3} left>
									How Are Profits And Taxes Handled With A C Corp?
								</Heading>
								<Paragraph big>
									A C Corporation is taxed as a separate business entity. Unlike
									individuals, C Corporations have to file a designated tax form
									with the IRS, which is called IRS Form 1120. Additionally, C
									Corporations have their own tax rates.
								</Paragraph>
								<Paragraph big>
									Corporations can retain some of their profits and earnings as
									part of their operating capital, this can shelter some of the
									profits from taxation.
								</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">C Corporation Tax Rates</Heading>
								<Paragraph big>
									The tax rates levied on C Corporations are as follows.
								</Paragraph>
								<IconListColorBox
									color={color.green3}
									content={{
										header: "Profit",
										list: [
											"Up to $50,000 — 15%",
											"$50,000 - $75,000 — 21%",
											"$75,000 - $100,000 — 34%",
											"$100,000 - $335,000 — 39%",
											"$335,000 - $10,000,000 — 34%",
											"$10,000,000 - $15,000,000 — 35%",
											"$15,000,000 - $18,333,333 — 38%",
											"More than $18,333,333 — 35%",
										],
									}}
									bottomMargin="48"
									rounded
									curve
									curveColor={color.blue1}
								/>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="3">Stock Dividends from C Corporations</Heading>
								<Paragraph big>
									A C Corporation may choose to distribute some of the profits
									of the company as dividends, which are distributed to
									shareholders. The percentage of dividends that each
									shareholder is entitled to depends on how many shares they
									own.
								</Paragraph>
								<Paragraph big>
									Dividends that are distributed to shareholders are taxed twice
									(double-taxed). They are taxed first at the corporate level as
									profit (on the corporation’s form 1120), and again at the
									individual level as stock dividends (on the shareholder's form
									1040).
								</Paragraph>
							</PanelWrapper>
						</TabPanel>
						<TabPanel>
							<PanelWrapper className="panel2" layout={layout}>
								<Heading size="2" template={3} left>
									A C Corporation must meet certain requirements:
								</Heading>
								<Heading size="3" template={4}>
									Hold an Annual General Meeting (AGM) for the shareholders and
									the board of directors
								</Heading>
								<Paragraph big>
									The annual meetings are used to discuss and decide important
									information, strategic decisions, opportunities, risks and
									issues that the corporation will need to deal with.
								</Paragraph>
								<Heading size="3" template={4}>
									Issue shares to investors as ownership of the business
								</Heading>
								<Paragraph big>
									Ownership in a corporation is expressed through the issuance
									of shares. The management of the corporation is governed by a
									board of directors who are elected by the shareholders.
								</Paragraph>
								<Heading size="3" template={4}>Appoint a board of directors</Heading>
								<Paragraph big>
									The board of directors select officers who manage the day to
									day activities of the corporation. The board of directors also
									drafts bylaws for the corporation. These are written protocols
									that state the way that the corporation will be governed.
								</Paragraph>
								<Heading size="3" template={4}>
									Assign Certain Positions in the Corporation
								</Heading>
								<Paragraph big>
									A C Corporation will need to have all of the following
									positions. In a small C Corp, one person could hold multiple
									of these positions.
								</Paragraph>
								<Paragraph mixed big>
									<ul>
										<li>
											<strong>Shareholders</strong>: They own the company's
											stock and are responsible for electing directors, amending
											the bylaws and articles of incorporation and approving
											major actions taken by the corporation like mergers and
											the sale of corporate assets. They alone are allowed to
											dissolve the corporation.
										</li>
										<li>
											<strong>Directors</strong>: They manage the corporation
											and are responsible for issuing stock, electing officers
											and making the corporation's major decisions.
										</li>
										<li>
											<strong>Officers</strong>: The corporation must have a
											president, secretary, and treasurer. These officers are
											responsible for making the day-to-day decisions that
											govern the corporation's operation.
										</li>
										<li>
											<strong>Employees</strong>: They receive a salary in
											return for their work for the corporation.
										</li>
									</ul>
								</Paragraph>
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
