import { Panel, Tabs, useTabState } from "@bumaga/tabs";
import React from "react";
import { Collapse } from "react-collapse";
import styled from "styled-components";
import Adventages from "../../../../components/adventages";
import Container from "../../../../components/container";
import CkeckText from "../../../../components/static-check/text-only";
import ArrowSVG from "../../../../images/arrow.inline.svg";
import OverviewSVG from "../../../../images/icons/coaching-business.inline.svg";
import LightIcon from "../../../../images/icons/light.inline.svg";
import CalcIcon from "../../../../images/icons/series-is-this-business-for-you.inline.svg";
import OvalSVG from "../../../../images/oval-blue-2.inline.svg";
import OvalGreenSVG from "../../../../images/oval-green.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import BlueBoxWithAbsoluteText from "../../../molecules/text-blocks/blue-box-with-absolute-text";
import CountingTextBoxed from "../../../molecules/text-blocks/counting-text-boxed";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<ButtonBox
			className={cn("accordion-tab", isActive && "active")}
			onClick={onClick}
		>
			{children}
		</ButtonBox>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 115px;
	position: relative;

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
		font-family: Engram;
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
	width: 50%;
`;

const Oval = styled.div`
	height: 100%;
	width: 100%;
	max-height: 420px;
	max-width: 420px;
	position: absolute;
	left: 0;
	top: 0;
`;

const OvalBottom = styled.div`
	height: 100%;
	width: 100%;
	max-height: 420px;
	max-width: 420px;
	position: absolute;
	right: 0;
	bottom: 0;
`;

const TabsSection = ({ layout, columns }) => (
	<Wrapper>
		<Oval>
			<OvalSVG />
		</Oval>
		<OvalBottom>
			<OvalGreenSVG />
		</OvalBottom>
		<Container>
			<Wrapper layout={layout}>
				{/* <VisibilitySensor partialVisibility once>
                    {({isVisible}) => ( */}
				<Tabs>
					<TabsWrapper
						// className={isVisible ? "slideUp enter" : "slideUp"}
						layout={layout}
					>
						<Sticky layout={layout} columns={columns}>
							<Tab>
								<Icon>
									<OverviewSVG />
								</Icon>
								<Content>
									<span>Etsy Business</span>
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
								// className={
								// 	isVisible ? "slideUp enter panel1" : "slideUp panel1"
								// }
								className={"panel1"}
								layout={layout}
							>
								<Heading size={3}>Starting an Etsy Business</Heading>
								<Paragraph big>
									What used to be the purview of craft fairs and market stands
									can now easily be sold online to a whole new audience.
								</Paragraph>
								<Paragraph big style={{ marginBottom: "50px" }}>
									If you want to be a successful Etsy entrepreneur, you need a
									strong, robust plan for your new business. There’s plenty of
									competition in the Etsy marketplace, so having a novel
									approach, creating origina designs and getting proper business
									discipline in place is essential.
								</Paragraph>

								<Heading
									size={3}
									style={{ marginTop: "48px", fontSize: "20px" }}
								>
									Etsy Business formation guide
								</Heading>
								<Paragraph big>
									From validating your business and doing the research to filing
									your paperwork and running your business, this guide will help
									you out. Read on for some insight into creating your own life
									or business coaching company and becoming an entrepreneur who
									helps people make the best of themselves. In this guide we
									will cover:
								</Paragraph>

								<ListWrapper>
									<ListBox>
										<CkeckText>
											<Paragraph big>
												Statistics on why you should start a life or executive
												coaching business
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												How to choose whether your coaching business should be
												an LLC or corporation
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												How to find out if life or business coaching is right
												for you
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												Different types of life or business coaching ideas
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												Groups, forums and support for life or business coaching
												entrepreneurs
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												How to validate your coaching business idea
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												Useful online tools for life or business coaching
												individuals
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												Business plans for coaching companies
											</Paragraph>
										</CkeckText>
									</ListBox>

									<ListBox>
										<CkeckText>
											<Paragraph big>
												How to start your life or business coaching venture with
												information on equipment, employees, location, permits,
												finance, taxes and more
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
									Why You Should Start a New Life Coaching Business
								</Heading>
								<Paragraph big style={{ marginBottom: "76px" }}>
									Life coaching is about helping people deal with what’s going
									on in their lives and assisting them in creating a better
									present and future. It involves a mix of psychology,
									counseling, interpersonal skills and understanding how you can
									help a client realize their potential.
									<br />
									<br />
									Here are some statistics on the power of life coaching
									businesses:
								</Paragraph>

								<BlueBoxWithAbsoluteText
									absoluteText="$10B"
									text="Generated annual revenue in the U.S., Self-improvement as a whole is a very successful sector."
								/>
								<BlueBoxWithAbsoluteText
									absoluteText="$1B"
									text="Generated revenue of life coaching in the U.S. each year, and this is expected to grow to around $1.3 billion in 2022."
								/>
								<BlueBoxWithAbsoluteText
									absoluteText="$62K"
									text="Average yearly income for life coaches a year, and some coaches can earn over $100,000 a year."
								/>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="The main areas that life coaches help with are personal improvement, family and relationships and weight loss and fitness."
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
										headline="Many customers for life coaching businesses are located on the East or West Coast of the U.S."
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="The number of coaches in the world increased from 47,500 in 2011 to 53,300 in 2018"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "48px" }}>
									<Adventages
										headline="There are currently around 18,300 life coaches in the U.S."
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "48px" }}>
									<Adventages
										headline="Life coaches normally have multiple clients and typically charge between $200 and $500 a month for services"
										width="100%"
									/>
								</div>

								<Heading
									size={2}
									style={{ fontSize: "24px", textAlign: "left" }}
								>
									Why You Should Start a Business and Executive Coaching
									Practice
								</Heading>
								<Paragraph big style={{ marginBottom: "76px" }}>
									Business and executive coaching is very different from life
									coaching. When you’re working with senior management, you need
									to have an excellent understanding of business, strategy,
									financials, organization, culture and the unique pressures
									that face executives when making major decisions.
								</Paragraph>

								<BlueBoxWithAbsoluteText
									absoluteText="$12B"
									text="Generated revenue of Business Coaching in the U.S. a year."
								/>
								<BlueBoxWithAbsoluteText
									absoluteText="55K"
									text="Number of business coaching organizations in the U.S. employing over 100,000 people"
								/>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="The main areas that business coaches help with are executive development and financial management"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Studies show that there is between a 500% and 700% return on investment for money spent on business and executive coaching services"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "48px" }}>
									<Adventages
										headline="Business coaching helps executives increase their productivity by over 80 percent"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "48px" }}>
									<Adventages
										headline="Executive coaching delivers improvements to areas like productivity, work quality, organizational strength, customer service, working relationships, cost reductions and profitability"
										width="100%"
									/>
								</div>

								<Paragraph big style={{ marginBottom: "76px" }}>
									This is why life or business coaching ventures are so exciting
									— how can you be part of that success? We're here to help you
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
									Is Professional Coaching Right for You?
								</Heading>
								<Paragraph big style={{ marginBottom: "48px" }}>
									Although it can be exciting to become a life or business
									coach, there will be significant demands on you. Here are some
									of the things you can expect.
								</Paragraph>

								<Heading
									size={2}
									style={{ fontSize: "24px", textAlign: "left" }}
								>
									A Day in the Life of a Life or Business Coach
								</Heading>
								<Paragraph big style={{ marginBottom: "48px" }}>
									Here are some of the typical tasks you’ll be performing on a
									daily basis:
								</Paragraph>

								<CountingTextBoxed number={1}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Marketing for new clients
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={2}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Dealing with inquiries from potential clients
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={3}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Reading the latest research and studies in your field
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={4}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Traveling to meet with clients or having them come to you
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={5}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Holding coaching sessions
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={6}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Writing up coaching sessions
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={7}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Dealing with financials and administration
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={8}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Life coaches: Ongoing training in psychology, counseling and
										related fields
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={9}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Life coaches: Researching specific questions or problems
										your clients may have
									</Paragraph>
								</CountingTextBoxed>

								<CountingTextBoxed number={10}>
									<Paragraph bottomPadding={0} bottomMargin={0}>
										Business coaches: Learning about the business you’re
										providing coaching for, including strategy, financials and
										the executive team
									</Paragraph>
								</CountingTextBoxed>

								<div style={{ marginBottom: "76px" }}>
									<CountingTextBoxed
										number={11}
										style={{ marginBottom: "76px" }}
									>
										<Paragraph bottomPadding={0} bottomMargin={0}>
											Business coaches: Research into the sector or industry of
											the business you’re providing coaching for
										</Paragraph>
									</CountingTextBoxed>
								</div>

								<Heading
									size={2}
									style={{ fontSize: "24px", textAlign: "left" }}
								>
									Skills Needed by a Life or Business Coach
								</Heading>
								<Paragraph big style={{ marginBottom: "48px" }}>
									The following skills will be very useful in your role as a
									life or business coach:
								</Paragraph>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Excellent interpersonal and influencing skills to talk with and listen to clients"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Powerful analysis and investigative skills to get to the root of an issue"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Good marketing skills to promote your coaching business"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "48px" }}>
									<Adventages
										headline="Strong administration skills so you can stay on top of your schedule and finances"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "48px" }}>
									<Adventages
										headline="Strong research skills so you can understand the history and context of the individuals and businesses you’re helping"
										width="100%"
									/>
								</div>

								<Heading
									size={2}
									style={{ fontSize: "24px", textAlign: "left" }}
								>
									What Your Coaching Clients Are Looking For
								</Heading>
								<Paragraph big style={{ marginBottom: "48px" }}>
									Ultimately, people come to a coach because they want to
									improve their life or business.
								</Paragraph>

								<Heading
									size={2}
									style={{ fontSize: "24px", textAlign: "left" }}
								>
									What Life Coaching Clients Want
								</Heading>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Properties that match the listings provided by the host"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Dealing with particular issues in their past that are stopping them moving forward"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Helping them come to terms with their existing life circumstances and challenges"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Preparing them for the future and giving them useful tools and techniques"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Reassuring them about how you’ve helped previous clients"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Reassuring them about how you’ve helped previous clients"
										width="100%"
									/>
								</div>

								<Heading
									size={2}
									style={{ fontSize: "24px", textAlign: "left" }}
								>
									What Business Coaching Clients Want
								</Heading>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Proven return on investment for business coaching services"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Demonstrated understanding of their business and sector"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Strong expertise in dealing with specific needs (e.g., productivity, management styles, culture or organizational change)"
										width="100%"
									/>
								</div>

								<div style={{ marginBottom: "30px" }}>
									<Adventages
										headline="Detailed statistics on improvements as a result of business coaching"
										width="100%"
									/>
								</div>
							</PanelWrapper>
						</Panel>
					</Collapse>
					{/* </Panels> */}
				</Tabs>
				{/* )}
                </VisibilitySensor> */}
			</Wrapper>
		</Container>
	</Wrapper>
);

export default TabsSection;
