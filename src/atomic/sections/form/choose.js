import React from "react";
import styled from "styled-components";
import Oval from "../../atoms/icons/oval";
import OvalSVG from "../../../images/ovals/top-right-transparent-blue.inline.svg";
import TextCenterLayout from "../../partials/heading-center";
import { gradient } from "../../atoms/styles/colors";
import TopImageBox from "../../molecules/mixed-blocks/top-image-box";
import ContentCenter from "../../partials/content-center";

const Choose = styled.section`
	position: relative;
	padding-top: 100px;

	&::before {
		content: "";
		height: 1484px;
		width: 100%;
		background-image: ${gradient.blue3};
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px;
	padding: 56px 0 100px;

	& > div {
		h4,
		p {
			text-align: center;
		}

		&:first-child {
			border-radius: 50px 5px 5px 50px;

			.top {
				border-radius: 35px 5px 5px 5px;
			}
		}

		&:last-child {
			border-radius: 5px 50px 50px 5px;

			.top {
				border-radius: 5px 35px 5px 5px;
			}
		}
	}
`;

const ChooseSection = ({ className, content }) => (
	<Choose>
		<Oval
			className="oval"
			height="570"
			width="570"
			top="0"
			right="0"
			zIndex="0"
		>
			<OvalSVG />
		</Oval>
		<TextCenterLayout
			headline={content.header}
			headlineWidth="770"
			text={content.text}
			textWidth="770"
		/>
		<ContentCenter>
			<Grid>
				{content.boxes.map((box) => (
					<TopImageBox
						content={box}
						image={box.image}
						color={box.color}
						padding="16px 16px 56px"
					/>
				))}
			</Grid>
		</ContentCenter>
	</Choose>
);

export default ChooseSection;
