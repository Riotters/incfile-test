import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import TextCheck from "../../molecules/text-blocks/text-check";
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

  ul {
    list-style: none;
    
    li {
      font-family: Avenir, sans-serif;
      color: ${color.grey2};
    } 
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${color.white};
  border: 2px solid ${color.blue1};
  border-radius: 5px;
  padding: 12px 16px;
  margin-bottom: 8px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    font-family: Avenir, sans-serif;
    font-weight: 900;
    font-size: 12px;
    line-height: 12px;
    color: ${color.blue1};
    text-transform: uppercase;
  }
`;

const ImageWrapper = styled.div`
  height: 160px;
  width: 160px;
`;

const Price = styled.span`
  font-family: MarkPro, sans-serif;
  font-size: 32px;
  line-height: 40px;
  color: ${color.black};
  margin-bottom: 2px;
`;

const PricingCard = ({ className, content, ...rest }) => (
  <Wrapper className={className} content={content} {...rest}>
    {content.variant && (
      <Box>
        <span>{content.variant}</span>
      </Box>
    )}
    <Heading size="4" marginBottom="16">{content.header}</Heading>
    <Paragraph bottomMargin="6">{content.text}</Paragraph>
    <ImageWrapper />
    <Price>${content.price}</Price>
    <Button theme="primary48" content={content.button} marginSM="0 0 12px 0" arrow />
    <ul className="list">
      {content.list.map((item) => (
        <li>
          <TextCheck>{item}</TextCheck>
        </li>
      ))}
    </ul>
    <Paragraph bottomMargin="6">{content.fee}</Paragraph>
  </Wrapper>
);

export default PricingCard;
