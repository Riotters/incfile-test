import React from "react";
import styled from "styled-components";
import { color } from "./styles/colors";
import { shadow } from "./styles/shadows";
import Image from "./image";

const Wrapper = styled.div`
	width: 100%;
	padding: 16px 16px 40px;
	position: relative;
	border-radius: 5px;
	background-color: ${color.white};
	box-shadow: ${(props) => (props.noShadow ? "" : shadow.white1)};
	max-width: 470px;
	justify-self: center;

	@media (min-width: 1024px) {
		width: 100%;
	}

	& > .top {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 128px;
		width: 100%;
		background-color: ${(props) => (props.color ? props.color : color.white)};
		border-radius: 5px;

		.gatsby-image-wrapper {
			height: 96px;
			width: 96px;
		}
	}

	h3,
	h4,
	[class*="i-believe-i-can-be-a-h"] {
		padding: 24px 24px 16px;
	}

	p:not([class*="i-believe-i-can-be-a-h"]),
	a {
		font-size: 16px;
		line-height: 24px;
	}

	p:not([class*="i-believe-i-can-be-a-h"]) {
		color: ${color.grey1};
		padding: 0 24px;
	}
`;

const TopImageBox = ({ className, image, imageAlt, color, children, noShadow }) => {

    return (
        <Wrapper className={className} color={color} noShadow={noShadow}>
            <div className="top"> {image && (<Image filename={image} alt={imageAlt} />)} </div>
            <div className="content"> {children} </div>
        </Wrapper>
    );
}

export default TopImageBox
