import React from "react";
import styled from "styled-components";
import ArrowLink from "../molecules/buttons/button";
import VisibilitySensor from "../VisibilitySensor";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h2,
	p,
	a {
		text-align: left;
	}

	h2 {
		max-width: ${(props) =>
			props.headlineWidth ? props.headlineWidth : "610"}px;
		margin-bottom: 24px;
	}

	p {
		max-width: ${(props) => (props.textWidth ? props.textWidth : "750")}px;
		margin-bottom: 24px;
	}

	a {
		margin-bottom: 24px;
	}
`;

const TextCenterLayout = ({
	headline,
	headlineWidth,
	text,
	textWidth,
	linkText,
	linkUrl,
}) => {
	return (
		<Wrapper headlineWidth={headlineWidth} textWidth={textWidth}>
			{headline && (
				// <VisibilitySensor partialVisibility once>
				//     {({ isVisible }) => (
				<h2
				//className={isVisible ? "slideUp enter" : "slideUp"}
				>
					{headline}
				</h2>
				//     )}
				// </VisibilitySensor>
			)}
			{text && (
				// <VisibilitySensor partialVisibility once>
				//     {({ isVisible }) => (
				<p
				//className={isVisible ? "slideUp enter" : "slideUp"}
				>
					{text}
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
