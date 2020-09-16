import React from "react";
import styled from "styled-components";
import parse from 'html-react-parser';
import Colorbox from "../../atoms/boxes/color-box";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color } from "../../atoms/styles/colors";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";

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

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.bottomMargin ? `${props.bottomMargin}px` : "")};

  .box {
    padding: 48px 48px 48px 40px;
    border-radius: ${(props) => (props.rounded ? "5px 50px 50px 5px" : "")};

    ul {
      list-style: none;

      li {
        font-family: Avenir, sans-serif;
        font-size: 16px;
        line-height: 24px;
        color: ${color.grey1};
        padding-left: 26px;
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

        a{
          font-size: inherit;
        }
      }
    }
  }
`;

const IconTextColorBox = ({ className, color, content, bottomMargin, rounded, curve, ...rest }) => {
  return (
    <Wrapper className={className} rounded={rounded} bottomMargin={bottomMargin} color={color} {...rest}>
      {curve && (
        <Curve top="-15" right="-15" color={dotColor(color)}>
          <CurveSVG />
        </Curve>
      )}
      <Colorbox className="box" color={color}>
        {content.header && (
            <Heading size="4" bottomMargin="24">{content.header}</Heading>
        )}
          
        <ul>
          {content.list.map((item) => (
            <li>{parse(item)}</li>
          ))}
        </ul>
      </Colorbox>
    </Wrapper>
  );
};

export default IconTextColorBox;
