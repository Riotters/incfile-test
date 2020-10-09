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

const Box = styled(Whitebox)`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 8px;

  span {
    font-family: Avenir, sans-serif;
    font-weight: 900;
    font-size: 12px;
    line-height: 12px;
    color: ${color.grey2};
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
    <Box>
      <span>{content.color}</span>
      <span>{content.variant}</span>
    </Box>
    <ImageWrapper />
    <Price>${content.price}</Price>
    <Heading size="4" bottomMargin="32">
      {content.header}
    </Heading>
    <Paragraph bottomMargin="6">{content.text}</Paragraph>
    <ul className="list">
      {content.list.map((item) => (
        <li>
          <TextCheck>{item}</TextCheck>
        </li>
      ))}
    </ul>
    <Button theme="primary48" content={content.button} marginSM="0 0 12px 0" arrow />
    <Paragraph bottomMargin="6">{content.fee}</Paragraph>
  </Wrapper>
);

export default PricingCard;
