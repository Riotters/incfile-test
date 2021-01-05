import React from "react";
import { color } from "../../atoms/styles/colors";
import { Paragraph } from "../../atoms/typography/paragraph";
import { Heading } from "../../atoms/typography/heading";
import Box from "../../atoms/boxes/white-box";
import styled from "styled-components";
import AmountSlider from "../../../components/amount-slider/amount-slider";

const WhiteBox = styled(Box)`
	display: flex;
	flex-direction: column;
	padding: 64px 56px;

	h4,
	p {
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

class Range extends React.Component {
	constructor(props) {
		super(props);
		//this.updateRange = this.updateRange.bind(this);
	}

	// updateRange(e) {
	//   this.props.updateRange(e.target.value);
	// }

	render() {
		//const { range } = this.props;
		return (
			<WhiteBox>
				{/* <Heading size="4" bottomMargin="32">
          What’s your estimated yearly net income for the business?
        </Heading>
        <span id="output">${range},000</span>
        <Paragraph bottomMargin="32">Estimated yearly income</Paragraph>
        <InputWrapper>
          <span className="slider-bar" style={{ width: `${range < 50 ? parseInt(range) + 4 : parseInt(range) - 1}%` }} />
          <input id="range" type="range" value={range} min="0" max="100" step="1" onChange={this.updateRange} />
        </InputWrapper> */}
				<AmountSlider
					initValue={72000}
					maxValue={100000}
					step={500}
					description="Estimated yearly income"
					onChange={() => {}}
				/>
			</WhiteBox>
		);
	}
}

export default Range;
