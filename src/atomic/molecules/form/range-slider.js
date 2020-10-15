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
    font-family: MarkPro, sans-serif;
    font-size: 48px;
    line-height: 56px;
    font-weight: bold;
    text-align: center;
    color: ${color.orange1};
    margin-bottom: 24px;
  }
`;

const InputWrapper = styled.div`
  height: 32px;
  position: relative;

  .slider-bar {
    display: block;
    height: 16px;
    background-color: ${color.blue1};
    position: absolute;
    top: 8px;
    left: 0;
    border-radius: 10px;
    pointer-events: none;
  }

  input {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 16px; /* Specified height */
    background: ${color.blue3};
    outline: none; /* Remove outline */
    -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
    transition: opacity 0.2s;
    margin: 8px 0;
    border-radius: 10px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 32px; /* Set a specific slider handle width */
      height: 32px; /* Slider handle height */
      background: ${color.blue1};
      cursor: pointer; /* Cursor on hover */
      border-radius: 50%;
    }

    &::-moz-range-thumb {
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      background: #4caf50; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
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
        <AmountSlider initValue={72000} maxValue={100000} step={500} description="Estimated yearly income" onChange={() => {}}/>
      </WhiteBox>
    );
  }
}

export default Range;
