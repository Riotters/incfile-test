import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import parse from "html-react-parser";

import ActionButton from "../../molecules/buttons/button-action";
import ListWithDot from "../../states-llc/list-with-dot";
import { color } from "../../atoms/styles/colors";
import ArrowLink from "../../../components/arrow-link";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowSVG from "../../../images/arrow-circle.inline.svg";
import CurveSVG from "../../../images/orange-curve.inline.svg";

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: ${(props) =>
		props.topMargin ? `${props.topMargin}px` : props.tab ? "" : "24px"};
  margin-bottom: ${(props) =>
		props.bottomMargin ? `${props.bottomMargin}px` : ""};

  @media (min-width: 769px) {
    margin-top: ${(props) =>
			props.topMargin ? `${props.topMargin}px` : props.tab ? "" : "56px"};
    ${(props) => (props.noAutoWidth ? "" : "width: auto;")}
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
		top: ${(props) =>
			!props.curveRightBottom && !props.curveLeftBottom ? "0" : ""};
		left: ${(props) => (props.curveLeft || props.curveLeftBottom ? "0" : "")};
		right: ${(props) =>
			props.curveRight || props.curveRightBottom ? "0" : ""};
		bottom: ${(props) =>
			props.curveRightBottom || props.curveLeftBottom ? "-25px" : ""};
		transform: ${(props) =>
			props.curveRight
				? "rotate(90deg)"
				: props.curveRightBottom
				? "scale(-1)"
				: props.curveLeftBottom
				? "rotate(-90deg)"
				: ""};
	}

	svg {
		path {
			fill: ${(props) => (props.curveColor ? props.curveColor : "")};
		}
	}
`;

const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: ${(props) => props.maxWidth ?? "770"}px;
`;

const TabBox = styled.div`
	box-shadow: 0 24px 32px 0 rgba(236, 236, 236, 0.5);
	margin-bottom: 8px;
	width: 100%;

	.accordion__panel {
		overflow: hidden;
		//transition: max-height 0.6s;
		max-height: 1200px;
		width: 100%;
		opacity: 1;

		&[hidden] {
			//transition: max-height 0.6s, padding-top 0.6s, padding-bottom 0.6s, opacity 0.6s;
			display: block;
			max-height: 0;
			padding-top: 0;
			padding-bottom: 0;
			opacity: 0;
		}
	}
`;

const PanelWrapper = styled.div`
  .accordion__panel {
    &[aria-expanded="true"] {
      display: flex;
    }

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
    }
  }

  a {
    color: ${color.blue1};
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;

    &.button {
        color: ${color.white};
        background-color: ${color.orange1};
        border: 2px solid ${color.orange1};
        border-radius: 50px;
        padding: 10px 38px;
        background-color 0.3s ease,color 0.3s ease;

        &:hover {
            color: ${color.orange1};
            background-color: ${color.white};
        }
    }
  }

  li {
    font-size: 14px;
    line-height: 19px;

    a {
      font-size: inherit;
      line-height: inherit;
      color: ${color.blue1};
      text-decoration: none;
    }
  }

  ul {
    //list-style: none;
    padding-left: 16px;

    li {
      padding-top: 16px;
    }
  }
`;

const Button = styled.div`
	min-width: 80px;
	width: 100%;
	color: #4e4e4e;
	align-items: center;
	background: #fff;
	display: flex;
	cursor: pointer;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	border: none;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 16px 40px 16px 0;

	span,
	h3,
	h4,
	h5 {
		color: #4e4e4e;
		font-family: Avenir;
		font-size: 16px;
		font-weight: normal;
		text-align: left;
		width: 100%;
		line-height: 24px;
		max-width: 100%;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 80px;
	min-height: 80px;
	min-width: 80px;
	max-height: 80px;
	max-width: 80px;
	opacity: 0.75;

	svg {
		transform: rotate(180deg);
		transition: transform 0.3s ease;
	}
`;

const TabHeading = styled(AccordionItemHeading)`
	.accordion__button[aria-expanded="true"] {
		border-radius: 5px 5px 0 0;

		span,
		h3,
		h4,
		h5 {
			font-weight: 900;
		}

		svg {
			transform: rotate(0deg);
		}
	}
`;

const cn = (...args) => args.filter(Boolean).join(" ");

// const Tab = ({ children }) => {
//   const { isActive, onClick } = useTabState();
//
//   return (
//     <Button className={cn("accordion-tab", isActive && "active")} onClick={onClick}>
//       {children}
//     </Button>
//   );
// };

const panel = {
	hidden: { height: 0 },
	visible: { height: "auto" },
};

// const Panel = ({ children }) => {
//   const isActive = usePanelState();
//
//   return (
//     <motion.div className="accordion-panel" animate={isActive ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: 0.3 }} variants={panel}>
//       {children}
//     </motion.div>
//   );
// };

const AccordionFaq = ({
	content,
	curve,
	curveRight,
	curveRightBottom,
	curveLeft,
	curveLeftBottom,
	curveColor,
	tab,
	maxWidth,
	noAutoWidth,
	topMargin,
	bottomMargin,
	header,
	action,
}) => {
	return (
		// <VisibilitySensor partialVisibility once>
		//   {({ isVisible }) => (
		<Wrapper
			//className={isVisible ? "slideUp enter" : "slideUp"}
			tab={tab}
			noAutoWidth={noAutoWidth}
			topMargin={topMargin}
			bottomMargin={bottomMargin}
		>
			{curve && (
				<Curve
					curveRight={curveRight}
					curveRightBottom={curveRightBottom}
					curveLeft={curveLeft}
					curveLeftBottom={curveLeftBottom}
					curveColor={curveColor}
				>
					<CurveSVG />
				</Curve>
			)}
			<TabsWrapper maxWidth={maxWidth}>
				<Accordion allowZeroExpanded={true}>
					{content.items.map((item, i) => (
						<TabBox key={i}>
							<AccordionItem>
								<TabHeading>
									<AccordionItemButton>
										<Button className="accordion-tab">
											<Icon>
												<ArrowSVG />
											</Icon>
											<Content>
												{!header && <span>{item.question}</span>}
												{header === 3 && <h3>{item.question}</h3>}
												{header === 4 && <h4>{item.question}</h4>}
												{header === 5 && <h5>{item.question}</h5>}
											</Content>
										</Button>
									</AccordionItemButton>
								</TabHeading>
								<PanelWrapper className="accordion-panel">
									<AccordionItemPanel>
										{typeof item.answer === "string" ? (
											<Paragraph bottomMargin="0" mixed>
												{parse(item.answer)}
											</Paragraph>
										) : null}
										{typeof item.answer === "object" ? (
											<Paragraph bottomMargin="0" mixed>
												{item.answer.map((el, i) =>
													el.url ? (
														<Link to={el.url} key={i}>{` ${parse(el.text)} `}</Link>
													) : (
														parse(el.text)
													)
												)}
											</Paragraph>
										) : null}

										{item.list && (
											<ul>
												{item.list.map((listitem, i) => (
													<li key={i}>{parse(listitem)}</li>
												))}
											</ul>
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
														<Link to={el.url} key={i}>{` ${parse(el.text)} `}</Link>
													) : (
														el.text
													)
												)}
											</Paragraph>
										) : null}

										{item.answer2 &&
											item.answer2.map((e, i) => (
												<div key={i}>
													{e.type === "paragraph" && (
														<Paragraph
															mixed={true}
															bottomMargin={e.marginBottom}
														>
															{parse(e.content)}
														</Paragraph>
													)}

													{e.type === "arrow-links" &&
														e.content.map((link, i) => (
                                                            <ArrowLink
                                                                key={i}
																url={link.url}
																style={link.style}
																externalLink={link.externalLink}
															>
																{parse(link.text)}
															</ArrowLink>
														))}

													{e.type === "list-dot-without-bg" && (
														<ListWithDot color={e.color} content={e.content} />
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
													{e.type === "action" && (
														<ActionButton
															content={e.content}
															theme={e.theme}
															onClick={action}
															arrow
															width={e?.width ?? "450px"}
															margin={e.margin}
															marginMD={e.marginMD}
														/>
													)}
												</div>
											))}

										{item.arrowLink && (
											<ArrowLink
												url={item.arrowLink.url}
												style={item.arrowLink.styles}
												externalLink={item.externalLink}
											>
												{item.arrowLink.text}
											</ArrowLink>
										)}
									</AccordionItemPanel>
								</PanelWrapper>
							</AccordionItem>
						</TabBox>
					))}
				</Accordion>
			</TabsWrapper>
		</Wrapper>
		//   )}
		// </VisibilitySensor>
	);
};

export default AccordionFaq;

Accordion.propTypes = {
	bottomMargin: PropTypes.number,
};
