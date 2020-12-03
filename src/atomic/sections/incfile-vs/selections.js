import React, { useState, useRef } from "react";
import styled from "styled-components";
import parser from "html-react-parser";
import { color, gradient } from "../../atoms/styles/colors";
import { states } from "../../../components/states";
import Dropdown from "../../molecules/form/dropdown";
import ContentCenter from "../../partials/content-center";
import TextCenterLayout from "../../partials/heading-center";
import TopImageBox from "../../../components/top-image-box";
import Button from "../../molecules/buttons/button";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-left-transparent-blue3.inline.svg";
import { Heading } from "../../atoms/typography/heading";

const Seletions = styled.div`
	background-image: ${gradient.blue3reverse};
	padding-bottom: 50px;
	padding-top: 100px;
	position: relative;

	@media (min-width: 576px) {
		padding-bottom: 100px;
	}

	.calculator-main {
		padding: 88px 40px 48px;
		max-width: 630px;
		text-align: center;

		margin-bottom: 48px;
	}
`;

const ImageBoxes = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	padding-top: 80px;
	padding-bottom: 48px;
	width: 100%;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 970px) {
		width: 970px;
		margin: 0 auto;
	}

	.box {
		padding: 16px 16px 56px;

		h4 {
			text-align: center;
			padding: 24px 0 0;
		}

		&--left {
			border-radius: 5px;

			@media (min-width: 769px) {
				border-radius: 50px 5px 5px 50px;
			}

			.top {
				border-radius: 5px;

				@media (min-width: 769px) {
					border-radius: 35px 5px 5px 5px;
				}
			}
		}

		&--right {
			border-radius: 5px;

			@media (min-width: 769px) {
				border-radius: 5px 50px 50px 5px;
			}

			.top {
				border-radius: 5px;

				@media (min-width: 769px) {
					border-radius: 5px 35px 5px 5px;
				}
			}
		}
	}

	.dropdown {
		max-width: 375px;
		margin: 0 auto;
	}
`;

const dropdownOptions = ["LLC", "S-Corporation", "C-Corporation", "Nonprofit"];
const dropdownOptions2 = states.state.map((state) => state.name);

const SeletionsSection = ({ content, id }) => {
	const cards = content.cards;
	const [selectedEntity, setSelectedEntity] = useState("");
	const [selectedState, setSelectedState] = useState("");

	const handleOnChangeEntity = (option) => {
		setSelectedEntity(option.value);
	};

	const handleOnChangeState = (option) => {
		setSelectedState(option.value);
	};

	return (
		<Seletions id={id}>
			<Oval height="570" width="570" top="0" left="0" zIndex="0">
				<OvalSVG />
			</Oval>
			<ContentCenter>
				<TextCenterLayout headline={content.header} headlineWidth="770" />

				<ImageBoxes>
					<TopImageBox
						className="box box--left"
						image="lcsn-4343"
						color={color.green3}
					>
						<Heading size={4}>{cards[0]}</Heading>
						<Dropdown
							className="dropdown"
							placeholder="Select"
							onChange={handleOnChangeEntity}
							options={dropdownOptions}
						/>
					</TopImageBox>
					<TopImageBox
						className="box box--right"
						image="your-state-7282"
						color={color.blue3}
					>
						<Heading size={4}>{cards[1]}</Heading>
						<Dropdown
							className="dropdown"
							placeholder="Select"
							onChange={handleOnChangeState}
							options={dropdownOptions2}
						/>
					</TopImageBox>
				</ImageBoxes>

				<Button
					content={{
						text: "Form my LLC ",
						url: `${process.env.ORDER_URL}/form-order-now.php?entityType=${selectedEntity}&entityState=${selectedState}`,
					}}
					theme="primary56"
					margin="0 0 32px 0"
					arrow
				/>
			</ContentCenter>
		</Seletions>
	);
};

export default SeletionsSection;
