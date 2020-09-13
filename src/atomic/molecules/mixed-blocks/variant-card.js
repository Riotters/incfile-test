import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import Button from "../buttons/button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 470px;
  padding: 24px;
  position: relative;
  border: ${(props) => (props.border ? `solid 1px ${color.grey4}` : "")};
  background-color: ${(props) => (props.color ? props.color : "")};
  border-radius: 5px;

  span {
    font-family: MarkPro, sans-serif;
    font-size: 48px;
    line-height: 56px;
    color: ${color.orange1};
    margin-bottom: 24px;
  }

  p {
    text-align: center;
  }
`;

const PricingCard = ({ className, content, ...rest }) => (
  <Wrapper className={className} content={content} {...rest}>
    <Heading size="4" bottomMargin="32">
      {content.header}
    </Heading>
    <span>${content.price}</span>
    <Button theme="primary48" content={content.button} marginSM="0 0 12px 0" arrow />
    <Paragraph bottomMargin="6">{content.fee}</Paragraph>
  </Wrapper>
);

export default PricingCard;
