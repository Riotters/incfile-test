import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { color } from "./styles/colors";
import { shadow } from "./styles/shadows";

const TabsWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	background-color: ${color.white};
	box-shadow: ${shadow.white1};
	border-radius: 24px;
	margin-right: auto;

	button {
		margin-right: 4px;

		&:first-child {
			margin-left: 4px;
		}
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 280px;
	background-color: ${color.white};
	border-radius: 24px;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.2s ease;
	color: ${color.grey1};
	font-family: Engram, sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;

	&:hover {
		background-color: ${color.blue3};
	}

	&.active {
		background-color: ${color.blue1};
		color: ${color.white};
		font-weight: 900;
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

const NavigationTabs = () => (
	<Tabs>
		<TabsWrapper>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
			<Tab>Tab 3</Tab>
		</TabsWrapper>

		<Panel>
			<p>Panel 1</p>
		</Panel>
		<Panel>
			<p>Panel 2</p>
		</Panel>
		<Panel>
			<p>Panel 3</p>
		</Panel>
	</Tabs>
);

export default NavigationTabs;
