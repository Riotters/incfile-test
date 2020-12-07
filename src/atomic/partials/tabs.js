import React, { useState } from "react";
//import { Tabs } from "@bumaga/tabs";
import { Tabs } from "react-tabs";
import styled from "styled-components";
import Container from "../../atomic/container";
//import VisibilitySensor from "../../components/VisibilitySensor";
import PropTypes from "prop-types";
import { color } from "../../components/styles/colors";

const TabsSection = ({ layout, column, children, oval, ...rest }) => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Container>
			<MainWrapper id="tabs-wrapper" {...rest}>
				<Wrapper layout={layout}>
					<Tabs
						forceRenderTabPanel={true}
						selectedIndex={tabIndex}
						onSelect={(index) => setTabIndex(index)}
					>
						{children}
					</Tabs>
				</Wrapper>
			</MainWrapper>
		</Container>
	);
};

const MainWrapper = styled.div`
	padding-bottom: 100px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

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

TabsSection.propTypes = {
	layout: PropTypes.string,
};

export default TabsSection;
