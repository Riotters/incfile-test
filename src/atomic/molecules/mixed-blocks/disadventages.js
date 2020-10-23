import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import IconCircle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import Image from "../../atoms/image/image";
import Whitebox from "../../atoms/boxes/white-box";
import CloseSVG from "../../../images/icons/x.inline.svg"

const Wrapper = styled.div`
    width: 100%;
    padding-top: 24px;
    
    .box {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-width: 570px;
        padding: 48px 40px 40px;
        border-radius: 20px;
        position: relative;
    }
`;

const Circle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background-color: ${props => props.circleBackgroundColor};
    box-shadow: ${props => props.circleBackgroundShadow};
    position: absolute;
    top: -24px;
    left: 40px;
    
    ${props => props.position && props.position === 'center' &&
    "left: calc(50% - 24px);"
}
    
    span{
        font-family: Avenir, sans-serif;
        font-weight: 900;
        color: white;
        font-size: 16px;
        line-height: 24px;
    }
    
    svg {
        height: 32px;
        width: 32px;
        z-index: 1;
    }
`;

const AdeventageLink = styled(Link)`
      font-family: Avenir, sans-serif;
      font-weight: 900;
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      > span {
        margin-left: -32px;
      }
`;

const Disdventages = ({className, content, colorStroke, circleBackgroundColor, circleBackgroundShadow, circlePosition, circleText, url, urlText, style, width, imageName}) => {
    return (
        <Wrapper className={className} style={style}>
            <Whitebox className="box">
                <Circle position={circlePosition} circleBackgroundColor={circleBackgroundColor}
                        circleBackgroundShadow={circleBackgroundShadow} colorStroke={colorStroke}>
                    {!circleText &&
                    <CloseSVG />
                    }

                    {circleText &&
                    <span>{circleText}</span>
                    }

                </Circle>

                {imageName &&
                    <ImageWrapper>
                        <Image filename={imageName} />
                    </ImageWrapper>
                }
                {content.header && (
                    <Heading size="4" bottomMargin="16">{content.header}</Heading>
                )}
                {content.text && (
                    <Paragraph bottomMargin="0">{content.text}</Paragraph>
                )}
                {url &&
                <AdeventageLink to={url}>
                    <IconCircle circleColor="transparent" iconColor={color.blue1}>
                        <ArrowSVG/>
                    </IconCircle>
                    {urlText}
                </AdeventageLink>
                }
            </Whitebox>
        </Wrapper>
    )
}

const ImageWrapper = styled.div`
    width: 150px;
    margin: 0 auto 30px;
`;

Disdventages.defaultProps = {
    colorStroke: color.white,
    circleBackgroundColor: color.red1,
    circleBackgroundShadow: shadow.red1,
    width: "470px"
}

export default Disdventages
