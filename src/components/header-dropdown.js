import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LogoSVG from "../images/logo.inline.svg";
import Button from "./button";
import DropdownSVG from "../images/dropdown.inline.svg";
import { color } from "../atomic/atoms/styles/colors";
import { shadow } from "../atomic/atoms/styles/shadows";
import { Heading } from "../atomic/atoms/typography/heading";
import ArrowLink from "../atomic/molecules/buttons/text";

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
	align-items: center;

	@media (min-width: 992px) {
		margin: 0 auto;
		max-width: 1170px;
		height: 100%;
		flex-grow: 1;
	}

	@media (max-width: 991px) {
		overflow: hidden;
		align-items: flex-start;
		position: relative;
	}
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	list-style: none;
	width: 100%;

	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: flex-start;
		width: initial;
	}

	@media (max-width: 991px) {
		height: auto;
	}
`;

const MenuItem = styled.li`
	margin-right: 34px;
	height: 50px;

	@media (min-width: 992px) {
		height: 80px;
	}

	@media (min-width: 992px) {
		&:hover > div {
			max-height: 4000px;

			&:last-child {
				display: grid;
				padding: 24px 32px;
			}
		}
	}

	@media (max-width: 991px) {
		margin-right: 0;

		&.active {
			height: auto;
		}

		&.active > div {
			max-height: 4000px;

			&:last-child {
				display: grid;
				padding: 24px 32px;
			}
		}

		svg {
			transition: transform 0.6s;
			transform: rotate(0deg);
		}
	}

	&.active svg {
		transform: rotate(-180deg);
	}
`;

const MenuLink = styled(Link)`
	display: flex;
	align-items: center;
	height: 100%;
	color: #1e1e1e;
	font-family: Avenir;
	font-size: 13px;
	line-height: 16px;
	text-decoration: none;
	padding-right: 10px;

	@media (min-width: 1200px) {
		font-size: 16px;
		line-height: 19px;
	}

	&:hover {
		border-bottom: 1px solid #fd8550;
	}
`;

const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 200px;
	margin-top: 25px;

	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin-top: 0;
	}

	@media (min-width: 556px) and (max-width: 992px) {
		flex-direction: row;

		a:first-child {
			margin-right: 30px;
		}

		a:last-child {
			margin-top: 24px;
		}
	}

	@media (max-width: 991px) {
		width: 100%;
	}

	a {
		&:nth-child(2) {
			padding: 4px 24px;

			@media (min-width: 1200px) {
				padding: 6px 38px;
			}
		}
	}
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
	padding-right: 17px;

	@media screen and (max-width: 991px) {
		justify-content: space-between;
	}
`;

const DropdownMenu = styled.div`
	transition: max-height 0.8s;
	top: calc(100% + 1px);
	display: none;
	grid-template-columns: auto auto;
	max-height: 0;
	padding: 0;
	z-index: -1;
	box-shadow: ${shadow.white2};
	background: ${color.white};
	position: absolute;

	@media screen and (max-width: 991px) {
		position: relative;
		grid-template-columns: 100%;
		overflow: hidden;
	}

	@media (min-width: 556px) and (max-width: 991px) {
		grid-template-columns: auto auto;
	}

	@media screen and (max-width: 991px) {
		position: static;
		top: unset;
		background: unset;
		box-shadow: unset;
	}

	& > ul {
		list-style: none;
	}

	& > ul > li {
		height: 35px;
		min-width: 100px;
		cursor: pointer;

		a:hover {
			border-bottom: none;
			color: ${color.orange1};
			height: 35px;
		}
	}

	& > ul > li a {
		min-width: 150px;
	}
`;

const Login = styled.a`
	display: flex;
	align-items: center;
	color: #1e1e1e;
	font-family: Avenir;
	font-size: 13px;
	line-height: 16px;
	text-align: center;
	text-decoration: none;
	margin-right: 16px;
	transition: color 0.3s ease;
	height: 50px;
	margin-bottom: 25px;

	@media (min-width: 992px) {
		height: auto;
		margin-bottom: 0;
	}

	@media (min-width: 1200px) {
		font-size: 16px;
		line-height: 19px;
	}

	@media (max-width: 991px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		width: 100%;
		background-color: ${color.orange1};
		border: 2px solid #fd8550;
		border-radius: 50px;
		color: ${color.white};
		font-family: MarkPro;
		font-size: 16px;
		line-height: 32px;
		text-align: center;
		text-decoration: none;
		position: relative;
		padding: 6px 38px;
		margin: 24px 0 12px;
		transition: background-color 0.3s ease, color 0.3s ease;

		&:hover {
			background-color: ${color.white};
			color: ${color.orange1};
		}
	}

	&:hover {
		color: #fd8550;
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

const SubmenuColumn = styled.ul`
	h5:not(:first-of-type) {
		margin-top: 20px;
	}
`;

function handleHeaderClick(e) {
	let menuItem = e.target.closest(".menu-item-l1");

	if (menuItem.className.indexOf("active") > -1) {
		menuItem.className = menuItem.className.replace(" active", "");
	} else {
		menuItem.className += " active";
	}
}

const NavigationMobileScrollHidden = styled.div`
	@media (max-width: 991px) {
		position: relative;
		right: -17px;
		max-height: 100%;
		overflow: hidden auto;
		width: 100%;
	}
`;

const BottomLink = styled.div`
	height: 30px;
	width: 100%;
	margin-top: 30px;

	@media (max-width: 991px) {
		a {
			font-size: 16px;
		}
	}

	@media (min-width: 992px) {
		border-top: 1px solid ${color.grey4};
		padding: 20px 30px;
		width: calc(100% + 64px);
		margin: 30px 0 0 -32px;
		grid-column: 1 / span 2;
	}
`;

const Header = ({ siteTitle }) => {
	const [menu, showMenu, active] = useState(false);

	return (
		<Wrapper>
			<Logo>
				<Link to="/">
					<LogoSVG />
				</Link>
			</Logo>
			<MobileWrapper showNav={menu}>
				<Navigation>
					<NavigationMobileScrollHidden>
						<Menu>
							<MenuItem className="menu-item-l1">
								<FlexRow>
									<MenuLink to="/start-your-company/">
										Review Entity Type
									</MenuLink>
									<div onClick={handleHeaderClick}>
										<DropdownSVG />
									</div>
								</FlexRow>
								<DropdownMenu>
									<SubmenuColumn>
										<MenuItem>
											<MenuLink to="/start-your-company/">
												Review Entity Types
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/limited-liability-company/">LLC</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/what-is-s-corporation/">
												S Corporation
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/what-is-c-corporation/">
												C Corporation
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/what-is-non-profit-corporation/">
												Nonprofit
											</MenuLink>
										</MenuItem>
									</SubmenuColumn>
								</DropdownMenu>
							</MenuItem>
							<MenuItem className="menu-item-l1">
								<FlexRow>
									<MenuLink to="/manage-your-company/">
										Manage Your Company
									</MenuLink>
									<div onClick={handleHeaderClick}>
										<DropdownSVG />
									</div>
								</FlexRow>
								<DropdownMenu>
									<SubmenuColumn>
										<Heading size={5} bottomMargin={10}>
											State Filings
										</Heading>
										<MenuItem>
											<MenuLink to="/free-llc/">Free LLC Filing</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/manage-your-company/amendment/">
												Amendment - Name Change
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/manage-your-company/dissolution/">
												Dissolution
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/manage-your-company/foreign-qualification/">
												Foreign Qualification
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/fictitious-business-or-trade-name/">
												DBA/Fictitious Business Name
											</MenuLink>
										</MenuItem>

										<Heading size={5} bottomMargin={10}>
											Compliance
										</Heading>
										<MenuItem>
											<MenuLink to="/manage-your-company/annual-report/">
												Annual Report
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/manage-your-company/certificate-of-good-standing/">
												Certificate of Good Standing
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/manage-your-company/corporatellc-kit/">
												Corporate/LLC Kit
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-license-research-package/">
												Business License Search
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/trademark-name-search/">
												Trademark Name Search
											</MenuLink>
										</MenuItem>
									</SubmenuColumn>
									<SubmenuColumn>
										<Heading size={5} bottomMargin={10}>
											IRS Filings
										</Heading>
										<MenuItem>
											<MenuLink to="/manage-your-company/tax-id-ein/">
												EIN / TAX Number
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-accounting/">
												Business Accounting
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/llc-s-corp-election/">
												File S Corp Election
											</MenuLink>
										</MenuItem>

										<Heading size={5} bottomMargin={10}>
											Registered Agent
										</Heading>
										<MenuItem>
											<MenuLink to="/manage-your-company/registered-agent/">
												Registered Agent Service
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/manage-your-company/change-of-registered-agent/">
												Change of Registered Agent
											</MenuLink>
										</MenuItem>
									</SubmenuColumn>
									<BottomLink>
										<ArrowLink
											content={{
												url: `${process.env.SITE_URL}/dashboard`,
												text: "View Your Dashboard",
											}}
										/>
									</BottomLink>
								</DropdownMenu>
							</MenuItem>
							<MenuItem className="menu-item-l1">
								<FlexRow>
									<MenuLink to="/business-entity-comparison/">
										Learning Center
									</MenuLink>
									<div onClick={handleHeaderClick}>
										<DropdownSVG />
									</div>
								</FlexRow>
								<DropdownMenu>
									<SubmenuColumn>
										<Heading size={5} bottomMargin={10}>
											Start a business soon
										</Heading>
										<MenuItem>
											<MenuLink to="/learn-more/">Research Tool</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-resources/">
												Free Business Downloads & Tools
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/start-a-business/">
												Business Startup Guides
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/guides-start-business/">
												Complete Guide to Starting A Business
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/starting-a-business-checklist/">
												Start A Business CheckList
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-name-generator/">
												Business Name Generator
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-name-search/">
												Free Business Name Research
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/s-corporation-tax-calculator/">
												S Corp Tax Calculator
											</MenuLink>
										</MenuItem>

										<Heading size={5} bottomMargin={10}>
											Grow a business
										</Heading>
										<MenuItem>
											<MenuLink to="/after-forming-llc/">
												After Forming LLC
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-filing-deadlines/">
												Annual Report Due Date Tool
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/sales-tax-calculator/">
												Sale Tax Calculator
											</MenuLink>
										</MenuItem>
									</SubmenuColumn>
									<SubmenuColumn>
										<Heading size={5} bottomMargin={10}>
											Form a business today
										</Heading>
										<MenuItem>
											<MenuLink to="/business-entity-quiz/">
												Business Type Quiz
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-entity-comparison/">
												Entity Comparison Chart
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/state-filing-times/">
												State Filing Times
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/state-filing-fees/">
												State Filing Prices
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/compliance-filing-requirement/">
												Ongoing Filing Requirements
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/registered-agents/">
												About Registered Agents
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/business-license-tool/">
												Business License Requirements
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/llc-state-information/">
												LLC State Inforamtion
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/corporation-state-information/">
												Corporation State Information
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/help-center/">Help Center</MenuLink>
										</MenuItem>
									</SubmenuColumn>
									<BottomLink>
										<ArrowLink
											content={{
												url: `${process.env.SITE_URL}/blog/`,
												text: "Read The Incfile Blog",
											}}
										/>
									</BottomLink>
								</DropdownMenu>
							</MenuItem>
							<MenuItem className="menu-item-l1">
								<FlexRow>
									<MenuLink to="/about/">About</MenuLink>
									<div onClick={handleHeaderClick}>
										<DropdownSVG />
									</div>
								</FlexRow>
								<DropdownMenu>
									<SubmenuColumn>
										<Heading size={5} bottomMargin={10}>
											Get us to know
										</Heading>
										<MenuItem>
											<MenuLink to="/about/">About Us</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/how-it-works/">How It Works</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/incfile-reviews/">
												Customer Service Reviews
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/reviews/">Testimonials</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/why-choose-incfile/">
												Why Choose Us
											</MenuLink>
										</MenuItem>

										<Heading size={5} bottomMargin={10}>
											Contact
										</Heading>
										<MenuItem>
											<MenuLink to="/contact/existing-clients/">
												Existing Clients
											</MenuLink>
										</MenuItem>
										<MenuItem>
											<MenuLink to="/contact/new-sales/">New Sales</MenuLink>
										</MenuItem>
									</SubmenuColumn>
								</DropdownMenu>
							</MenuItem>
						</Menu>
					</NavigationMobileScrollHidden>
				</Navigation>
				<LoginWrapper>
					<Login href={`${process.env.ORDER_URL}/dashboard`}>Login</Login>
					<Button
						theme="secondary40"
						to={`${process.env.ORDER_URL}/form-order-now.php`}
						width="100%"
					>
						Incorporate now
					</Button>
				</LoginWrapper>
			</MobileWrapper>
			<Hamburger hamburger={menu} onClick={() => showMenu(!menu)}>
				<span></span>
				<span></span>
				<span></span>
			</Hamburger>
		</Wrapper>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
