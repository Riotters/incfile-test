import React from "react";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import styled from "styled-components";
import WhiteBox from "../../atoms/boxes/white-box";
import CircleSVG from "../../../images/circle-graph.inline.svg";

const Wrapper = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 16px 40px;
  margin-top: 48px;

  @media (min-width: 992px) {
    align-items: flex-start;
    max-width: 470px;
    padding: 80px 96px 40px;
    margin-top: 0;
    margin-left: auto;
  }

  & > h4 {
    text-align: center;

    @media (min-width: 992px) {
      text-align: left;
    }
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 176px;
  width: 176px;
  margin: 0 auto 40px;
  position: relative;

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

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Money = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "0")};
  width: 280px;

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
      <CircleSVG />
      <Heading size="3" bottomMargin="0">
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
