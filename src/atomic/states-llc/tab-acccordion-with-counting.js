import React from "react";
import { Link } from "gatsby";
import parse from "html-react-parser";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";

import ListWithDot from "./list-with-dot";
import { color } from "../atoms/styles/colors";
import ArrowLink from "../../components/arrow-link";
import { Paragraph } from "../atoms/typography/paragraph";
import ArrowSVG from "../../images/arrow-circle.inline.svg";
import CurveSVG from "../../images/orange-curve.inline.svg";
import VisibilitySensor from "../../components/VisibilitySensor";
import { Heading } from "../atoms/typography/heading";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-top: ${(props) => (props.tab ? "" : "80")};

	@media (min-width: 769px) {
		width: auto;
		padding: ${(props) => (props.tab ? "" : "25px 29px 0")};
	}
`;

const Curve = styled.div`
	display: none;
	height: 25px;
	width: 25px;
	position: absolute;

	@media (min-width: 769px) {
		display: block;
		top: ${(props) => (!props.curveRightBottom ? "0" : "")};
		left: ${(props) => (props.curveRight || props.curveRightBottom ? "" : "0")};
		right: ${(props) =>
			props.curveRight || props.curveRightBottom ? "0" : ""};
		bottom: ${(props) => (props.curveRightBottom ? "-25px" : "")};
		transform: ${(props) =>
			props.curveRight
				? "rotate(90deg)"
				: props.curveRightBottom
				? "rotate(180deg)"
				: ""};
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
	padding: 15px;
	z-index: 1;

	@media (min-width: 769px) {
		padding: 16px 40px 40px 80px;
	}

	h3 {
		margin-bottom: 48px;
	}

	p,
	li {
		color: ${color.grey1};
		font-family: Avenir, sans-serif;
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
`;

const ListItems = styled.ul`
	list-style: none;
	padding-left: 0;

	li {
		font-family: Avenir, sans-serif;
		font-size: 16px;
		line-height: 24px;
		color: ${(props) =>
			props.listColor ? `${color[props.listColor.item]}` : `${color.grey1}`};
		padding-left: 26px;
		padding-top: 0;
		position: relative;

		&::before {
			content: "";
			height: 4px;
			width: 4px;
			background-color: ${(props) =>
				props.listColor ? `${color[props.listColor.dot]}` : `${color.grey1}`};
			border-radius: 50%;
			position: absolute;
			top: 9px;
			left: 6px;
		}

		&:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

const Button = styled.button`
	display: grid;
	grid-template-columns: 30px 1fr;
	grid-template-areas:
		"counting text"
		"arrow text";
	grid-gap: 8px 15px;
	min-height: 80px;
	min-width: 80px;
	width: 100%;
	color: #4e4e4e;
	align-items: center;
	background: #fff;
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	border: none;
	padding: 15px;

	@media (min-width: 470px) {
		grid-template-columns: 50px 1fr 50px;
		grid-template-areas: "counting text arrow";
	}

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
	padding: 16px 40px 16px 0;

	span {
		color: #4e4e4e;
		font-family: Avenir;
		font-size: 16px;
		text-align: left;
		width: 100%;
		line-height: 24px;
	}
`;
const Text = styled.span`
	color: #4e4e4e;
	font-family: Avenir;
	font-size: 16px;
	text-align: left;
	width: 100%;
	line-height: 24px;
	grid-area: text;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.75;
	grid-area: arrow;

	//   @media (min-width: 470px) {
	//     height: 50px;
	//     min-height: 50px;
	//     max-height: 50px;
	//   }

	svg {
		transform: rotate(180deg);
		transition: transform 0.3s ease;
	}
`;

const CountingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: counting;

	//   @media (min-width: 470px) {
	//     height: 80px;
	//     min-height: 80px;
	//     max-height: 80px;
	//   }
`;

const Counting = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color: ${color.blue1};
	color: white;
	border-radius: 100px;
	width: 30px;
	min-width: 30px;
	height: 30px;
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

const AccordionWithCounting = ({
	content,
	curve,
	curveRight,
	curveRightBottom,
	tab,
	listColor,
	header,
}) => {
	return (
		// <VisibilitySensor partialVisibility once>
		//   {({ isVisible }) => (
		<Wrapper
			//className={isVisible ? "slideUp enter" : "slideUp"}
			tab={tab}
		>
			{curve && (
				<Curve curveRight={curveRight} curveRightBottom={curveRightBottom}>
					<CurveSVG />
				</Curve>
			)}
			<Tabs>
				<TabsWrapper>
					{content.map((item) => (
						<TabBox>
							<Tab>
								{/* <Content> */}
								<CountingWrapper>
									<Counting>{item.count}</Counting>
								</CountingWrapper>
								{!header && <Text>{item.question}</Text>}
								{header === 2 && (
									<Heading size={2} template={3} left>
										{item.question}
									</Heading>
								)}
								{header === 3 && (
									<Heading size={3} left>
										{item.question}
									</Heading>
								)}
								{header === 4 && (
									<Heading size={4} template={3} left>
										{item.question}
									</Heading>
								)}
								{header === 5 && (
									<Heading size={5} template={3} left>
										{item.question}
									</Heading>
								)}
								{/* </Content> */}
								<Icon>
									<ArrowSVG />
								</Icon>
							</Tab>
							<Panel>
								<PanelWrapper>
									{item.answer.map((e, i) => (
										<div>
											{e.type === "paragraph" && (
												<Paragraph mixed={true}>{parse(e.content)}</Paragraph>
											)}

											{e.type === "arrow-links" &&
												e.content.map((link) => (
													<ArrowLink url={link.url} style={link.style}>
														{link.text}
													</ArrowLink>
												))}

											{e.type === "list-dot-without-bg" && (
												<ListWithDot color={color.blue3} content={e.content} />
											)}

											{e.type === "button" && (
												<Button
													content={e.content}
													theme={e.theme}
													arrow
													width="350px"
													margin="16px 0 0 0"
													marginMD="42px 0 42px 0"
												/>
											)}
										</div>
									))}
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
export default AccordionWithCounting;
