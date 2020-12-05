import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import parse from "html-react-parser";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";

import TextBlockWithImage from "../../molecules/mixed-blocks/text-block-with-absolute-image";

import Accordion from "../../organisms/accordion/accordion";

import Container from "../../container";

import BusinessLicenseIcon from "../../../images/icons/business-licenses-and-permits.inline.svg";
import ArrowSVG from "../../../images/arrow.inline.svg";
import TaxesIcon from "../../../images/icons/other-taxes.inline.svg";
import BusinessInsuranceIcon from "../../../images/icons/business-insurance.inline.svg";
import AgentIcon from "../../../images/icons/registered-agent.inline.svg";
import MaintainingIcon from "../../../images/icons/maintaining-your-cleaning-business.inline.svg";
//tab icons
import BusinessLicensesColoredIcon from "../../../images/icons/icons-incfile-vs/icon-4.inline.svg";
import BusinessInsuranceColoredIcon from "../../../images/icons/icons-incfile-vs/icon-5.inline.svg";
import AgentColoredIcon from "../../../images/icons/icons-incfile-vs/icon-3.inline.svg";
import TaxesColoredIcon from "../../../images/icons/icons-incfile-vs/icon-2.inline.svg";
import MaintainingColoredIcon from "../../../images/icons/icons-incfile-vs/icon-1.inline.svg";

import {
	BusinessInsuranceAccordionContent,
	LicensesAccordionContent,
	MaintainingAccordionContent,
	TaxesAccordionContent,
} from "../../../static/type-of-business/cleaning-business";
import VisibilitySensor from "../../../components/VisibilitySensor";
import IncfileVsCompareTableA from "../../organisms/tables/incfile-vs-compare-table-a";
import NumericBoxedList from "../../organisms/lists/numeric-boxed-list";
import { InView } from "react-intersection-observer";
import ImageInColoredBox from "../../molecules/image-blocks/image-in-colored-block";
import ImageTextTableBlock from "../../organisms/blocks/image-text-table-block";
import IncfileVsCard from "../../organisms/cards/incfile-vs-card";

const ButtonList = [
	{
		title: "Summary",
		icon: BusinessLicensesColoredIcon,
		tabId: "local-business",
	},
	{
		title: "Expertise",
		icon: BusinessInsuranceColoredIcon,
		tabId: "business-insurance",
	},
	{
		title: "Ease",
		icon: AgentColoredIcon,
		tabId: "registered-agent",
	},
	{
		title: "Cost",
		icon: TaxesColoredIcon,
		tabId: "taxes",
	},
	{
		title: "Other Services",
		icon: MaintainingColoredIcon,
		tabId: "maintaining",
	},
];

const TabScrollable = ({ layout, columns, content }) => {
	const [isActive, setActive] = useState(0);

	const handleClick = (index, elementId) => {
		setActive(index);
		let element = document.getElementById(elementId);

		if (null !== element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<Wrapper>
			<Container>
				<Wrapper layout={layout}>
					<TabsWrapper className="slideUp enter" layout={layout}>
						<StickyContainer>
							<Sticky layout={layout} columns={columns}>
								{ButtonList.map((item, index) => {
									return (
										<Tab
											key={index}
											onClick={() => handleClick(index, item.tabId)}
											className={`accordian-tab${
												isActive === index ? " active" : ""
											}`}
										>
											<Icon>
												<item.icon />
											</Icon>
											<Content>
												<span>{item.title}</span>
												<Arrow className="tabArrow">
													<ArrowSVG />
												</Arrow>
											</Content>
										</Tab>
									);
								})}
							</Sticky>
						</StickyContainer>
					</TabsWrapper>

					<PanelWrapper>
						<InView
							onChange={(visible) => {
								if (visible) setActive(0);
							}}
						>
							<div id={ButtonList[0].tabId}>
								<Heading size="3" bottomMargin="48">
									{parse(content.header)}
								</Heading>
								<IncfileVsCompareTableA content={content.table} />
							</div>
						</InView>

						<InView
							onChange={(visible) => {
								if (visible) setActive(1);
							}}
						>
							<div id={ButtonList[1].tabId}>
								<Heading size="3" bottomMargin="56">
									{parse(content.header2)}
								</Heading>
								{content.cards.map((card) => (
									<IncfileVsCard content={card} />
								))}
								<Paragraph big mixed bottomMargin="56">
									{parse(content.text)}
								</Paragraph>
							</div>
						</InView>

						<InView
							onChange={(visible) => {
								if (visible) setActive(2);
							}}
						>
							<div id={ButtonList[2].tabId}>
								<Heading size="3">{parse(content.header3)}</Heading>
								<Paragraph big mixed bottomMargin="48">
									{parse(content.text2)}
								</Paragraph>
								<Heading size="3">{parse(content.header4)}</Heading>
								<Paragraph big mixed>
									{parse(content.text3)}
								</Paragraph>
								<NumericBoxedList content={content.list} bottomMargin="32" />
								<Paragraph big mixed bottomMargin="56">
									{parse(content.text4)}
								</Paragraph>
								<Heading size="3">{parse(content.header5)}</Heading>
								<Paragraph big mixed>
									{parse(content.text5)}
								</Paragraph>
								<NumericBoxedList content={content.list2} bottomMargin="32" />
								<Paragraph big mixed>
									{parse(content.text6)}
								</Paragraph>
								<Paragraph big mixed bottomMargin="56">
									{parse(content.text7)}
								</Paragraph>
							</div>
						</InView>

						<InView
							onChange={(visible) => {
								if (visible) setActive(3);
							}}
						>
							<div id={ButtonList[3].tabId}>
								<Heading size="3">{parse(content.header6)}</Heading>
								<Paragraph big mixed bottomMargin="64">
									{parse(content.text8)}
								</Paragraph>
								<IncfileVsCompareTableA content={content.table2} />
								<IncfileVsCompareTableA content={content.table3} />
								<IncfileVsCompareTableA content={content.table4} />
							</div>
						</InView>

						<InView
							onChange={(visible) => {
								if (visible) setActive(4);
							}}
						>
							<div id={ButtonList[4].tabId}>
								<Heading size="3">{parse(content.header7)}</Heading>
								<Paragraph big mixed bottomMargin="64">
									{parse(content.text9)}
								</Paragraph>
								{content.services.map((service) => (
									<ImageTextTableBlock content={service} />
								))}
							</div>
						</InView>
					</PanelWrapper>
				</Wrapper>
			</Container>
		</Wrapper>
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
			max-width: ${(props) => (props.layout !== "grid" ? "700px" : "")};
		}
	}

	h3 {
		span {
			color: ${color.orange1};
		}
	}
`;

const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;

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
	width: 100%;
	max-width: ${(props) => (props.layout !== "grid" ? "700px" : "")};
	margin-left: auto;
	padding-top: 24px;

	@media (min-width: 768px) {
		padding-left: 30px;
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
	width: 50%;
`;

const StickyContainer = styled.div`
	position: relative;
	height: 100%;
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children, ...props }) => {
	return <ButtonBox {...props}>{children}</ButtonBox>;
};

export default TabScrollable;
