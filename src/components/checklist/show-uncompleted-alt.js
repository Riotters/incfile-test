import React from "react";
import styled from "styled-components";
import { color } from "../styles/colors";
import ArrowSVG from "../../images/arrow.inline.svg";

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	text-decoration: none;
	transition: color 0.3s ease;
	font-weight: 600;
	border: 0;
	font-family: Engram, sans-serif;
	font-size: 20px;
	line-height: 24px;
	color: ${color.blue1};
	cursor: pointer;
	background-color: transparent;

	&:hover {
		color: ${color.orange1};

		svg {
			path {
				fill: ${color.orange1};
			}
		}
	}
`;

const Arrow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 12px;
	width: 12px;
	margin-right: 10px;

	svg {
		path {
			transition: fill 0.3s ease;
			fill: ${color.blue1};
		}
	}
`;

const ShowUncompleted = ({ children, className, stackItems, stacked }) => (
	<Wrapper className={className} onClick={stackItems}>
		<Arrow>
			<ArrowSVG />
		</Arrow>
		{stacked ? "Show More" : "Show Less"}
	</Wrapper>
);
export default ShowUncompleted;
