import React from "react";
import styled from "styled-components";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import Card from "../../molecules/mixed-blocks/download-pdf-box";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const TabsWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 770px;
	margin: 0 auto 80px;
	overflow: hidden;

	@media (min-width: 576px) {
		background-color: ${color.white};
		box-shadow: ${shadow.white1};
		height: 48px;
		border-radius: 24px;
	}

	button {
		margin-right: 4px;

		&:first-child {
			margin-left: 4px;
		}
	}
`;

const PanelsWrapper = styled.div`
	display: block;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	width: 100%;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const Scroller = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	overflow-x: scroll;

	@media (min-width: 576px) {
		border-radius: 24px;
	}

	width: 100%;

	&::-webkit-scrollbar,
	&::-webkit-scrollbar {
		display: none;
	}
`;

const Button = styled.button`
	display: flex;
	cursor: pointer;
	justify-content: center;
	transition: background-color 0.3s ease, color 0.2s ease;

	height: 78px;
	line-height: 78px;
	color: #4e4e4e;
	position: relative;
	background-color: transparent;
	overflow: hidden;
	border: 0;
	z-index: 0;
	min-width: 190px;
	font-size: 16px;

	@media (max-width: 575px) {
		&.active {
			z-index: 1;
			color: ${color.blue1};
			border-bottom: 2px solid ${color.blue1};
		}
	}

	@media (min-width: 576px) {
		align-items: center;
		height: 40px;
		min-width: 252px;
		background-color: ${color.white};
		border-radius: 24px;
		border: none;
		color: ${color.grey1};
		font-family: Engram, sans-serif;
		font-weight: 400;
		line-height: 24px;
		flex-grow: 1;
		font-size: 16px;

		&:hover {
			background-color: ${color.blue3};
		}

		&.active {
			background-color: ${color.blue1};
			color: ${color.white};
			font-weight: 900;
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

const pdfs = [
	[
		"pdf-1-6822",
		"pdf-5-0102",
		"pdf-6-3847",
		"pdf-7-6293",
		"pdf-15-6193",
		"pdf-17-7720",
		"pdf-23-5520",
		"pdf-10-2891",
		"pdf-13-5204",
		"pdf-9-3243",
	],
	[
		"pdf-2-4373",
		"pdf-8-8476",
		"pdf-4-9814",
		"pdf-3-3897",
		"pdf-20-3771",
		"pdf-19-8200",
		"pdf-12-8216",
		"pdf-16-3059",
		"pdf-18-9362",
		"pdf-26-5244",
		"pdf-25-5211",
		"pdf-21-4728",
	],
	["pdf-24-9588", "pdf-11-8729", "pdf-22-4629", "pdf-14-7292"],
];

const BusinessResourcesTabs = ({ content, openModal }) => (
	<Tabs>
		<Wrapper id="tabs-wrapper">
			<TabsWrapper>
				<Scroller>
					{content.switchers.map((switcher, i) => (
						<Tab key={i}>{switcher}</Tab>
					))}
				</Scroller>
			</TabsWrapper>
			<PanelsWrapper>
				{content.panels.map((panel, i) => (
					<Panel key={i}>
						<Grid>
							{panel.cards.map((card, j) => (
								<Card
									key={j}
									content={card}
									image={pdfs[i][j]}
									openModal={openModal}
								/>
							))}
						</Grid>
					</Panel>
				))}
			</PanelsWrapper>
		</Wrapper>
	</Tabs>
);

export default BusinessResourcesTabs;
