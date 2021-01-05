//import React from "react";
import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Range from "../../molecules/form/range-slider";
import WhiteBox from "../../atoms/boxes/white-box";
import { Paragraph } from "../../atoms/typography/paragraph";
//import AmountSlider from "../../../components/amount-slider/amount-slider";
import SelectorSVG from "../../../images/slider-selector.svg";
import { PHeading } from "../../atoms/typography/p-to-heading";

const Box = styled(WhiteBox)`
	display: flex;
	margin-top: 24px;
	padding: 24px 56px 24px 40px;

	.savings-text {
		display: flex;
		align-items: center;
		width: 54%;
		border-right: 1px solid ${color.grey5};
	}

	.savings-amount {
		display: flex;
		width: 46%;

		span {
			display: block;
			padding: 8px 26px;
			background-color: ${color.green3};
			border-radius: 20px;
			margin-left: auto;
		}
	}
`;

const BoxColumn = styled(WhiteBox)`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	padding: 24px 56px 24px 40px;

	.savings-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 54%;
		border-right: 1px solid ${color.grey5};

		p:not([class*="i-believe-i-can-be-a-h"]) {
			font-size: 14px;
			line-height: 20px;
			margin-bottom: 16px;

			span {
				color: ${color.orange1};
			}
		}
	}

	.savings-amount {
		display: flex;
		flex-direction: column;
		align-items: center;

		span {
			display: block;
			padding: 8px 26px;
			background-color: ${color.green3};
			border-radius: 20px;
		}
	}
`;

const SpaceBetween = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding-top: 16px;

	h5,
	[class*="i-believe-i-can-be-a-h5"] {
		padding-bottom: 8px;
	}

	&:last-child {
		padding-top: 24px;
		align-items: center;
	}
`;

const StaticRange = styled(WhiteBox)`
	display: flex;
	flex-direction: column;
	padding: 64px 16px;

	@media (min-width: 470px) {
		padding: 64px 56px;
	}

	h4,
	p,
	[class*="i-believe-i-can-be-a-h4"] {
		text-align: center;
	}

	#output {
		font-family: Engram-Bold, sans-serif;
		font-size: 48px;
		line-height: 56px;
		font-weight: bold;
		text-align: center;
		color: ${color.orange1};
		margin-bottom: 24px;
	}
`;

const Amount = styled.div`
	font-family: "Engram-Bold", sans-serif;
	font-size: 48px;
	font-weight: bold;
	line-height: 1.17;
	text-align: center;
	color: #fd8550;
	margin-bottom: 24px;
`;

const Description = styled.div`
	font-family: "Engram", sans-serif;
	font-size: 16px;
	line-height: 1.5;
	text-align: center;
	color: #7a7a7a;
	margin-bottom: 32px;
`;

const Slider = styled.div`
	width: 100%;
`;

const SliderRange = styled.div`
	-webkit-appearance: none;
	width: 100%;
	height: 16px;
	border-radius: 12px;
	outline: none;
	-webkit-transition: 0.2s;
	margin-bottom: 8px;
	position: relative;
	background-image: -webkit-gradient(
		linear,
		left top,
		right top,
		color-stop(${(props) => props.range}%, #5089fd),
		color-stop(${(props) => props.range}%, #d2e0fe)
	);
	background-image: -moz-linear-gradient(
		left center,
		#df7164 0%,
		#5089fd ${(props) => props.range}%,
		#f5d0cc ${(props) => props.range}%,
		#d2e0fe 100%
	);

	.cirlce {
		width: 2px;
		height: 54px;
		border: 0;
		position: absolute;
		left: ${(props) => props.range}%;
		top: 50%;
		background-color: ${color.blue1};
		transform: translateY(-50%);
	}
`;

const Scale = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 24px;

	.label {
		font-family: "Engram", sans-serif;
		font-size: 16px;
		line-height: 1.5;
		color: #4e4e4e;
		width: 33%;
		text-align: center;

		&:first-child {
			text-align: left;
		}

		&:last-child {
			text-align: right;
		}
	}
`;

const makeString = (val) => {
	parseInt(val * 0.967 * 100)
		.toString()
		.toLocaleString();
};

let formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});

let value = 6962;
let amount = formatter.format(value);

class TotalSavings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rangeVal: 0,
		};
		this.updateRange = this.updateRange.bind(this);
	}

	updateRange(val) {
		this.setState({
			rangeVal: val,
		});
	}

	render() {
		const { rangeVal } = this.state;
		return (
			<>
				{/* <Range /> */}
				<StaticRange>
					<Amount>$63,000</Amount>
					<Description>Estimated yearly income</Description>
					<Slider>
						<SliderRange range="63">
							<div className="cirlce"></div>
						</SliderRange>
					</Slider>
					<Scale>
						<div className="label">{formatter.format(0)}</div>
						<div className="label">{formatter.format(50000)}</div>
						<div className="label">{formatter.format(100000)}</div>
					</Scale>
					<Amount style={{ marginTop: "48px" }}>$26,000</Amount>
					<Description>
						Salary you could pay yourself as S Corporation
					</Description>
					<Slider>
						<SliderRange range="41">
							<div className="cirlce"></div>
						</SliderRange>
					</Slider>
					<Scale>
						<div className="label">{formatter.format(0)}</div>
						<div className="label">{formatter.format(31500)}</div>
						<div className="label">{formatter.format(63000)}</div>
					</Scale>
				</StaticRange>
				{/* <AmountSlider initValue={72000} maxValue={100000} step={500} description="Estimated yearly income" onChange={() => {}}/> */}
				<BoxColumn>
					<SpaceBetween>
						<div className="savings-text">
							<PHeading size={5} bottomMargin="0">
								As a Sole Propreitor
							</PHeading>
							<p>
								Slef Employment Taxes paid{" "}
								<span>{formatter.format(63000)}</span> as a Sole Propreitor
							</p>
						</div>
						<div className="savings-amount">
							<PHeading size={5} bottomMargin="0">
								Taxes Paid
							</PHeading>
							<span>{formatter.format(9639)}</span>
						</div>
					</SpaceBetween>
					<SpaceBetween>
						<div className="savings-text">
							<PHeading size={5} bottomMargin="0">
								As a S Corporation
							</PHeading>
							<p>
								With a salary of <span>{formatter.format(26000)}</span> and a
								dividend of <span>{formatter.format(37000)}</span>
							</p>
						</div>
						<div className="savings-amount">
							<PHeading size={5} bottomMargin="0">
								Taxes Paid
							</PHeading>
							<span>{formatter.format(3978)}</span>
						</div>
					</SpaceBetween>
					<SpaceBetween>
						<div className="savings-text">
							<PHeading size={4} bottomMargin="0">
								Total Savings
							</PHeading>
						</div>
						<div className="savings-amount">
							<span>
								{/* $
              {parseInt(rangeVal * 0.967 * 100)
                .toString()
                .toLocaleString()} */}
								{formatter.format(5661)}
							</span>
						</div>
					</SpaceBetween>
				</BoxColumn>
			</>
		);
	}
}

export default TotalSavings;
