import React from "react";
import styled from "styled-components";
import { Panel, Tabs, useTabState } from "@bumaga/tabs";
// import { motion } from "framer-motion"
import OverviewSVG from "../../../../images/overview.inline.svg";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import { Collapse } from "react-collapse";
import VisibilitySensor from "../../../../components/VisibilitySensor";
import LightIcon from "../../../../images/icons/light.inline.svg";
import CalcIcon from "../../../../images/icons/calc.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import CkeckText from "../../../../components/static-check/text-only";
import OvalSVG from "../../../../images/oval-blue-2.inline.svg";
import OvalGreenSVG from "../../../../images/oval-green.inline.svg";
import Container from "../../../../components/container";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import Adventages from "../../../../components/adventages";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

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

	return (
		<ButtonBox
			className={cn("accordion-tab", isActive && "active")}
			onClick={() => {
				onClick();
				scrollTop("tabs-wrapper");
			}}
		>
			{children}
		</ButtonBox>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	@media (min-width: 576px) {
		padding-bottom: 115px;
	}

	@media (min-width: 769px) {
		flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
	}

	.accordion-panel {
		overflow: hidden;
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

	h3 {
		margin-bottom: 48px;
	}
`;

const ButtonBox = styled.button`
	height: 78px;
	line-height: 78px;
	color: #4e4e4e;
	background: #fff;
	transition: box-shadow 0.3s ease;
	box-shadow: 0 20px 30px 0 #e6e6e6;
	display: flex;
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 7px;
	border: none;
	z-index: 0;

	&.active {
		box-shadow: 0 40px 80px 0 #e6e6e6;
		font-weight: 600;
		z-index: 1;

		.tabArrow {
			opacity: 1;
			transform: translateX(0);
		}
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 50px;
	opacity: 0.75;

	@media (min-width: 992px) {
		width: 80px;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 0 24px;
	border-left: 1px solid #f4f4f4;

	span {
		color: #4e4e4e;
		font-family: Avenir;
		font-size: 13px;
		white-space: nowrap;

		@media (min-width: 769px) {
			font-size: 16px;
		}
	}

	.tabArrow {
		opacity: 0;
		transform: translateX(-3px);
		transition: opacity 0.3s ease, transform 0.3s ease;

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

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ListBox = styled.div`
	width: 100%;

	@media (min-width: 576px) {
		width: 50%;
	}
`;

const Oval = styled.div`
	height: 100%;
	width: 100%;
	max-height: 420px;
	max-width: 420px;
	position: absolute;
	left: 0;
	top: 0;

	display: none;

	@media (min-width: 769px) {
		display: block;
	}
`;

const OvalBottom = styled.div`
	height: 100%;
	width: 100%;
	max-height: 420px;
	max-width: 420px;
	position: absolute;
	right: 0;
	bottom: 0;

	display: none;

	@media (min-width: 769px) {
		display: block;
	}
`;

const AirBnb1Tabs = ({ layout, columns }) => (
	<Wrapper>
		<Oval>
			<OvalSVG />
		</Oval>
		<OvalBottom>
			<OvalGreenSVG />
		</OvalBottom>
		<Container>
			<Wrapper id="tabs-wrapper" layout={layout}>
				<VisibilitySensor partialVisibility once>
					{({ isVisible }) => (
						<Tabs>
							<TabsWrapper
								className={isVisible ? "slideUp enter" : "slideUp"}
								layout={layout}
							>
								<Sticky layout={layout} columns={columns}>
									<Tab>
										<Icon>
											<OverviewSVG />
										</Icon>
										<Content>
											<span>Airbnb Business</span>
											<Arrow className="tabArrow">
												<ArrowSVG />
											</Arrow>
										</Content>
									</Tab>
									<Tab>
										<Icon>
											<LightIcon />
										</Icon>
										<Content>
											<span>Why This Industry</span>
											<Arrow className="tabArrow">
												<ArrowSVG />
											</Arrow>
										</Content>
									</Tab>
									<Tab>
										<Icon>
											<CalcIcon />
										</Icon>
										<Content>
											<span>Is This Business For You?</span>
											<Arrow className="tabArrow">
												<ArrowSVG />
											</Arrow>
										</Content>
									</Tab>
								</Sticky>
							</TabsWrapper>
							{/* <Panels> */}
							<Collapse isOpened={true}>
								<Panel>
									<PanelWrapper
										className={
											isVisible ? "slideUp enter panel1" : "slideUp panel1"
										}
										layout={layout}
									>
										<Heading size={3}>Starting an Airbnb Business</Heading>
										<Paragraph big>
											The concept of renting out space through Airbnb is
											relatively straightforward, but setting yourself up for
											success requires a little more work.
										</Paragraph>
										<Paragraph big style={{ marginBottom: "50px" }}>
											We don’t think that creating an Airbnb business needs to
											be daunting, and we’re here to help. We’ve supported over
											500,000 people to form a business and provided answers,
											guidance and support to transform them into entrepreneurs.
											We’ll guide you through what you need to know to start
											your Airbnb venture and get it off the ground.
										</Paragraph>
										<Heading size={3}>Airbnb Business formation guide</Heading>
										<Paragraph big>
											From validating your business and doing the research to
											filing your paperwork and running your business, this
											guide will help you out. Read on for some insight into
											creating your own Airbnb business and becoming an
											entrepreneur. In this guide we will cover:
										</Paragraph>

										<ListWrapper>
											<ListBox>
												<CkeckText>
													<Paragraph big>
														Statistics on why you should start an Airbnb
														business
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Choose the right business structure for your Airbnb
														company
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														How to find out if an Airbnb business is right for
														you
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Setting up your Airbnb business including location,
														equipment, employees, taxes, finances, licenses and
														more
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Ideas for the type of Airbnb business that you could
														form
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Where to find Airbnb business groups, forums and
														support
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Proving your Airbnb business can work
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Useful online tools for Airbnb business owners
													</Paragraph>
												</CkeckText>
											</ListBox>

											<ListBox>
												<CkeckText>
													<Paragraph big>
														Business plans for Airbnb companies
													</Paragraph>
												</CkeckText>
											</ListBox>
										</ListWrapper>
									</PanelWrapper>
								</Panel>
								<Panel>
									<PanelWrapper className="panel2" layout={layout}>
										<Heading
											size={2}
											style={{ fontSize: "24px", textAlign: "left" }}
										>
											Why You Should Start a New Airbnb Business
										</Heading>
										<Paragraph big style={{ marginBottom: "76px" }}>
											Airbnb has made it easier than ever for people to become
											hosts—people that rent out property for others to stay at.
											Airbnb is a ready-made marketplace for guests, with
											millions of listings around the world. Here are some
											statistics on the power of the Airbnb industry:
										</Paragraph>

										<BlueBoxWithAbsoluteText
											absoluteText="150M"
											text="There are over 150 million users on Airbnb"
										/>
										<BlueBoxWithAbsoluteText
											absoluteText="$34B"
											text="The largest market for Airbnb is in the US, with an economic impact of $34 billion"
										/>
										<BlueBoxWithAbsoluteText
											absoluteText="500M"
											text="There have been more than 500 million stays through Airbnb"
										/>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Half of Airbnb users stay in an Airbnb instead of a hotel"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="More than two million people stay at an Airbnb on any given day"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Almost nine in ten reservations are for two or more people"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="The compound growth rate since 2009 has been over 150 percent a year"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "48px" }}>
											<Adventages
												headline="There has been a 45 percent increase in U.S. bookings year-to-year"
												width="100%"
											/>
										</div>

										<Paragraph big>
											This is why Airbnb businesses are so exciting — how can
											you be a part of that success? We're here to help you
											figure that out.
										</Paragraph>
									</PanelWrapper>
								</Panel>
								<Panel>
									<PanelWrapper className="panel3" layout={layout}>
										<Heading
											size={2}
											style={{ fontSize: "24px", textAlign: "left" }}
										>
											Is Running an Airbnb Right for You?
										</Heading>
										<Paragraph big style={{ marginBottom: "48px" }}>
											Before deciding to start an Airbnb business, it’s
											important to understand the skills and approach you’re
											likely to need.
										</Paragraph>

										<Heading
											size={2}
											style={{ fontSize: "24px", textAlign: "left" }}
										>
											A Day in the Life of an Airbnb Host
										</Heading>
										<Paragraph big style={{ marginBottom: "48px" }}>
											Here are some of the typical tasks you’ll be performing
											for your Airbnb business on a daily basis.
										</Paragraph>

										<CountingTextBoxed number={1}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Answering questions from guests and providing useful
												information
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={2}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Arranging for cleaning and other routine tasks at your
												properties
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={3}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Taking care of repairs and maintenance
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={4}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Ensuring that bookings are up-to-date
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={5}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Getting information and photos to create compelling
												Airbnb listings
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={6}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Uploading and managing listings on the Airbnb platform
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={7}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Minimizing cancellations of planned visits
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={8}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Setting prices for guests to stay in your property
											</Paragraph>
										</CountingTextBoxed>

										<CountingTextBoxed number={9}>
											<Paragraph bottomPadding={0} bottomMargin={0}>
												Responding to reviews from guests
											</Paragraph>
										</CountingTextBoxed>

										<div style={{ marginBottom: "76px" }}>
											<CountingTextBoxed number={1}>
												<Paragraph bottomPadding={0} bottomMargin={0}>
													An executive summary with the most important points
													from your business plan
												</Paragraph>
											</CountingTextBoxed>
										</div>

										<Heading
											size={2}
											style={{ fontSize: "24px", textAlign: "left" }}
										>
											Skills Needed by an Airbnb Business Entrepreneur
										</Heading>
										<Paragraph big style={{ marginBottom: "48px" }}>
											The following skills will be very useful in your role as
											an Airbnb small business owner.
										</Paragraph>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Organizational skills to stay on top of your enquiries and bookings"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Interpersonal skills for managing the people that provide cleaning, maitenance and other services at your properties"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Planning skills to offer the amenities, supplies and services that your guests want"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "48px" }}>
											<Adventages
												headline="Financial management skills so you understand the money you’re earning from rentals"
												width="100%"
											/>
										</div>

										<Heading
											size={2}
											style={{ fontSize: "24px", textAlign: "left" }}
										>
											What Your Airbnb Guests are Looking For
										</Heading>
										<Paragraph big style={{ marginBottom: "48px" }}>
											Airbnb customers, commonly known as guests, are looking
											for:
										</Paragraph>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Properties that match the listings provided by the host"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Properties that are safe, clean, and well-located for their needs"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Properties that are priced appropriately for their location, demand and the time of year"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Common amenities including clean sheets, toiletries, a first aid kit, etc."
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Easy access to the property"
												width="100%"
											/>
										</div>

										<div style={{ marginBottom: "30px" }}>
											<Adventages
												headline="Important information like contact details, good local restaurants, transit stops, emergency service numbers, etc."
												width="100%"
											/>
										</div>
									</PanelWrapper>
								</Panel>
							</Collapse>
							{/* </Panels> */}
						</Tabs>
					)}
				</VisibilitySensor>
			</Wrapper>
		</Container>
	</Wrapper>
);

export default AirBnb1Tabs;
