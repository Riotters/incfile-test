import React from "react";
import styled from "styled-components";
import Whitebox from "../../atoms/boxes/white-box-li";
import Circle from "../../atoms/icons/circle";
import Image from "../../atoms/image/image"
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import { color } from "../../atoms/styles/colors"
import ArrowLink from "../../molecules/buttons/text";
import ArrowSVG from "../../../images/arrow.inline.svg"

const Wrapper = styled(Whitebox)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${props => props.icon ? "20px" : ""};
    padding: ${props => props.icon ? "16px 24px 16px 16px" : "24px 24px 24px 40px"};
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;

    h4, h5 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        color: ${props => props.icon ? color.blue1 : ""};
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    width: 88px;
    min-height: 88px;
    min-width: 88px;
    border-radius: 15px;
    background-color: ${props => props.iconColor ? props.iconColor : ""};
    padding: 16px;
    margin-right: 32px;

    .gatsby-image-wrapper {
        width: 100%;
    }
`;

const BoxedButton = ({ className, content, icon, iconColor }) => {
  return (
    <Wrapper className={className} icon={icon}>
        <TextWrapper icon={icon}>
            {icon && (
                <ImageWrapper iconColor={iconColor}>
                    <Image filename={icon} />
                </ImageWrapper>
            )}
            {content.header && (
                <Heading size={icon ? "4" : "5"} bottomMargin="0">{content.header}</Heading>
            )}
        </TextWrapper>
        <Circle circleColor={color.orange3} iconColor={color.orange1}>
            <ArrowSVG/>
        </Circle>
    </Wrapper>
  )
}

export default BoxedButton;
