import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { motion } from "framer-motion";
import { color } from "./styles/colors";
import ArrowSVG from "../images/arrow-circle.inline.svg";
import CurveSVG from "../images/orange-curve.inline.svg";
import VisibilitySensor from "./VisibilitySensor";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-top: 80px;

	@media (min-width: 769px) {
		width: auto;
		padding: 25px 29px 0;
	}
`;

const Curve = styled.div`
	height: 25px;
	width: 25px;
	position: absolute;
	top: -16px;
	left: -13px;

	@media (min-width: 769px) {
		top: 0;
		left: 0;
	}
`;

const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 770px;
`;

const TabBox = styled.div`
	box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
	margin-bottom: 8px;

	.accordion-panel {
		overflow: hidden;
	}
`;

const PanelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;

	margin-bottom: 7px;
	padding: 15px;
	z-index: 1;

	@media (min-width: 769px) {
		padding: 24px 40px 40px 80px;
	}

	h3 {
		margin-bottom: 48px;
	}

	p,
	li {
		color: ${color.grey1};
		font-family: Engram, sans-serif;
		max-width: 650px;
		text-align: left;
	}

	p {
		font-size: 16px;
		line-height: 24px;

		a {
			color: ${color.blue1};
			font-size: inherit;
			line-height: inherit;
			text-decoration: none;
			transition: color 0.3s ease;

			&:hover {
				color: ${color.orange1};
			}
		}
	}

	li {
		font-size: 14px;
		line-height: 19px;
	}

	ul {
		//list-style: none;
		padding-left: 16px;

		li {
			padding-top: 16px;
		}
	}
`;

const Button = styled.button`
	height: 80px;
	width: 100%;
	line-height: 80px;
	color: #4e4e4e;
	background: #fff;
	display: flex;
	cursor: pointer;

	position: relative;
	border-radius: 5px;
	overflow: hidden;
	border: none;

	&.active {
		border-radius: 5px 5px 0 0;
		font-weight: 600;

		svg {
			transform: rotate(0deg);
		}
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding-right: 40px;

	span {
		color: #4e4e4e;
		font-family: Engram;
		font-size: 16px;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 80px;
	opacity: 0.75;

	svg {
		transform: rotate(180deg);
		transition: transform 0.3s ease;
	}
`;

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
	const { isActive, onClick } = useTabState();

	return (
		<Button
			className={cn("accordion-tab", isActive && "active")}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

const panel = {
	hidden: { height: 0 },
	visible: { height: "auto" },
};

const Panel = ({ children }) => {
	const isActive = usePanelState();

	return (
		<motion.div
			className="accordion-panel"
			animate={isActive ? "visible" : "hidden"}
			transition={{ ease: "easeOut", duration: 0.3 }}
			variants={panel}
		>
			{children}
		</motion.div>
	);
};

const Accordion = ({ faq }) => {
	return (
		// <VisibilitySensor partialVisibility once>
		//   {({ isVisible }) => (
		<Wrapper
		//className={isVisible ? "slideUp enter" : "slideUp"}
		>
			<Curve>
				<CurveSVG />
			</Curve>
			<Tabs>
				<TabsWrapper>
					{faq.items.map((item) => (
						<TabBox>
							<Tab>
								<Icon>
									<ArrowSVG />
								</Icon>
								<Content>
									<span>{item.question}</span>
								</Content>
							</Tab>
							<Panel>
								<PanelWrapper>
									{typeof item.answer === "string" ? (
										<p>{item.answer}</p>
									) : null}
									{typeof item.answer === "object" ? (
										<p>
											{item.answer.map((el, id) =>
												id % 2 ? (
													<Link to={el.url}>{` ${el.text} `}</Link>
												) : (
													el.text
												)
											)}
										</p>
									) : null}
									{/* <p>{item.answer}</p> */}
									{item.list && (
										<ul>
											{item.list.map((listitem) => (
												<li>{listitem}</li>
											))}
										</ul>
									)}
								</PanelWrapper>
							</Panel>
						</TabBox>
					))}
				</TabsWrapper>
			</Tabs>
		</Wrapper>
		//   )}
		// </VisibilitySensor>
	);
};
export default Accordion;
