import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../atoms/styles/colors";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Whitebox from "../../atoms/boxes/white-box";
import IconCircle from "../../atoms/icons/circle";
import CheckSVG from "../../../images/circle-status-check.inline.svg";
import ExSVG from "../../../images/circle-status-x.inline.svg";
import Image from "../../atoms/image/image_nobase64";

const Wrapper = styled(Whitebox)`
	display: grid;
	grid-template-columns: ${(props) =>
		props.columns && props.columns.length === 1
			? `repeat(${props.columns}, 1fr)`
			: props.columns
			? props.columns
			: "1fr 160px 160px 160px 160px;"};

	&:not(:last-child) {
		margin-bottom: 8px;
	}
`;

const Cell = styled.div`
	display: flex;
	align-items: center;
	padding: 24px;
	min-width: 160px;
	${(props) => (props.textCenter ? "justify-content: center" : "")};

	@media (min-width: 769px) {
		min-width: auto;
	}

	${(props) =>
		!props.noSeparator &&
		`
        &:not(:last-child) {
            border-right: 1px solid ${color.grey4};
        }
    `};

	.incfile-logo {
		width: 80px;
	}

	.legalzoom-logo {
		width: 95px;
	}
`;

const ListItem = styled(Paragraph)`
	color: ${color.black};
	padding-left: 26px;
	position: relative;

	&::before {
		content: "";
		height: 4px;
		width: 4px;
		background-color: ${color.purple1};
		border-radius: 50%;
		position: absolute;
		top: 9px;
		left: 6px;
	}
`;

const GridTableRow = ({
	className,
	content,
	header,
	headerSize,
	list,
	columns,
	textCenter,
	noSeparator,
}) => (
	<Wrapper className={className} columns={columns}>
		{content.map((item, index) => (
			<Cell textCenter={textCenter} noSeparator={noSeparator} key={index}>
				{header &&
					item !== "incfile-logo" &&
					item !== "legalzoom-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "zenbusiness-logo" && (
						<Heading size={headerSize ? headerSize : "4"} bottomMargin="0">
							{item}
						</Heading>
					)}
				{list &&
					item !== "" &&
					item !== "incfile-logo" &&
					item !== "legalzoom-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "check-green" &&
					item !== "check-red" && <ListItem bottomMargin="0">{item}</ListItem>}
				{!header &&
					!list &&
					item !== "" &&
					item !== "incfile-logo" &&
					item !== "legalzoom-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "check-green" &&
					item !== "check-red" && (
						<Paragraph mixed bottomMargin="0">
							{parse(item)}
						</Paragraph>
					)}
				{item === "check-green" && <CheckSVG />}
				{item === "check-red" && <ExSVG />}
				{item === "incfile-logo" && (
					<Image className="incfile-logo" filename="incfile-logo-3483" />
				)}
				{item === "legalzoom-logo" && (
					<Image className="legalzoom-logo" filename="legalzoom-logo-3482" />
				)}
				{item === "zenbusiness-logo" && <ExSVG />}
				{item === "rocketlawyer-logo" && <ExSVG />}
				{item === "" && <IconCircle theme="empty" circleColor="#E7E7E7" />}
			</Cell>
		))}
	</Wrapper>
);

export default GridTableRow;
