import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { Link } from "gatsby";
// import { motion } from "framer-motion"
import ArrowLink from "./arrow-link";
import ContentButton from "../atomic/molecules/buttons/button-action";
import OverviewSVG from "../images/overview.inline.svg";
import WhatIsSVG from "../images/whatis.inline.svg";
import IsRightForYourSVG from "../images/icons/is-right-for-you.inline.svg";
import ProsAndConsSVG from "../images/icons/pros-cos-nonprofit.inline.svg";
import TypeOfEntitySVG from "../images/icons/types-of-entity.inline.svg";
import HeartStatusSVG from "../images/icons/heart-status.inline.svg";
import QuestionSVG from "../images/icons/question.inline.svg";
import ArrowSVG from "../images/arrow.inline.svg";
import { color } from "./styles/colors";
import IconListColorBox from "../atomic/molecules/text-blocks/icon-h4-list-color";
import AcccordionCounting from "../atomic/organisms/accordion/accordion-with-counting";
import NumericBoxedList from "../atomic/organisms/lists/numeric-boxed-list";
import { Heading } from "../atomic/atoms/typography/heading";
import { Paragraph } from "../atomic/atoms/typography/paragraph";
import { Collapse } from "react-collapse";
import VisibilitySensor from "./VisibilitySensor";
import LightBox from "./LightBox";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

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
	width: 100%;
	overflow: auto;

	@media (min-width: 769px) {
		flex-direction: column;
		width: ${(props) => (props.layout !== "grid" ? "40%" : "")};
		max-width: ${(props) => (props.layout !== "grid" ? "370px" : "")};
		overflow: visible;
	}
`;

const Sticky = styled.div`
	display: ${(props) => (props.layout === "grid" ? "grid" : "flex")};
	grid-template-columns: ${(props) =>
		props.columns ? `repeat(${props.columns}, 1fr)` : ""};
	grid-gap: ${(props) => (props.layout === "grid" ? "30px" : "")};
	position: ${(props) => (props.layout !== "grid" ? "sticky" : "")};
	top: 100px;

	@media (min-width: 769px) {
		flex-direction: ${(props) => (props.layout !== "grid" ? "column" : "")};
	}
`;

const PanelWrapper = styled.article`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: ${(props) => (props.layout !== "grid" ? "670px" : "")};
	margin-left: auto;
	padding-top: 24px;

	p:not([class*="i-believe-i-can-be-a-h"]) {
		margin-bottom: 35px;

		&:nth-child(3) {
			margin-bottom: 24px;
		}
	}

	h2 {
		margin-bottom: 48px;
	}
`;

const Button = styled.button`
	height: 78px;
	line-height: 78px;
	color: #4e4e4e;
	background: #fff;
	transition: box-shadow 0.3s ease;
	display: flex;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	border: 0;
	z-index: 0;

	@media (min-width: 769px) {
		border: none;
		border-radius: 5px;
		margin-bottom: 7px;
		box-shadow: 0 20px 30px 0 #e6e6e6;
	}

	&.active {
		z-index: 1;
		color: ${color.blue1};
		border-bottom: 2px solid ${color.blue1};

		@media (min-width: 769px) {
			box-shadow: 0 40px 80px 0 #e6e6e6;
			font-weight: 600;
			color: #4e4e4e;
			border: none;
		}

		.tabArrow {
			opacity: 1;
			transform: translateX(0);
		}
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
		color: inherit;
		font-family: Avenir;
		font-size: 16px;
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
	display: none;
	align-items: center;
	justify-content: center;
	height: 12px;
	width: 12px;
	margin-right: 10px;

	@media (min-width: 769px) {
		display: flex;
	}

	svg {
		path {
			transition: fill 0.3s ease;
			fill: #5088fd;
		}
	}
`;

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
		<Button
			className={cn("accordion-tab", isActive && "active")}
			onClick={() => {
				onClick();
				scrollTop("tabs-wrapper");
			}}
		>
			{children}
		</Button>
	);
};
const icons = [
	<OverviewSVG />,
	<WhatIsSVG />,
	<IsRightForYourSVG />,
	<ProsAndConsSVG />,
	<TypeOfEntitySVG />,
	<HeartStatusSVG />,
	<QuestionSVG />,
];

const AboutTabs = ({ layout, columns, content, openModal }) => (
	<Wrapper id="tabs-wrapper" layout={layout}>
		{/* <VisibilitySensor partialVisibility once>
      {({ isVisible }) => ( */}
		<Tabs>
			<TabsWrapper
				//className={isVisible ? "slideUp enter" : "slideUp"}
				layout={layout}
			>
				<Sticky layout={layout} columns={columns}>
					{content.panels.map((panel, i) => (
						<Tab>
							<Icon>{icons[i]}</Icon>
							<Content>
								<span>{panel}</span>
								<Arrow className="tabArrow">
									<ArrowSVG />
								</Arrow>
							</Content>
						</Tab>
					))}
				</Sticky>
			</TabsWrapper>
			{/* <Panels> */}
			<Collapse isOpened={true}>
				<Panel>
					<PanelWrapper
						//className={isVisible ? "slideUp enter panel1" : "slideUp panel1"}
						className={"panel1"}
						layout={layout}
					>
						<Paragraph big>{content.content[0].text1}</Paragraph>
						<Paragraph big>{content.content[0].text2}</Paragraph>
						<Paragraph big>{content.content[0].text3}</Paragraph>
						<Heading size={2} template={3} left>
							Save Time and Money. We'll Handle The Paperwork.
						</Heading>
						<ArrowLink
							url={`${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit`}
						>
							Form your Nonprofit Corporation today
						</ArrowLink>
					</PanelWrapper>
				</Panel>

				<Panel>
					<PanelWrapper className="panel2" layout={layout}>
                        <Heading size={2} template={3} left>{content.content[1].header}</Heading>
                        <LightBox
                            bottomMargin={42}
                            thumbnailVideo="what-is-a-corporation-8899"
                            videoID="oYZShvmf9eQ"
                        />
						<Paragraph big>{content.content[1].text1}</Paragraph>
						<Paragraph big>{content.content[1].text2}</Paragraph>
						<Paragraph big>{content.content[1].text3}</Paragraph>
					</PanelWrapper>
				</Panel>

				<Panel>
					<PanelWrapper className="panel2" layout={layout}>
						<Heading size={2} template={3} left>{content.content[2].header}</Heading>
						<Paragraph big>{content.content[2].text}</Paragraph>
						<IconListColorBox
							color={color.blue3}
							content={content.content[2].box}
							rounded
							curve
							paragraphHeader
							curveColor={color.blue1}
						/>
					</PanelWrapper>
				</Panel>

				<Panel>
					<PanelWrapper className="panel2" layout={layout}>
						<Heading size={2} template={3} left>{content.content[3].header}</Heading>
						<Paragraph big>{content.content[3].text1}</Paragraph>
						<Paragraph big>{content.content[3].text2}</Paragraph>
						<Paragraph big>{content.content[3].text3}</Paragraph>
						<Heading size={3}>
							Don't get stuck, let us help you navigate the process.
						</Heading>
						<ArrowLink
							url={`${process.env.ORDER_URL}/form-order-now.php?entityType=Nonprofit`}
						>
							Form your Nonprofit Corporation today!
						</ArrowLink>
					</PanelWrapper>
				</Panel>

				<Panel>
					<PanelWrapper className="panel2" layout={layout}>
						<Heading size={2} template={3} left>{content.content[4].header}</Heading>
						<Paragraph big>{content.content[4].text}</Paragraph>
						<AcccordionCounting content={content.content[4]} tab />
						<Paragraph big topMargin={24}>
							{content.content[4].text2}
						</Paragraph>
						<ContentButton
							onClick={openModal}
							content={{
								text: `Download Our Start a Nonprofit Guide`,
								url: `#`,
							}}
							theme="primary56"
							margin="0 auto 0 0"
						/>
					</PanelWrapper>
				</Panel>

				<Panel>
					<PanelWrapper className="panel2" layout={layout}>
						<Heading size={2} template={3} left>{content.content[5].header}</Heading>
						<Paragraph big>{content.content[5].text}</Paragraph>
						<NumericBoxedList content={content.content[5].items} />
						<Paragraph big topMargin={24} mixed={true}>
							All other steps associated with Incorporation apply to the
							creation of a nonprofit organization, such as paying fees,
							registering for business locally and{" "}
							<Link to="/manage-your-company/tax-id-ein/">
								applying for your EIN.
							</Link>
						</Paragraph>
					</PanelWrapper>
				</Panel>

				<Panel>
					<PanelWrapper className="panel2" layout={layout}>
						<Heading size={2} template={3} left>{content.content[6].header}</Heading>
						<AcccordionCounting
							content={content.content[6]}
							listColor={{ item: `grey2`, dot: `orange1` }}
							tab
						/>
					</PanelWrapper>
				</Panel>
			</Collapse>
			{/* </Panels> */}
		</Tabs>
		{/* )}
    </VisibilitySensor> */}
	</Wrapper>
);
export default AboutTabs;
