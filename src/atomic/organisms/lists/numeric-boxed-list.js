import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box-li";
import Circle from "../../atoms/icons/circle";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    position: relative;

    li {
        display: flex;
        margin-bottom: 8px;
        padding: 24px;

        span {
            background-color: ${color.blue1};
            color: ${color.white};
            margin-right: 24px;
        }

        p {
            display: flex;
            align-items: center;
            min-height: 32px;
            font-size: 16px;
            line-height: 24px;
            color: ${color.black};
            padding: 0;
        }
    }
`

const NumericBoxedList = ({ className, content, curve }) => {
  return (
    <Wrapper className={className}>
        {curve && (
            <Curve top="-25" left="-29" color={color.blue1}>
                <CurveSVG />
            </Curve>
        )}
        {content.map((item, id) => (
            <Whitebox>
            <Circle>
                {id + 1}
            </Circle>
            <p>{item}</p>
        </Whitebox>
        ))}
    </Wrapper>
  )
}

export default NumericBoxedList;
