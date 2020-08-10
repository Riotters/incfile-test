import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    max-height: ${props => props.height ? `${props.height}px` : `25px`};
    max-width: ${props => props.width ? `${props.width}px` : `29px`};
    opacity: ${props => props.opacity ? `${props.opacity}` : `1`};
    position: absolute;
    top: ${props => props.top ? `${props.top}px` : ``};
    left: ${props => props.left ? `${props.left}px` : ``};
    right: ${props => props.right ? `${props.right}px` : ``};
    bottom: ${props => props.bottom ? `${props.bottom}px` : ``};
    transform: translate(${props => props.x ? `${props.x}px` : `0`}, ${props => props.y ? `${props.y}%` : `0`});

    svg {
        path {
            fill: ${props => props.color ? props.color : ``};
        }
    }
`;

const Curve = ({ children, className, width, height, top, left, right, bottom, y, x, opacity, color }) => (
    <Wrapper className={className} height={height} width={width} top={top} left={left} right={right} bottom={bottom} y={y} x={x} opacity={opacity} color={color}>
        {children}
    </Wrapper>
  )
  export default Curve
