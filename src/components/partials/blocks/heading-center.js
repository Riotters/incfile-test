import React from "react";
import styled from "styled-components";
import ArrowLink from "../../arrow-link";
import parse from "html-react-parser";
import { Heading } from "../../../atomic/atoms/typography/heading";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		max-width: ${(props) =>
			props.headlineWidth ? props.headlineWidth : "610"}px;
		margin-bottom: 24px;
	}

	p {
		max-width: ${(props) => (props.textWidth ? props.textWidth : "750")}px;
		text-align: center;
		margin-bottom: 24px;
	}

	a {
		margin-bottom: 24px;
	}
`;

const TextCenterLayout = ({
	className,
	headline,
	headlineSize = 2,
	headlineSizeTemplate = 2,
	headlineWidth,
	text,
	textWidth,
	linkText,
	linkUrl,
	...rest
}) => {
	return (
		<Wrapper
			className={className}
			headlineWidth={headlineWidth}
			textWidth={textWidth}
			{...rest}
		>
			{headline && (
				// <VisibilitySensor partialVisibility once>
				//     {({ isVisible }) => (
				<Heading
					size={headlineSize}
					template={headlineSizeTemplate}
					//className={isVisible ? "slideUp enter" : "slideUp"}
				>
					{headline}
				</Heading>
				//     )}
				// </VisibilitySensor>
			)}
			{text && (
				// <VisibilitySensor partialVisibility once>
				//     {({ isVisible }) => (
				<p
				//className={isVisible ? "slideUp enter" : "slideUp"}
				>
					{parse(text)}
				</p>
				//     )}
				// </VisibilitySensor>
			)}
			{linkText && (
				// <VisibilitySensor partialVisibility once>
				//     {({ isVisible }) => (
				<ArrowLink
					href={linkUrl}
					//className={isVisible ? "slideUp enter" : "slideUp"}
				>
					{linkText}
				</ArrowLink>
				//     )}
				// </VisibilitySensor>
			)}
		</Wrapper>
	);
};

export default TextCenterLayout;
