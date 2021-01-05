import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading } from "../../atoms/typography/heading";
import Icon from "../../../images/icons/question-orange.inline.svg";
import { shadow } from "../../atoms/styles/shadows";
import { color } from "../../atoms/styles/colors";

const TitleWithInfoBox = ({
	title,
	hasInfoBox,
	infoBoxText,
	questionMarkColor,
	paragraphHeading = false,
	...rest
}) => (
	<Header {...rest}>
		{/*<ChooseHeadingType headerSize={2} content={title} paragraphHeader={paragraphHeading} />*/}
		<Heading size={2}>{title}</Heading>
		{hasInfoBox && (
			<InfoBox>
				<InfoIcon>
					<Icon />
				</InfoIcon>
				<InfoBoxContent className="info-content">{infoBoxText}</InfoBoxContent>
			</InfoBox>
		)}
	</Header>
);

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	margin-bottom: 48px;
	position: relative;
	z-index: 999;

	h2,
	[class*="i-believe-i-can-be-a-h"] {
		font-size: 24px;
		line-height: 29px;
		text-align: left;
		margin-bottom: 0;
	}
`;

const InfoBox = styled.div`
	margin-left: 12px;

	&:hover {
		cursor: pointer;

		.info-content {
			visibility: visible;
			top: 40px;
			opacity: 1;
		}
	}
`;

const InfoIcon = styled.div`
	width: 16px;
	height: 20px;

	svg {
		g {
			fill: ${(props) => props.questionMarkColor ?? color.orange1};
		}
	}
`;

const InfoBoxContent = styled.div`
	position: absolute;
	visibility: hidden;
	opacity: 0;
	top: 25px;
	box-shadow: ${shadow.white2};
	background-color: white;
	border-radius: 5px;
	padding: 32px;
	font-family: Engram-Medium;
	font-size: 16px;
	line-height: 24px;
	color: #7a7a7a;
	width: 549px;
	left: calc(50% - 274px);
	transition: all 0.4s ease-in-out;

	@media (max-width: 575px) {
		left: 0;
		max-width: 100%;
	}

	&:before {
		content: "";
		width: 15px;
		height: 15px;
		background-color: white;
		transform: rotate(45deg);
		position: absolute;
		top: -8px;
		left: calc(50% - 8px);
	}
`;

TitleWithInfoBox.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TitleWithInfoBox;
