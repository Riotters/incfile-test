import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentLeft from "../../../partials/content-left";
import ObjectContent from "../../../partials/left-object-right-content";
import ColorBox from "../../../molecules/colored-blocks/color-box-with-top-icon";
import ArrowLink from "../../../molecules/buttons/text";
import ClockSVG from "../../../../images/icons/clock.inline.svg";
import FilingRequirementBox from "../../../states-llc/filing-requirement-box";

const Requirements = styled.section`
	position: relative;
	padding-top: 75px;
	padding-bottom: 64px;

	.row {
		&--1,
		&--2 {
			padding-bottom: 120px;
		}
	}
`;

const TextWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`;

const Grid = styled.div`
	display: grid;
	grid-gap: 30px;
	grid-template-columns: 100%;

	@media (max-width: 991px) {
		& > div:first-child {
			margin-top: 26px;
		}
	}

	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;

		& > div {
			margin-top: 26px;
		}
	}
`;

const RequirementsSection = ({ className, content, data }) => {
	const headerSection = `Fees and requirements in ${
		data?.prices ? data.prices.state : ""
	}.`;
	let stateFee = data?.prices ? data.prices.statefee : 0;

	const boxFilingTimeAndFees = {
		fields: [
			{
				header: `$${stateFee}`,
				text: `State fee`,
			},
			{
				header: `${data?.prices ? data.prices.slow : 0}`,
				text: `State filing time`,
			},
			{
				header: `${data?.prices ? data.prices.fast : 0}`,
				text: `Expected filling time`,
			},
		],
	};

	const FirstSectionColumns = [
		{
			content: [
				{
					type: `heading`,
					size: 3,
					content: `Filing time and price`,
				},
				{
					type: `paragraph`,
					content: `The state charges this amount to file a new business entity. This fee goes directly to the Secretary of State.`,
				},
				{
					type: `arrow-links`,
					content: {
						text: `Compare State Filing Times`,
						url: `/state-filing-times/`,
					},
					bottomMargin: 16,
				},
				{
					type: `arrow-links`,
					content: {
						text: `Compare State Filing Prices`,
						url: `/state-filing-fees/`,
					},
				},
			],
		},
		{
			content: [
				{
					type: `heading`,
					size: 3,
					content: `Compliance  Requirements`,
				},
				{
					type: `paragraph`,
					content: `This report is mandatory and must be filed within the specified time frame in order for the entity to remain in good standing with the state. Failure to file this report can lead to the company being revoked or administratively dissolved.`,
				},
				{
					type: `arrow-links`,
					content: {
						text: `Other State Requirements`,
						url: `/compliance-filing-requirement/`,
					},
				},
			],
		},
	];

	return (
		<Requirements className={className}>
			<ContentLeft>
				<Heading size="2" bottomMargin="160" maxWidth="500">
					{headerSection}
				</Heading>
			</ContentLeft>
			<ObjectContent
				className="row row--1"
				headlineWidth="450"
				object={
					<ColorBox
						content={boxFilingTimeAndFees}
						color={color.green3}
						icon={<ClockSVG />}
						radius="50px 5px 5px 100px"
						curve
						curveLeft
					/>
				}
				objectWidth="400"
				objectPadding="130"
				contentWidth="900"
			>
				<Grid>
					{FirstSectionColumns.map((column, i) => (
						<TextWrapper key={i}>
							{column.content.map((item, j) => (
								<>
									{item.type === "heading" && (
										<Heading
											size={item.size}
											template={item.template}
											bottomMargin={item.bottomMargin}
										>
											{item.content}
										</Heading>
									)}

									{item.type === "paragraph" && (
										<Paragraph
											mixed={true}
											bottomMargin={item.bottomMargin}
											style={{ fontSize: `18px` }}
										>
											{parse(item.content)}
										</Paragraph>
									)}

									{item.type === "arrow-links" && (
										<ArrowLink
											content={item.content}
											bottomMargin={item.bottomMargin}
										/>
									)}
								</>
							))}
						</TextWrapper>
					))}
				</Grid>
			</ObjectContent>

			<ContentLeft>
				<FilingRequirementBox data={data} style={{ margin: 0 }} />
			</ContentLeft>
		</Requirements>
	);
};

export default RequirementsSection;
