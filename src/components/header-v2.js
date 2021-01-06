import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoSVG from "../images/logo.inline.svg";
import PhoneSVG from "../images/icons/phone-orange.inline.svg";
import StarSVG from "../images/icons/star-yellow.inline.svg";
import Image from "../atomic/atoms/image/image";
import { color } from "../atomic/atoms/styles/colors";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	padding: 0 40px;
	background: #fff;
	position: fixed;
	top: 0;
	z-index: 9999;
	border-bottom: 1px solid rgba(244, 244, 244, 0.9);
`;

const Logo = styled.div`
	height: 24px;
	padding-right: 25px;

	@media (min-width: 1200px) {
		width: 200px;
	}
`;

const MobileWrapper = styled.nav`
	display: ${({ showNav }) => (showNav ? "flex" : "none")};
	position: absolute;
	flex-direction: column;
	background-color: #fff;
	top: 80px;
	left: 0;
	height: calc(100vh - 80px);
	min-height: -webkit-fill-available;
	width: 100%;
	padding: 40px;

	@media (min-width: 992px) {
		display: flex;
		align-items: center;
		position: static;
		flex-direction: row;
		height: 79px;
		width: auto;
		flex-grow: 1;
		padding: 0;
	}
`;

const Navigation = styled.nav`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media (min-width: 992px) {
		margin: 0 auto;
		height: 100%;
		flex-grow: 1;
	}
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	list-style: none;

	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: flex-start;
	}
`;

const MenuItem = styled.li`
	display: flex;
	align-items: center;
	margin-right: 34px;
	height: 50px;

	@media (min-width: 992px) {
		height: 100%;
	}
`;

const MenuLink = styled(Link)`
	display: flex;
	align-items: center;
	height: 100%;
	color: #1e1e1e;
	font-family: Engram;
	font-size: 13px;
	line-height: 16px;
	text-decoration: none;
	padding-right: 10px;
	white-space: nowrap;

	@media (min-width: 1200px) {
		font-size: 16px;
		line-height: 19px;
	}
`;

const Hamburger = styled.div`
	display: block;
	height: 20px;
	width: 24px;
	position: relative;

	@media (min-width: 992px) {
		display: none;
	}

	span {
		display: block;
		width: 100%;
		height: 3px;
		border-radius: 2px;
		background-color: #1d1d1d;
		position: absolute;
		left: 0;
		transform-origin: center;
		transition: transform 0.3s ease;

		&:nth-child(1) {
			top: ${({ hamburger }) => (hamburger ? "calc(50% - 2px)" : "0")};
			transform: ${({ hamburger }) =>
				hamburger ? "rotate(-135deg)" : "rotate(0)"};
		}

		&:nth-child(2) {
			top: 50%;
			transform: translateY(-50%);
			display: ${({ hamburger }) => (hamburger ? "none" : "block")};
		}

		&:nth-child(3) {
			bottom: ${({ hamburger }) => (hamburger ? "calc(50% - 1px)" : "0")};
			transform: ${({ hamburger }) =>
				hamburger ? "rotate(135deg)" : "rotate(0)"};
		}
	}
`;

const FiveStarRow = styled.div`
	display: flex;
	flex-direction: row;

	svg:not(:first-child) {
		margin-left: 2px;
	}
`;

const ItemColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.align ?? "center"};
	justify-content: ${(props) => props.justify ?? "center"};
`;

const ItemRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: ${(props) => props.align ?? "flex-start"};
	justify-content: ${(props) => props.justify ?? "space-between"};
	${(props) => (props.color ? "color: " + props.color : "")};

	& > svg {
		margin-right: 8px;
		margin-top: 2px;
	}
`;

const ImageWrapper = styled.div`
	width: ${(props) => props.width ?? "30"}px;
	height: ${(props) => props.height ?? "32"}px;
	margin-right: 20px;
`;

const HeaderAlt = ({ siteTitle }) => {
	const [menu, showMenu] = useState(false);

	return (
		<Wrapper>
			<Logo>
				<Link to="/">
					<LogoSVG />
				</Link>
			</Logo>
			<MobileWrapper showNav={menu}>
				<Navigation>
					<Menu>
						<MenuItem>
							<MenuLink to="#">
								<ItemRow color={color.orange1}>
									<PhoneSVG />
									<strong>855.829.9090</strong>
								</ItemRow>
							</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink to="#">
								<ItemRow align="center">
									<ImageWrapper>
										<Image filename="verified-cart-logo-3948" />
									</ImageWrapper>
									<ItemColumn>
										<FiveStarRow>
											<StarSVG />
											<StarSVG />
											<StarSVG />
											<StarSVG />
											<StarSVG />
										</FiveStarRow>
										<div>
											<strong>1400</strong>
											<span>&nbsp;ratings</span>
										</div>
									</ItemColumn>
								</ItemRow>
							</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink to="#">
								<ItemRow align="center">
									<ImageWrapper width={22} height={34}>
										<Image filename="bbb-logo-gray-6592" />
									</ImageWrapper>
									<ItemColumn align="flex-start">
										<div>
											<strong>A+</strong>
										</div>
										<div>Rating</div>
									</ItemColumn>
								</ItemRow>
							</MenuLink>
						</MenuItem>
					</Menu>
				</Navigation>
			</MobileWrapper>
			<Hamburger hamburger={menu} onClick={() => showMenu(!menu)}>
				<span></span>
				<span></span>
				<span></span>
			</Hamburger>
		</Wrapper>
	);
};

HeaderAlt.propTypes = {
	siteTitle: PropTypes.string,
};

HeaderAlt.defaultProps = {
	siteTitle: ``,
};

export default HeaderAlt;
