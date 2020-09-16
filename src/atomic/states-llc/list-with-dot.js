import React from "react";
import styled from "styled-components";
import { color } from "../atoms/styles/colors";
import parse from 'html-react-parser'

const dotColor = (circleColor) => {
  switch (circleColor) {
    case color.blue3: {
      return color.blue1;
    }
    case color.orange3: {
      return color.orange1;
    }
    case color.green3: {
      return color.green1;
    }
    case color.purple3: {
      return color.purple1;
    }
    case color.babyblue3: {
      return color.babyblue1;
    }
    case color.yellow3: {
      return color.yellow1;
    }
    default:
      return "";
  }
};

const Wrapper = styled.ul`
    position: relative;
    list-style: none;
    margin-bottom: 24px;
    padding-left: 0 !important;

    li {
        font-family: Avenir, sans-serif;
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
        padding-left: 26px;
        padding-top: 0 !important;
        position: relative;

        &::before {
            content: "";
            height: 4px;
            width: 4px;
            background-color: ${({ color }) => dotColor(color)};
            border-radius: 50%;
            position: absolute;
            top: 9px;
            left: 6px;
        }

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const ListWithDot = ({ className, color, content }) => {
  return (
    <Wrapper className={className} color={color}>
        {content.map((item) => (
            <li>{parse(item)}</li>
        ))}
    </Wrapper>
  );
};

export default ListWithDot;
