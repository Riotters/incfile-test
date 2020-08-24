import React from "react";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import styled from "styled-components";
import WhiteBox from "../../atoms/boxes/white-box";

const Wrapper = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  padding: 80px 96px 40px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 176px;
  width: 176px;
  margin: 0 auto 40px;

  h3 {
    width: auto;
    position: relative;
    font-size: 28px;
    line-height: 36px;

    span {
      position: absolute;
      top: -10px;
      right: -15px;
      font-family: Avenir, sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: ${color.grey2};
    }
  }
`;

const Money = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "0")};

  .color-box {
    height: 32px;
    width: 32px;
    border-radius: 5px;
    margin-right: 16px;
  }

  h4 {
    margin-right: 8px;
  }
`;

const BusinessRevenue = () => (
  <Wrapper>
    <Circle>
      <Heading size="3">
        120,000<span>$</span>
      </Heading>
    </Circle>
    <Heading size="4">Your business revenue a year</Heading>
    <Money bottomMargin="16">
      <span className="color-box" style={{ background: color.blue1 }} />
      <Heading size="4" bottomMargin="0">
        $90,000
      </Heading>
      <Paragraph big bottomMargin="0">
        profits a year
      </Paragraph>
    </Money>
    <Money>
      <span className="color-box" style={{ background: color.blue3 }} />
      <Heading size="4" bottomMargin="0">
        $30,000
      </Heading>
      <Paragraph big bottomMargin="0">
        expenses a year
      </Paragraph>
    </Money>
  </Wrapper>
);

export default BusinessRevenue;
