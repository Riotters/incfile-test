import React from "react"
import styled from "styled-components"
import {color} from "./styles/colors"
import {shadow} from "./styles/shadows"
import {Link} from "gatsby"
import ArrowSVG from "../images/arrow.inline.svg";
import IconCircle from "./icons/circle";

const Wrapper = styled.div`
    padding-top: 24px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 470px;
    padding: 48px 40px 40px;
    position: relative;
    background-color: ${color.white};
    box-shadow: ${shadow.white1};
    border-radius: 20px;

    h4 {
        width: 100%;
        line-height: 27px;
        margin-bottom: 16px;
    }

    p {
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
    
    svg {
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

const Adventages = ({className, headline, text, colorStroke, circleBackgroundColor, circleBackgroundShadow, circlePosition, circleText, url, urlText, style}) => {
    return (
        <Wrapper className={className} headline={headline} text={text} style={style}>
            <Box>
                <Circle position={circlePosition} circleBackgroundColor={circleBackgroundColor}
                        circleBackgroundShadow={circleBackgroundShadow} colorStroke={colorStroke}>
                    {!circleText &&
                    <svg viewBox="-1 0 16 12">
                        <polyline points="2 6 4.5 9 10.5 3"></polyline>
                    </svg>
                    }

                    {circleText &&
                    <span>{circleText}</span>
                    }

                </Circle>
                <h4>{headline}</h4>
                <p>{text}</p>

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

Adventages.defaultProps = {
    colorStroke: color.white,
    circleBackgroundColor: color.green1,
    circleBackgroundShadow: shadow.green1
}

export default Adventages
