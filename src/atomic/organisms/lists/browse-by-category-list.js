import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box-li";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import ArrowLink from "../../molecules/buttons/text";
import ArrowSVG from "../../../images/arrow.inline.svg"
import BoxedButton from "../../molecules/buttons/boxed"
import Circle from "../../atoms/icons/circle";
import TaxesSVG from "../../../images/icons/taxes.inline.svg";
import Curve from "../../atoms/icons/curve";
import CurveSVG from "../../../images/curves/top-left-bottom-right.inline.svg";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;  
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 48px;

    span {
        margin-right: 24px;
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    position: relative;

    .article-link {
        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
`;

const BrowseByCategoryList = ({ className, content, icon, circleColor, curve }) => {
  return (
    <Wrapper className={className}>
        <IconWrapper>
            <Circle height="80" width="80" circleColor={circleColor}>
                {icon}
            </Circle>
            <Heading size="3" bottomMargin="0">{content.header}</Heading>
        </IconWrapper>
        <List>
            {curve && (
                <Curve top="-25" right="-29" color={color.blue1}>
                    <CurveSVG />
                </Curve>
            )}
            {content.buttons.map(button => (
                <BoxedButton className="article-link" content={button} ellipsis />
            ))}
        </List>
        <ArrowLink content={content.link} />
    </Wrapper>
  )
}

export default BrowseByCategoryList;
