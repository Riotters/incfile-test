import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	max-height: ${(props) => (props.height ? `${props.height}px` : `100%`)};
	max-width: ${(props) => (props.width ? `${props.width}px` : `100%`)};
	opacity: ${(props) => (props.opacity ? `${props.opacity}` : `1`)};
	position: absolute;
	top: ${(props) => (props.top ? `${props.top}%` : ``)};
	left: ${(props) => (props.left ? `${props.left}%` : ``)};
	right: ${(props) => (props.right ? `${props.right}%` : ``)};
	bottom: ${(props) => (props.bottom ? `${props.bottom}%` : ``)};
	transform: translate(
		${(props) => (props.x ? `${props.x}%` : `0`)},
		${(props) => (props.y ? `${props.y}%` : `0`)}
	);
	z-index: ${(props) => (props.zIndex ? props.zIndex : -1)};
`;

const Oval = ({
	children,
	className,
	width,
	height,
	top,
	left,
	right,
	bottom,
	y,
	x,
	opacity,
	zIndex,
}) => (
	<Wrapper
		className={className}
		height={height}
		width={width}
		top={top}
		left={left}
		right={right}
		bottom={bottom}
		y={y}
		x={x}
		opacity={opacity}
		zIndex={zIndex}
	>
		{children}
	</Wrapper>
);
export default Oval;
