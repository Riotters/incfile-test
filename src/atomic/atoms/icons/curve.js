import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  width: 100%;
  max-height: ${(props) => (props.height ? `${props.height}px` : `25px`)};
  max-width: ${(props) => (props.width ? `${props.width}px` : `29px`)};
  opacity: ${(props) => (props.opacity ? `${props.opacity}` : `1`)};
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}px` : ``)};
  left: ${(props) => (props.left ? `${props.left}px` : ``)};
  right: ${(props) => (props.right ? `${props.right}px` : ``)};
  bottom: ${(props) => (props.bottom ? `${props.bottom}px` : ``)};
  transform: translate(${(props) => (props.x ? `${props.x}px` : `0`)}, ${(props) => (props.y ? `${props.y}%` : `0`)});

  @media (min-width: 992px) {
    display: block;
  }

  @media (min-width: 1200px) {
    top: ${(props) => (props.topXL ? `${props.topXL}px` : ``)};
    left: ${(props) => (props.leftXL ? `${props.leftXL}px` : ``)};
    right: ${(props) => (props.rightXL ? `${props.rightXL}px` : ``)};
    bottom: ${(props) => (props.bottomXL ? `${props.bottomXL}px` : ``)};
  }

  svg {
    path {
      fill: ${(props) => (props.color ? props.color : ``)};
    }
  }
`;

const Curve = ({ children, className, width, height, top, topXL, left, leftXL, right, rightXL, bottom, bottomXL, y, x, opacity, color }) => (
  <Wrapper className={className} height={height} width={width} top={top} topXL={topXL} left={left} leftXL={leftXL} right={right} rightXL={rightXL} bottom={bottom} bottomXL={bottomXL} y={y} x={x} opacity={opacity} color={color}>
    {children}
  </Wrapper>
);
export default Curve;
