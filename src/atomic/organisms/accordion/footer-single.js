import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { color } from "../../atoms/styles/colors";
import DropdownSVG from "../../../images/dropdown.inline.svg";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 25px;

	@media (min-width: 769px) {
		margin-top: 0;
	}

	@media (min-width: 992px) {
		padding-right: 15px;
	}

	&:last-child {
		padding-right: 0;
	}

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 15px;
		width: 15px;
		margin-top: 10px;

		@media (min-width: 992px) {
			display: none;
		}

		svg {
			transform: ${(props) => (props.isOpen ? "scale(-1)" : "scale(1)")};
		}
	}
`;

const FooterItem = styled.div`
	button {
		background-color: transparent;
		border: 0;
		padding: 0;
		margin-top: 10px;
		margin-bottom: 10px;

		@media (min-width: 992px) {
			margin-top: 0;
			margin-bottom: 24px;
		}
	}

	h4 {
		color: ${color.grey2};
		font-family: MarkPro;
		font-size: 16px;
		letter-spacing: 1px;
		line-height: 14px;
		text-transform: uppercase;

		@media (min-width: 992px) {
			font-size: 12px;
			letter-spacing: 1px;
			opacity: 0.9;
		}
	}
`;

const List = styled.ul`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	list-style: none;
	margin-bottom: 32px;

	@media (min-width: 992px) {
		display: block;
		margin-bottom: 0;
	}

	li {
		margin-top: 16px;

		@media (min-width: 992px) {
			margin-top: 0;
		}

		a {
			text-decoration: none;
			color: ${color.grey2};
			font-family: Avenir;
			font-size: 18px;
			line-height: 24px;
			transition: color 0.3s ease;

			@media (min-width: 992px) {
				font-size: 14px;
				line-height: 30px;
			}

			&:hover {
				color: #fd8550;
			}
		}
	}
`;

const FooterSingle = ({ content }) => {
	const [menu, showMenu] = useState(false);

	function handleClick() {
		showMenu(!menu);
	}

	return (
		<Wrapper isOpen={menu} onClick={handleClick}>
			{content && (
				<FooterItem>
					{content.header && (
						<button>
							<h4>{content.header}</h4>
						</button>
					)}
					{content.list && (
						<List isOpen={menu}>
							{content.list.map((item, index) => (
								<li key={index}>
									<Link to={item.url}>{item.text}</Link>
								</li>
							))}
						</List>
					)}
				</FooterItem>
			)}
			<span>
				<DropdownSVG />
			</span>
		</Wrapper>
	);
};

export default FooterSingle;
