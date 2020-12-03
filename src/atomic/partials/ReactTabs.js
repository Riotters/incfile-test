import React, {useState} from "react";
import styled from "styled-components";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Container from "../container";
import SpaceshipSVG from "../../images/icons/space-ship.inline.svg";
import PlaneSVG from "../../images/icons/plane.inline.svg";
import RocketSVG from "../../images/icons/rocket.inline.svg";
import FlowerSVG from "../../images/icons/heart-flower.inline.svg";
import ArrowSVG from "../../images/arrow.inline.svg";
import {Collapse} from "react-collapse";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 100px;

	@media (min-width: 769px) {
		flex-direction: ${(props) => (props.layout !== "grid" ? "row" : "column")};
	}

	.accordion-panel {
		overflow: hidden;
	}

	.react-tabs {
		display: flex;
		justify-content: space-beteen;
		width: 100%;

		&__tab-list {
			list-style: none;
		}

		&__tab {
			padding: 0;

			button {
				width: 100%;
			}

			&--selected {
				button {
					box-shadow: 0 40px 80px 0 #e6e6e6;
					font-weight: 600;
					z-index: 1;

					.tabArrow {
						opacity: 1;
						transform: translateX(0);
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

const icons = [<SpaceshipSVG/>, <PlaneSVG/>, <RocketSVG/>, <FlowerSVG/>];

const ReactTabs = ({layout, columns, content, children}) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Container>
            <Wrapper id="tabs-wrapper" layout={layout}>
                <Tabs
                    forceRenderTabPanel={true}
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabsWrapper
                        layout={layout}
                    >
                        <Sticky layout={layout} columns={columns}>
                            <TabList>
                                {content.panels.map((panel, i) => (
                                    <Tab>
                                        <Button
                                            onClick={() => {
                                                scrollTop("tabs-wrapper");
                                            }}
                                        >
                                            <Icon><panel.icon /></Icon>
                                            <Content>
                                                <span>{panel.name}</span>
                                                <Arrow className="tabArrow">
                                                    <ArrowSVG/>
                                                </Arrow>
                                            </Content>
                                        </Button>
                                    </Tab>
                                ))}
                            </TabList>
                        </Sticky>
                    </TabsWrapper>
                    <Collapse isOpened={true}>
                        {children}
                    </Collapse>
                </Tabs>
            </Wrapper>
        </Container>
    );
};
export default ReactTabs;
