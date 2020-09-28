import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import IconCircle from "../../atoms/icons/circle";
import CheckSVG from "../../../images/circle-status-check.inline.svg";
import ExSVG from "../../../images/circle-status-x.inline.svg";

const Wrapper = styled(Whitebox)`
  display: grid;
  grid-template-columns: ${(props) => (props.columns && props.columns.length === 1 ? `repeat(${props.columns}, 1fr)` : props.columns ? props.columns : "1fr 160px 160px 160px 160px;")};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  min-width: 160px;

  @media (min-width: 769px) {
    min-width: auto;
  }

  .boxed {
    font-weight: 400;
    background-color: ${color.blue3};
    border-radius: 50px;
    padding: 8px 26px;
  }
`;

const GridTableRow = ({ className, content, columns }) => (
  <Wrapper className={className} columns={columns}>
    {columns && console.log(columns.length)}
    {content.map((item) => (
      <Cell>
        {item.type === "header" && (
          <Heading size="5" bottomMargin="0">
            {item.text}
          </Heading>
        )}
        {item.type === "text" && <Paragraph bottomMargin="0">{item.text}</Paragraph>}
        {item.type === "boxed" && (
          <Paragraph className="boxed" bottomMargin="0">
            {item.text}
          </Paragraph>
        )}
        {item.type === "array" && (
          <>
            <Paragraph className="boxed" bottomMargin="24">
              {item.text[0].text}
            </Paragraph>
            <Paragraph className="text" bottomMargin="24">
              {item.text[1].text}
            </Paragraph>
            <Heading size="5" bottomMargin="0">
              {item.text[2].text}
            </Heading>
          </>
        )}
      </Cell>
    ))}
  </Wrapper>
);

export default GridTableRow;
