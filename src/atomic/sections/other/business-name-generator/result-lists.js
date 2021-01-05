import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";

import { shadow } from "../../../atoms/styles/shadows";
import { Paragraph } from "../../../atoms/typography/paragraph";
import GridTwoColsSVG from "../../../../images/icons/grid-2-cols.inline.svg";
import GridThreeColsSVG from "../../../../images/icons/grid-3-cols.inline.svg";
import ArrowLeft from "../../../../images/arrow-circle.inline.svg";

const Wrapper = styled.div`
	position: relative;
	width: 100%;
`;

const DisplayOption = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 15px;
	margin-bottom: 32px;
	font-family: "Engram", san-serif;

	.display_option_icon {
		width: 18px;
		height: 18px;
		cursor: pointer;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: 1fr;
	grid-template-rows: max-content;

	@media screen and (min-width: 769px) {
		grid-template-columns: ${(props) =>
			props.display === "twoCol" ? "1fr 1fr" : "repeat(3, minmax(370px, 1fr))"};
	}
`;

const ResultItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.bg};
	border-radius: 5px;
	box-shadow: ${shadow.white2};
	height: 300px;
	position: relative;
	overflow: hidden;

	p {
		font-size: 32px;
		color: ${(props) => props.fontColor};
	}

	.result__item-btn-action {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		align-items: center;
		height: 90px;
		background: #fff;
		justify-content: center;
		position: absolute;
		bottom: 0;
		border-radius: 0 0 5px 5px;
		transform: translateY(90px);
		transition: all 0.3s ease;
		cursor: pointer;

		span {
			font-family: "Engram", san-serif;
			font-weight: bold;
			&:nth-child(1) {
				font-size: 16px;
				color: #1d1d1d;
			}
			&:nth-child(2) {
				font-size: 12px;
				color: #7a7a7a;
			}
		}

		.arrow {
			position: absolute;
			top: 50%;
			right: 36px;
			transform: translate(50%, -50%) rotate(90deg);
		}
	}

	&:hover .result__item-btn-action {
		transform: translateY(0);
	}
`;

const ResultSection = ({ content, keyword, isLoading }) => {
	const [display, setDisplay] = useState("threeCol");

	const handleDisplayOption = (option) => {
		setDisplay(option);
	};

	const checkName = (e, businessName) => {
		e.preventDefault();
		navigate("/check-availability-name/", { state: { businessName } });
	};

	return (
		<Wrapper>
			<Paragraph
				big
				mixed={true}
				style={{ textAlign: `center`, fontWeight: `bold` }}
				bottomMargin={30}
				topMargin={80}
			>
				{isLoading
					? `Hold on a split second while we warm up the search engines.`
					: `${content.length} business name results with keyword "${keyword}"`}
			</Paragraph>

			<DisplayOption>
				<span>{content.text2}</span>
				<span
					onClick={() => handleDisplayOption("twoCol")}
					className="display_option_icon"
				>
					<GridTwoColsSVG />
				</span>
				<span
					onClick={() => handleDisplayOption("threeCol")}
					className="display_option_icon"
				>
					<GridThreeColsSVG />
				</span>
			</DisplayOption>

			<Grid display={display}>
				<Fragment>
					{!isLoading &&
						content.map((item, index) => (
							<ResultItem
								key={index}
								className="result__item"
								bg={item.bgColor}
								fColor={item.fontColor}
							>
								<Paragraph>{item.businessName}</Paragraph>
								<div
									onClick={(e) => checkName(e, item.businessName)}
									className="result__item-btn-action"
								>
									<span>Search Name Availability</span>
									<span>{item.businessName}</span>
									<span className="arrow">
										<ArrowLeft />
									</span>
								</div>
							</ResultItem>
						))}
				</Fragment>
			</Grid>
		</Wrapper>
	);
};

export default ResultSection;
