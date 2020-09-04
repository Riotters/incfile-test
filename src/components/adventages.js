import React from "react"
import styled from "styled-components"
import {color} from "./styles/colors"
import {shadow} from "./styles/shadows"
import {Link} from "gatsby"
import ArrowSVG from "../images/arrow.inline.svg";
import IconCircle from "./icons/circle";
import Image from "../atomic/atoms/image/image";
import CloseIcon from "../images/icons/close.inline.svg"

const Wrapper = styled.div`
    padding-top: 24px;
    width 100%;
    
    @media (min-width: 470px) {
        max-width: ${props => (props.width ? props.width : "470px")};
        margin: 0 auto 30px;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding: 48px 40px 40px;
    position: relative;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 20px;

    @media (min-width: ${props => props.width}){
        width: ${props => props.width};
        max-width: ${props => props.width};
    }
    
    h4 {
        width: 100%;
        line-height: 27px;
    }

    p {
        margin-top: 16px;
        width: 100%;
        font-size: 16px;
        line-height: 24px;
    }
`

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
        font-family: Avenir-Heavy, sans-serif;
        color: white;
        font-size: 16px;
        line-height: 24px;
    }
    
    svg.modify {
        height: 20px;
        width: 20px;
        fill: none;
        stroke: ${props => props.colorStroke};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18;
        stroke-dashoffset: 0;
        transform: translate3d(0, 0, 0);
        z-index: 1;
    }
    
    svg.close {
        height: 30px;
        width: 30px;
        fill: none;
        stroke: ${props => props.colorStroke};
        z-index: 1;
    }
`;

const AdeventageLink = styled(Link)`
      font-family: Avenir-Heavy, sans-serif;
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      > span {
        margin-left: -32px;
      }
`;

const Adventages = ({className, headline, text, colorStroke, circleBackgroundColor, circleBackgroundShadow, circlePosition, circleText, url, urlText, style, width, imageName, disadventage}) => {
    return (
        <Wrapper className={className} headline={headline} text={text} style={style} width={width}>
            <Box width={width}>
                <Circle position={circlePosition} circleBackgroundColor={circleBackgroundColor}
                        circleBackgroundShadow={circleBackgroundShadow} colorStroke={colorStroke}>
                    {!circleText && !disadventage &&
                    <svg className="modify" viewBox="-1 0 16 12">
                        <polyline points="2 6 4.5 9 10.5 3"></polyline>
                    </svg>
                    }

                    {!circleText && disadventage &&
                    <svg className="close" viewBox="0 0 32 32">
                        <path fill="#FFF" d="M11.78 10.263L16 14.484l4.22-4.221c.391-.39 1.024-.39 1.415 0l.102.102c.39.39.39 1.024 0 1.414L17.516 16l4.221 4.22c.39.391.39 1.024 0 1.415l-.102.102c-.39.39-1.024.39-1.414 0L16 17.516l-4.22 4.221c-.391.39-1.024.39-1.415 0l-.102-.102c-.39-.39-.39-1.024 0-1.414L14.484 16l-4.221-4.22c-.39-.391-.39-1.024 0-1.415l.102-.102c.39-.39 1.024-.39 1.414 0z"/>
                    </svg>
                    }

                    {circleText &&
                    <span>{circleText}</span>
                    }

                </Circle>

                {imageName &&
                <ImageWrapper>
                    <Image filename={imageName}/>
                </ImageWrapper>
                }
                {headline &&
                <h4>{headline}</h4>
                }

                {text &&
                <p>{text}</p>
                }

                {url &&
                <AdeventageLink to={url}>
                    <IconCircle circleColor="transparent" iconColor={color.blue1}>
                        <ArrowSVG/>
                    </IconCircle>
                    {urlText}
                </AdeventageLink>
                }
            </Box>
        </Wrapper>
    )
}

const ImageWrapper = styled.div`
    width: 128px;
    margin: 0 auto 30px;
`;

Adventages.defaultProps = {
    colorStroke: color.white,
    circleBackgroundColor: color.green1,
    circleBackgroundShadow: shadow.green1,
    width: "470px",
    disadventage: false
}

export default Adventages
