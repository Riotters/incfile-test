import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"

const Wrapper = styled.div`
    display: flex;
    padding-left: 40px;
    position: relative;

    p {
        font-size: 16px; 
        line-height: 24px;
        max-width: 180px; 
        color: ${props => (props.theme === "dark" ? color.white : color.grey1)};
    }

    svg {
        position: absolute;
        top: 2px;
        left: 0;
        stroke-dashoffset: 0;
        height: 20px;
        width: 20px;
        fill: none;
        stroke: ${props => (props.theme === "dark" ? color.white : color.green1)};
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
        z-index: 99;
    }
`

const CkeckText = ({ className, theme, children }) => (
  <Wrapper className={className} theme={theme}>
        <svg viewBox="-1 0 16 12">
            <polyline points="2 6 4.5 9 10.5 3"></polyline>
        </svg>
        {children}
  </Wrapper>
)

export default CkeckText