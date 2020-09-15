import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";
import NumericBox from "../../molecules/mixed-blocks/numeric-box"

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    position: relative;
    margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};

    li {
        display: flex;
        margin-bottom: ${props => !props.noBox ? "8px" : "24px"};
        padding: ${props => !props.noBox ? "24px 40px 24px 24px" : ""};

        & > span {
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
            color: ${props => !props.noBox ? color.black : ""};
            padding: 0;
        }
    }
`

const NumericBoxedList = ({ className, content, noBox, curve, bottomMargin, ...rest }) => {
  return (
    <Wrapper className={className} bottomMargin={bottomMargin} noBox={noBox} {...rest}>
        {curve && (
            <Curve top="-25" left="-29" color={color.blue1}>
                <CurveSVG />
            </Curve>
        )}
        {content.map((item, id) => (
            <NumericBox item={item} id={id} noBox={noBox} />
        ))}
    </Wrapper>
  )
}

export default NumericBoxedList;
