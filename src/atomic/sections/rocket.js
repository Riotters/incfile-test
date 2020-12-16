import React from "react";
import styled from "styled-components";
import Container from "../container";
import Image from "../atoms/image/image";
import OvalSVG from "../../images/oval-yellow-3.inline.svg";
import CurveSVG from "../../images/yellow-curve.inline.svg";
import { Heading } from "../atoms/typography/heading";
import { Paragraph } from "../atoms/typography/paragraph";
import ExternalLink from "../molecules/buttons/external-link";
import Searchbar from "../../components/searchbar";
import StatesDropdown from "../molecules/mixed-blocks/states-dropdown";
import parse from "html-react-parser";

const Rocket = ({
	search,
	statesDropdown,
	index,
	url,
	textButton,
	text1,
	text2,
	textHeading,
}) => (
	<Wrapper>
		<Oval>
			<OvalSVG />
		</Oval>
		<Curve>
			<CurveSVG />
		</Curve>
		<Moon>
			<Image filename="moon" alt="moon" />
		</Moon>
		<Container>
			<RocketWrapper>
				<Image filename="rocket-2x" alt="rocket lunch" />
			</RocketWrapper>
			{search && (
				<Content>
					<SearchBox>
						<h2>Learn more about Nonprofits by state.</h2>
						<Searchbar />
					</SearchBox>
				</Content>
			)}
			{statesDropdown && (
				<Content>
					<SearchBox>
						<h2>Learn more about Nonprofits by state.</h2>
						<StatesDropdown />
					</SearchBox>
				</Content>
			)}

			{index && (
				<Content>
					<Heading size={2} bottomMargin="0">
						{" "}
						Start Your LLC, S Corp,{" "}
					</Heading>
					<Heading size={2}>or C Corp Today</Heading>
					<Paragraph bottomMargin="0">
						There's A Reason More Than 500,000
					</Paragraph>
					<Paragraph>Businesses Have Started With Incfile</Paragraph>
					<ExternalLink
						content={{
							text: `Launch your business`,
							url: `${process.env.ORDER_URL}/form-order-now.php`,
						}}
						target="_self"
						theme="primary48"
						margin="0 auto 0 0"
						arrow
					/>
				</Content>
			)}

			{!search && !statesDropdown && !index && (
				<Content>
					{!textHeading ? (
						<>
							<Heading size={2}>
								{" "}
								Launch <br />
								your business with Incfile
							</Heading>
						</>
					) : (
						<Heading size={2}>{parse(textHeading)}</Heading>
					)}
					<Paragraph bottomMargin="0" mixed={true}>
						{text1 ? parse(text1) : "No Contracts. No Surprises."}
					</Paragraph>
					<Paragraph>
						{text2
							? parse(text2)
							: "Only $0 + State Fee to Launch Your Business."}
					</Paragraph>
					<ExternalLink
						content={{
							text: `${textButton ? textButton : "Start Now"}`,
							url: `${process.env.ORDER_URL}/form-order-now.php${
								url ? url : ""
							}`,
						}}
						theme="primary48"
						margin="0 auto 0 0"
						target="_self"
						arrow
					/>
				</Content>
			)}
		</Container>
	</Wrapper>
);

const Wrapper = styled.div`
	position: relative;
	//min-height: 775px;
	margin-bottom: 50px;
	display: flex;
	align-items: center;
	margin-top: 120px;
	z-index: 0;

	@media (min-width: 769px) {
		margin-top: 200px;
		margin-bottom: 200px;
	}
`;

const RocketWrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 755px;
	top: 20%;
	left: 90%;
	position: absolute;

	transform: translate(-100%, -50%);
	z-index: 0;

	@media (min-width: 470px) {
		top: 20%;
	}

	@media (min-width: 769px) {
		display: flex;
		top: 50%;
		left: 32%;
	}

	@media (min-width: 992px) {
		left: 40%;
	}

	&::after {
		content: "";
		display: block;
		padding-top: 100%;
	}

	.gatsby-image-wrapper {
		position: absolute !important;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		img {
			object-fit: contain !important;
		}
	}
`;

const Oval = styled.div`
	width: 100%;
	max-width: 370px;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 1) 15%,
			rgba(255, 255, 255, 0) 100%
		);

		@media (min-width: 769px) {
			background: linear-gradient(
				0deg,
				rgba(255, 255, 255, 1) 0%,
				rgba(255, 255, 255, 0) 20%
			);
		}
	}

	@media (max-width: 768px) {
		bottom: auto;
		top: 40%;
	}
`;

const Curve = styled.div`
	display: none;
	height: 97px;
	width: 81px;
	position: absolute;
	right: 0;
	top: 50%;

	@media (min-width: 992px) {
		display: block;
	}
`;

const Moon = styled.div`
	display: block;
	height: 130px;
	width: 81px;
	position: absolute;
	top: -115px;
	left: 30px;

	@media (min-width: 769px) {
		display: block;
		top: -26%;
		right: 14%;
		left: unset;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: auto;
	margin-top: 260px;

	@media (min-width: 420px) {
		margin-top: 300px;
	}

	@media (min-width: 520px) {
		margin-top: 350px;
	}

	@media (min-width: 769px) {
		width: 100%;
		max-width: 670px;
		margin-top: 0;
	}

	h2 {
		text-align: left;
	}
`;

const SearchBox = styled.div`
	width: 100%;
	max-width: 570px;
	margin: 0 auto;

	@media (min-width: 769px) {
		margin: 0 8.333333% 0 0;
	}

	h2 {
		max-width: 390px;
		margin: 0 0 40px;
	}
`;

export default Rocket;
