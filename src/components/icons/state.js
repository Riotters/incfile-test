import React from "react"
import styled from "styled-components"
import { color } from "../styles/colors"
import { shadow } from "../styles/shadows"

const Wrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    background: ${color.white};
    border-radius: 50%;
    overflow: hidden;
    box-shadow: ${shadow.white2};

    span {
        opacity: .9;
        color: ${color.black};
        font-family: Avenir, sans-serif;
        font-weight: 900;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 1px;
        text-transform: uppercase;
        pointer-events: none;
    }
`;

const State = ({
    className
  }) => (
    <Wrapper
      className={className}
    >
        <span>LLC</span>
    </Wrapper>
  )
  export default State