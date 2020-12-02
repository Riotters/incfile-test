import React, { useState } from "react";
//import { Tabs } from "@bumaga/tabs";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import Container from "../../atomic/container";
//import VisibilitySensor from "../../components/VisibilitySensor";
import PropTypes from "prop-types";

const TabsSection = ({ layout, column, children, oval, ...rest }) => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<MainWrapper id="tabs-wrapper" {...rest}>
			<Container>
				<Wrapper layout={layout}>
					{/* <VisibilitySensor partialVisibility once> */}
					{/* {({ layout, column }) => ( */}
					<Tabs
						forceRenderTabPanel="true"
						selectedIndex={tabIndex}
						onSelect={(index) => setTabIndex(index)}
					>
						{React.Children.map(children, (child) =>
							React.cloneElement(child, {
								//layout: layout,
								//column: column,
							})
						)}
					</Tabs>
					{/* )} */}
					{/* </VisibilitySensor> */}
				</Wrapper>
			</Container>
		</MainWrapper>
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

TabsSection.propTypes = {
	layout: PropTypes.string,
};

export default TabsSection;
