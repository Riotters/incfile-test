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

const Wrapper = styled.ul`
    width: 100%;
    list-style: none;
    position: relative;
    margin-bottom: ${props => props.bottomMargin ? `${props.bottomMargin}px` : ""};

    li {
        display: flex;
        margin-bottom: 8px;
        padding: 24px;

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
            <Whitebox>
                <Circle>
                    {id + 1}
                </Circle>
                <TextWrapper>
                {item.header && (
                    <Heading size="5" bottomMargin="36">{item.header}</Heading>
                )}
                {item.text && (
                    <Paragraph bottomMargin="0">{item.text}</Paragraph>
                )}
                {item.url && (
                    <Link content={item.url} bottomMargin="0" />
                )}
                {!item.header && !item.text && !item.url && (
                    <Paragraph bottomMargin="0">{item}</Paragraph>
                )}
                </TextWrapper>
            </Whitebox>
        ))}
    </Wrapper>
  )
}

export default NumericBoxedList;
