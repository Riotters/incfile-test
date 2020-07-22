import React from "react"
import styled from "styled-components"
import { color } from "./styles/colors"
import { shadow } from "./styles/shadows"

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
    background-color: ${color.green1};
    box-shadow: ${shadow.green1};
    position: absolute;
    top: -24px;
    left: 40px;
    
    svg {
        height: 20px;
        width: 20px;
        fill: none;
        stroke: ${color.white};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18;
        stroke-dashoffset: 0;
        transform: translate3d(0, 0, 0);
        z-index: 1;
    }
`;

const Adventages = ({ className, headline, text }) => {
  return (
    <Wrapper className={className} headline={headline} text={text}>
        <Box>
            <Circle>
                <svg viewBox="-1 0 16 12">
                    <polyline points="2 6 4.5 9 10.5 3"></polyline>
                </svg>
            </Circle>
            <h4>{headline}</h4>
            <p>{text}</p>
        </Box>
    </Wrapper>
  )
}

export default Adventages
