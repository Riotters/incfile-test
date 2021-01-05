import React from "react";
import { Link } from "gatsby";
import OverviewSVG from "../../../images/icons/coaching-business.inline.svg";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArrowSVG from "../../../images/arrow.inline.svg";
import Circle from "../../atoms/icons/circle";
import { color } from "../../atoms/styles/colors";
import { shadow } from "../../atoms/styles/shadows";

const TabTitle = ({ content, arrow, icon }) => (
	<>
		{content.url ? (
			<ButtonBox to={content.url}>
				<Icon>{icon}</Icon>
				<Content>
					<span>{content.header}</span>

					{/* {arrow && (
            <Arrow className="tabArrow">
              <ArrowSVG />
            </Arrow>
          )} */}
				</Content>
				<Circle
					circleColor={color.orange3}
					iconColor={color.orange1}
					className="arrow-link"
				>
					<ArrowSVG />
				</Circle>
			</ButtonBox>
		) : (
			<ButtonBoxStatic>
				<Icon>{icon}</Icon>
				<Content>
					<span>{content.header}</span>

					{/* {arrow && (
            <Arrow className="tabArrow">
              <ArrowSVG />
            </Arrow>
          )} */}
				</Content>
				<Circle
					circleColor={color.orange3}
					iconColor={color.orange1}
					className="arrow-link"
					style={{ marginRight: `16px` }}
				>
					<ArrowSVG />
				</Circle>
			</ButtonBoxStatic>
		)}
	</>
);

export default TabTitle;

TabTitle.propTypes = {
	title: PropTypes.string.isRequired,
	arrow: PropTypes.bool,
	SvgIcon: PropTypes.object.isRequired,
};

TabTitle.defaultProps = {
	arrow: true,
	SvgIcon: OverviewSVG,
};

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 50px;
	min-width: 50px;
	opacity: 0.75;

	@media (min-width: 992px) {
		width: 80px;
		min-width: 80px;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-grow: 1;
	padding: 0 24px;
	border-left: 1px solid #f4f4f4;

	span {
		color: #4e4e4e;
		font-family: Engram;
		font-size: 13px;
		line-height: 21px;

		@media (min-width: 769px) {
			font-size: 16px;
			line-height: 24px;
		}
	}

	// .tabArrow {
	//   opacity: 0;
	//   transform: translateX(-3px);
	//   transition: opacity 0.3s ease, transform 0.3s ease;
	//
	//   svg {
	//     path {
	//       fill: #1d1d1d;
	//     }
	//   }
	// }

	&:hover {
		// .tabArrow {
		//   opacity: 1;
		//   transform: translateX(0);
		// }
	}
`;

const ButtonBoxStatic = styled.div`
	height: 78px;
	line-height: 78px;
	color: #4e4e4e;
	background: #fff;
	transition: box-shadow 0.3s ease;
	box-shadow: 0 20px 30px 0 #e6e6e6;
	display: flex;
	align-items: center;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 7px;
	border: none;
	z-index: 0;
`;

const ButtonBox = styled(Link)`
	height: 78px;
	position: relative;
	line-height: 78px;
	color: #4e4e4e;
	background: #fff;
	transition: all 0.3s ease;
	box-shadow: ${shadow.white1};
	display: flex;
	// cursor: pointer;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 7px;
	padding: 0 32px 0 0;
	border: none;
	z-index: 0;

	.arrow-link {
		position: absolute;
		top: 24px;
		right: 16px;
		transition: all 0.5s;
		pointer-events: none;
		transform: translateX(-24px);
		opacity: 0;
	}

	svg {
		opacity: 0.75;
		transition: opacity 0.3s ease;
	}

	&.active,
	&:hover {
		font-family: Engram;
		font-weight: 900;
		box-shadow: ${shadow.white2};

		.arrow-link {
			opacity: 1;
			transform: translateX(0);
		}

		svg {
			opacity: 1;
		}

		// .tabArrow {
		//   opacity: 1;
		//   transform: translateX(0);
		// }
	}
`;
