import React from "react";
import styled from "styled-components";
import { color } from "../../../../components/styles/colors";
import { states } from "../../../../components/states";
import Dropdown from "../../../molecules/form/dropdown";
import ContentCenter from "../../../partials/content-center";
import TextCenterLayout from "../../../partials/heading-center";
import TopImageBox from "../../../../components/top-image-box";
import Button from "../../../molecules/buttons/button";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/top-left-transparent-green1.inline.svg";
import Oval2SVG from "../../../../images/ovals/top-right-transparent-green2.inline.svg";
import { Heading } from "../../../atoms/typography/heading";
import FilingTimeAndPriceBox from "../../../state-corporation/filing-time-and-price-box";
import ComplianceRequirementBox from "../../../state-corporation/compliance-requirement-box";
import { getFullPricesAndFilings } from "../../../../api/Api";
import {PHeading} from "../../../atoms/typography/p-to-heading";

const State = styled.div`
	background-color: ${color.green3};
	padding-bottom: 100px;
	padding-top: 100px;
	position: relative;
`;

const ImageBoxes = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 48px;
	width: 100%;

	@media (min-width: 970px) {
		width: 970px;
		margin: 0 auto;
	}

	.box {
		padding: 16px 16px 56px;
		border-radius: 5px;

		@media (min-width: 769px) {
			border-radius: 50px;
		}

		.top {
			border-radius: 5px;

			@media (min-width: 769px) {
				border-radius: 35px 35px 5px 5px;
			}
		}

		h4, [class*="i-believe-i-can-be-a-h"] {
			text-align: center;
			padding: 24px 0 0;
		}
	}

	.dropdown {
		max-width: 304px;
		margin: 0 auto;
	}
`;

const Result = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 770px;
	margin-top: 42px;
`;

const dropdownOptions = states.state.map((state) => state.name);

const StateSection = ({ content, getDataForVariants }) => {
	const [state, setState] = React.useState("Alabama");
	const [dataApi, setDataApi] = React.useState({});

	React.useEffect(() => {
		getFullPricesAndFilings(state, "LLC").then((data) => {
			setDataApi(data);
			getDataForVariants(data);
		});
	}, [state]);

	return (
		<State>
			<Oval height="420" width="420" top="5" left="0">
				<OvalSVG />
			</Oval>
			<Oval height="570" width="570" top="0" right="0">
				<Oval2SVG />
			</Oval>
			<ContentCenter>
				<TextCenterLayout headline={content.header} headlineWidth="700" />
				<ImageBoxes>
					<TopImageBox
						className="box box--left"
						image="your-state-7282"
						color={color.blue3}
					>
						<PHeading size={4}>{content.card.header}</PHeading>
						<Dropdown
							className="dropdown"
							placeholder="Alabama"
							options={dropdownOptions}
							onChange={(option) => setState(option.value)}
						/>
					</TopImageBox>
				</ImageBoxes>
				<Result>
					<FilingTimeAndPriceBox data={dataApi} />
					<ComplianceRequirementBox data={dataApi} />
				</Result>
			</ContentCenter>
		</State>
	);
};

export default StateSection;
