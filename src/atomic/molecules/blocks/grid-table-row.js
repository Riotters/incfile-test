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
import { SpanHeading } from "../../atoms/typography/span-as-heading";

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
	flex-direction: column;
	padding: 24px;
	min-width: 160px;
	${(props) => (props.textCenter ? "justify-content: center" : "")};
	position: relative;

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

	.incfile-logo,
	.legalzoom-logo,
	.zenbusiness-logo,
	.rocket-lawyer-logo {
		margin-top: ${(props) => (props.badge ? "16px" : "")};
	}

	.incfile-logo {
		width: 80px;
	}

	.legalzoom-logo {
		width: 95px;
	}

	.zenbusiness-logo {
		width: 167px;
	}

	.rocket-lawyer-logo {
		width: 175px;
	}

	&::before {
		content: ${(props) => (props.badge ? `"${props.badge}"` : false)};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 32px;
		width: 143px;
		font-family: MarkPro, sans-serif;
		font-size: 12px;
		font-weight: bold;
		text-transform: uppercase;
		color: ${color.blue1};
		background-color: ${color.white};
		border-radius: 4px;
		border: solid 2px ${color.blue1};
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.nobox {
		margin-top: 8px;
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
	headerSizeTemplate,
	list,
	columns,
	textCenter,
	noSeparator,
	badge,
}) => (
	<Wrapper className={className} columns={columns}>
		{content.map((item, index) => (
			<Cell
				textCenter={textCenter}
				noSeparator={noSeparator}
				key={index}
				badge={badge ? badge[index] : false}
			>
				{header &&
					item !== "incfile-logo" &&
					item !== "legalzoom-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "rocket-lawyer-logo" && (
						<SpanHeading
							size={headerSize ? headerSize : 4}
							template={headerSizeTemplate}
							bottomMargin="0"
						>
							{item}
						</SpanHeading>
					)}
				{list &&
					item !== "" &&
					item !== "incfile-logo" &&
					item !== "legalzoom-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "rocket-lawyer-logo" &&
					item !== "check-green" &&
					item !== "check-red" && <ListItem bottomMargin="0">{item}</ListItem>}
				{!header &&
					!list &&
					item !== "" &&
					item !== "incfile-logo" &&
					item !== "legalzoom-logo" &&
					item !== "zenbusiness-logo" &&
					item !== "rocket-lawyer-logo" &&
					item !== "check-green" &&
					item !== "check-red" && (
						<>
						{Array.isArray(item) ? (
							item.map((subitem) => (
								<Paragraph mixed bottomMargin="0" center className={subitem?.className ?? ""}>
									{parse(subitem?.content ?? subitem)}
								</Paragraph>
							))
							) : (
							<Paragraph mixed bottomMargin="0" center>
								{parse(item)}
							</Paragraph>
						)}
						</>
					)}
				{item === "check-green" && <CheckSVG />}
				{item === "check-red" && <ExSVG />}
				{item === "incfile-logo" && (
					<Image className="incfile-logo" filename="incfile-logo-3483" />
				)}
				{item === "legalzoom-logo" && (
					<Image className="legalzoom-logo" filename="legalzoom-logo-3482" />
				)}
				{item === "zenbusiness-logo" && (
					<Image className="zenbusiness-logo" filename="zenbusiness-logo" />
				)}
				{item === "rocket-lawyer-logo" && (
					<Image className="rocket-lawyer-logo" filename="rocket-lawyer-logo" />
				)}
				{item === "" && <IconCircle theme="empty" circleColor="#E7E7E7" />}
			</Cell>
		))}
	</Wrapper>
);

export default GridTableRow;
