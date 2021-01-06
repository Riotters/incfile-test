import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentCenter from "../../../partials/content-center";
import { Tabs, Panel, useTabState } from "@bumaga/tabs";
import StatesTable from "../../../../components/states-table/states-table";
import { shadow } from "../../../atoms/styles/shadows";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";

const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 56px;
	overflow: hidden;
`;

const TabsWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	width: 100%;
	max-width: 770px;
	background-color: ${color.white};
	box-shadow: ${shadow.white1};
	border-radius: 24px;
	overflow: hidden;

	@media (min-width: 992px) {
		width: auto;
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

const Scroller = styled.div`
	display: flex;
	align-items: center;
	overflow-x: scroll;
	border-radius: 24px;
	width: 770px;

	&::-webkit-scrollbar,
	&::-webkit-scrollbar {
		display: none;
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	min-width: 212px;
	width: 100%;
	max-width: 252px;
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
const Wrapper = styled.section`
	width: 100%;
`;

const WhichStatesAreFast = ({ className, content, stateListCompare }) => {
	const [filingTimesSlow, setFilingTimesSlow] = useState([
		{ title: "5 Business Days", percent: "0", states: [] },
		{ title: "1 Week", percent: "0", states: [] },
		{ title: "7 Business Days", percent: "0", states: [] },
	]);

	const [filingTimesFast, setFilingTimesFast] = useState([
		{ title: "1 Business Day", percent: "0", states: [] },
		{ title: "2 Business Day", percent: "0", states: [] },
		{ title: "2 Business Days", percent: "0", states: [] },
	]);

	const [expeditedPrice, setExpeditedPrice] = useState([
		{ title: "$50", percent: "0", states: [] },
		{ title: "$70", percent: "0", states: [] },
		{ title: "$75", percent: "0", states: [] },
	]);

	const filterNormalFilingTimes = (entries) => {
		let states = [];
		let states2 = [];
		let states3 = [];

		entries
			.filter((entry) => entry.normalProcessingTime === "3 Weeks")
			.map((entry) => {
				states.push(entry.state);

				setFilingTimesSlow((prevState) => {
					let newFilingTimeSlow = [...prevState];
					newFilingTimeSlow[0] = {
						title: `3 Weeks`,
						states: states,
						percent: Math.ceil((states.length / 51) * 100),
					};

					return newFilingTimeSlow;
				});
			});

		entries
			.filter((entry) => entry.normalProcessingTime === "5 Weeks")
			.map((entry) => {
				states2.push(entry.state);

				setFilingTimesSlow((prevState) => {
					let newFilingTimeSlow = [...prevState];
					newFilingTimeSlow[1] = {
						title: `5 Weeks`,
						states: states2,
						percent: Math.ceil((states2.length / 51) * 100),
					};

					return newFilingTimeSlow;
				});
			});

		entries
			.filter((entry) => entry.normalProcessingTime === "6 Weeks")
			.map((entry) => {
				states3.push(entry.state);

				setFilingTimesSlow((prevState) => {
					let newFilingTimeSlow = [...prevState];
					newFilingTimeSlow[2] = {
						title: `6 Weeks`,
						states: states3,
						percent: Math.ceil((states3.length / 51) * 100),
					};

					return newFilingTimeSlow;
				});
			});
	};

	const filterExpeditedFilingTimes = (entries) => {
		let states = [];
		let states2 = [];
		let states3 = [];

		entries
			.filter((entry) => entry.expeditedProcessingTime === "1 Business Day")
			.map((entry) => {
				states.push(entry.state);

				setFilingTimesFast((prevState) => {
					let newfilingTimesFast = [...prevState];
					newfilingTimesFast[0] = {
						title: `1 Business Day`,
						states: states,
						percent: Math.ceil((states.length / 51) * 100),
					};

					return newfilingTimesFast;
				});
			});

		entries
			.filter((entry) => entry.expeditedProcessingTime === "2 Business Day")
			.map((entry) => {
				states2.push(entry.state);

				setFilingTimesFast((prevState) => {
					let newfilingTimesFast = [...prevState];
					newfilingTimesFast[1] = {
						title: `2 Business Day`,
						states: states2,
						percent: Math.ceil((states2.length / 51) * 100),
					};

					return newfilingTimesFast;
				});
			});

		entries
			.filter((entry) => entry.expeditedProcessingTime === "2 Business Days")
			.map((entry) => {
				states3.push(entry.state);

				setFilingTimesFast((prevState) => {
					let newfilingTimesFast = [...prevState];
					newfilingTimesFast[2] = {
						title: `2 Business Days`,
						states: states3,
						percent: Math.ceil((states3.length / 51) * 100),
					};

					return newfilingTimesFast;
				});
			});
	};

	const filterExpeditedPrices = (entries) => {
		let states = [];
		let states2 = [];
		let states3 = [];

		entries
			.filter((entry) => entry.expeditedPrice == 50)
			.map((entry) => {
				states.push(entry.state);

				setExpeditedPrice((prevState) => {
					let newData = [...prevState];
					newData[0] = {
						title: `$50`,
						states: states,
						percent: Math.ceil((states.length / 51) * 100),
					};

					return newData;
				});
			});

		entries
			.filter((entry) => entry.expeditedPrice == 70)
			.map((entry) => {
				states2.push(entry.state);

				setExpeditedPrice((prevState) => {
					let newData = [...prevState];
					newData[1] = {
						title: `$70`,
						states: states2,
						percent: Math.ceil((states2.length / 51) * 100),
					};

					return newData;
				});
			});

		entries
			.filter((entry) => entry.expeditedPrice == 75)
			.map((entry) => {
				states3.push(entry.state);

				setExpeditedPrice((prevState) => {
					let newData = [...prevState];
					newData[2] = {
						title: `$75`,
						states: states3,
						percent: Math.ceil((states3.length / 51) * 100),
					};

					return newData;
				});
			});
	};

	useEffect(() => {
		filterNormalFilingTimes(stateListCompare);
		filterExpeditedFilingTimes(stateListCompare);
		filterExpeditedPrices(stateListCompare);
	}, [stateListCompare]);

	return (
		<Wrapper>
			<ContentCenter className={className} contentWidth={970}>
				<Heading size={2} bottomMargin={104}>
					{content.header}
				</Heading>
				<Tabs>
					<Wrapper>
						<Flex>
							<TabsWrapper>
								<Scroller>
									{content.tabs.headers.map((header, i) => (
										<Tab key={i}>{header}</Tab>
									))}
								</Scroller>
							</TabsWrapper>
						</Flex>

						<PanelsWrapper>
							<Panel>
								<StatesTable width="970px" entries={filingTimesSlow} />
							</Panel>
							<Panel>
								<StatesTable width="970px" entries={filingTimesFast} />
							</Panel>
							<Panel>
								<StatesTable width="970px" entries={expeditedPrice} />
							</Panel>
						</PanelsWrapper>
					</Wrapper>
				</Tabs>
			</ContentCenter>
		</Wrapper>
	);
};

export default WhichStatesAreFast;
