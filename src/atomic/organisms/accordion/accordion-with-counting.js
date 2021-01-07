import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import { Paragraph } from "../../atoms/typography/paragraph";
import { motion } from "framer-motion";
import { color } from "../../atoms/styles/colors";
import parse from "html-react-parser";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import CurveSVG from "../../../images/orange-curve.inline.svg";
import { Heading } from "../../atoms/typography/heading";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-top: ${(props) => (props.tab ? "" : "80px")};
	margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};

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
`;

const ListItems = styled.ul`
	list-style: none;
	padding-left: 0;

	li {
		font-family: Engram, sans-serif;
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
	min-width: 80px;
	width: 100%;
	color: #4e4e4e;
	align-items: flex-start;
	background: #fff;
	display: flex;
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	border: none;

	@media (min-width: 576px) {
		align-items: center;
	}

	&.active {
		border-radius: 5px 5px 0 0;
		font-weight: 600;

		h3 {
			font-weight: 600;
		}

		svg {
			transform: rotate(0deg);
		}
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-grow: 1;
	padding: 16px 20px 16px 0;
	min-height: 100px;

	@media (min-width: 576px) {
		align-items: center;
		min-height: unset;
	}

	span,
	h3 {
		color: #4e4e4e;
		font-family: Engram;
		font-size: 16px;
		text-align: left;
		width: 100%;
		line-height: 24px;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.75;
	position: absolute;
	top: 55px;
	z-index: 1;
	left: 28px;

	@media (min-width: 576px) {
		position: static;
		height: 32px;
		width: 32px;
	}

	svg {
		transform: rotate(180deg);
		transition: transform 0.3s ease;
	}
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
	margin-left: 30px;
	margin-right: 30px;
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
	paragraphHeaders = true,
	curveRightBottom,
	tab,
	listColor,
	bottomMargin,
	header,
}) => {
	return (
		// <VisibilitySensor partialVisibility once>
		//   {({ isVisible }) => (
		<Wrapper
			//className={isVisible ? "slideUp enter" : "slideUp"}
			tab={tab}
			bottomMargin={bottomMargin}
		>
			{curve && (
				<Curve curveRight={curveRight} curveRightBottom={curveRightBottom}>
					<CurveSVG />
				</Curve>
			)}
			<Tabs>
				<TabsWrapper>
					{content.items.map((item, i) => (
						<TabBox key={i}>
							<Tab>
								<Content>
									<Counting>{item.count}</Counting>
									{(!header || !paragraphHeaders) && (
										<span>{item.question}</span>
									)}
									{header === 2 && (
										<Heading size={2} template={3} left>
											{item.question}
										</Heading>
									)}
									{(header === 3 || paragraphHeaders) && (
										<Heading size={3} left bottomMargin={0}>
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
									<Icon>
										<ArrowSVG />
									</Icon>
								</Content>
							</Tab>
							<Panel>
								<PanelWrapper>
									{typeof item.answer === "string" ? (
										<Paragraph mixed bottomMargin="0">
											{parse(item.answer)}
										</Paragraph>
									) : null}
									{typeof item.answer === "object" ? (
										<Paragraph mixed bottomMargin="0">
											{item.answer.map((el, i) =>
												el.url ? (
													<Link to={el.url} key={i}>{` ${parse(
														el.text
													)} `}</Link>
												) : (
													el.text
												)
											)}
										</Paragraph>
									) : null}
									{/* <p>{item.answer}</p> */}
									{item.list && (
										<ListItems listColor={listColor}>
											{item.list.map((listitem, i) => (
												<li key={i}>{listitem}</li>
											))}
										</ListItems>
									)}

									{typeof item.text === "string" ? (
										<Paragraph topMargin="32" bottomMargin="0" mixed>
											{parse(item.text)}
										</Paragraph>
									) : null}
									{typeof item.text === "object" ? (
										<Paragraph topMargin="32" bottomMargin="0" mixed>
											{item.text.map((el, i) =>
												el.url ? (
													<Link to={el.url} key={i}>{` ${parse(
														el.text
													)} `}</Link>
												) : (
													el.text
												)
											)}
										</Paragraph>
									) : null}

									{typeof item.text2 === "string" ? (
										<Paragraph topMargin="32" bottomMargin="0" mixed>
											{parse(item.text2)}
										</Paragraph>
									) : null}
									{typeof item.text2 === "object" ? (
										<Paragraph topMargin="32" bottomMargin="0" mixed>
											{item.text2.map((el, i) =>
												el.url ? (
													<Link to={el.url} key={i}>{` ${parse(
														el.text
													)} `}</Link>
												) : (
													el.text
												)
											)}
										</Paragraph>
									) : null}

									{item.textAfterList && (
										<p style={{ marginTop: 26 + "px" }}>{item.textAfterList}</p>
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
export default AccordionWithCounting;
