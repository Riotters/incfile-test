//import React from "react";
import React, {useState} from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import Range from "../../molecules/form/range-slider";
import WhiteBox from "../../atoms/boxes/white-box";
import { Paragraph } from "../../atoms/typography/paragraph";
//import AmountSlider from "../../../components/amount-slider/amount-slider";

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

const makeString = (val) => {
  parseInt(val * 0.967 * 100)
    .toString()
    .toLocaleString();
};

let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
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
        <Range />
        {/* <AmountSlider initValue={72000} maxValue={100000} step={500} description="Estimated yearly income" onChange={() => {}}/> */}
        <Box>
          <div className="savings-text">
            <Heading size="4" bottomMargin="0">
              Total Savings
            </Heading>
          </div>
          <div className="savings-amount">
            <span>
              {/* $
              {parseInt(rangeVal * 0.967 * 100)
                .toString()
                .toLocaleString()} */}
                {amount}
            </span>
          </div>
        </Box>
      </>
    );
  }
}

export default TotalSavings;
