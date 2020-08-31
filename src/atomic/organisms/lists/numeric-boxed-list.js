import React from "react";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import Whitebox from "../../atoms/boxes/white-box-li";
import Circle from "../../atoms/icons/circle";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/bottom-left-top-right.inline.svg";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import NumericBox from "../../molecules/mixed-blocks/numeric-box"

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    position: relative;
    margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};

    li {
        display: flex;
        margin-bottom: 8px;
        padding: 24px 40px 24px 24px;

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
            color: ${color.black};
            padding: 0;
        }
    }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Link = styled(ArrowLink)`
    margin-top: 24px;
`;

const NumericBoxedList = ({ className, content, curve, bottomMargin }) => {
  return (
    <Wrapper className={className} bottomMargin={bottomMargin}>
        {curve && (
            <Curve top="-25" left="-29" color={color.blue1}>
                <CurveSVG />
            </Curve>
        )}
        {content.map((item, id) => (
            <NumericBox item={item} id={id} />
        ))}
    </Wrapper>
  )
}

export default NumericBoxedList;
