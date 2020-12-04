import React from "react";
import styled from "styled-components";
import { color } from "../../../atoms/styles/colors";
import { Heading } from "../../../atoms/typography/heading";
import { Paragraph } from "../../../atoms/typography/paragraph";
import ContentObject from "../../../partials/content-center";
import Oval from "../../../atoms/icons/oval";
import OvalSVG from "../../../../images/ovals/bottom-right-transparent-orange3.inline.svg";
import OvalSVG2 from "../../../../images/ovals/top-left-transparent-orange3-big.inline.svg";
import Curve from "../../../atoms/icons/curve";
import CurveSVG from "../../../../images/curves/top-left-right-orange2-big.inline.svg";
import CurveSVG2 from "../../../../images/curves/bottom-right-reverse-big-orange2.inline.svg";
import Cards from "../../../organisms/cards/entity-search-adventages";
import parse from "html-react-parser";
import Image from "../../../atoms/image/image_nobase64";
import Whitebox from "../../../atoms/boxes/white-box";
import ArrowLink from "../../../molecules/buttons/text";
import { moreInfo } from "../../../../static/learning-center-entity/virtual-mailboxes";
import Card from "../../../../atomic/molecules/mixed-blocks/top-image-box";

const AdvantagesSection = styled.section`
	position: relative;
	padding: 108px 0;
	background: linear-gradient(${color.orange3}, #fff);
	overflow: hidden;
`;

const Improvement = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	align-items: center;
	margin-top: 110px;

	@media screen and (min-width: 850px) {
		grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
	}

	.improvement__item {
		padding: 20px;
		align-items: flex-start;
		flex-direction: column;
		text-align: left;

		@media screen and (min-width: 769px) {
			padding: 40px;
			width: 470px;

			&:nth-child(2) {
				grid-column: 2 /4;
				grid-row: 0/3;
			}
		}

		.gatsby-image-wrapper {
			width: 96px;
			align-self: center;
			margin-bottom: 20px;
		}
	}
`;

const ImageWrapper = styled.div`
	padding: 16px 0;
	display: flex;
	width: 100%;
	margin-bottom: 24px;
	justify-content: center;
	background: ${(props) => (props.background ? props.background : color.white)};
`;

const CardsWrapper = styled.div`
	position: relative;
`;

const InnerSection = styled.div`
	width: 100%;
	height: auto;
	position: relative;
`;

const SearchSection = ({ className, content }) => (
	<AdvantagesSection className={className}>
		<InnerSection>
			<ContentObject contentWidth="970" contentCenter>
				<Heading size="2">{content.header}</Heading>
				<Paragraph big bottomMargin="0">
					{content.text}
				</Paragraph>

				<CardsWrapper>
					<Curve top="-15" left="-115" color={color.orange2}>
						<CurveSVG />
					</Curve>
					<Cards content={content.cards} />
				</CardsWrapper>
			</ContentObject>

			<Oval className="oval" height="420" width="420" bottom="0" right="0">
				<OvalSVG />
			</Oval>
		</InnerSection>

		<InnerSection>
			<Oval className="oval" height="420" width="420" top="0" left="0">
				<OvalSVG2 />
			</Oval>
			<ContentObject contentWidth="970" contentCenter>
				<Heading size="2" bottomMargin="62">
					{content.header2}
				</Heading>

				<Paragraph big bottomMargin="104">
					{content.text2}
				</Paragraph>

				<Grid>
					{content.cards2.map((item) => (
						<>
							{item.link && (
								<Card
									content={{
										header: item.header,
										text: item.text,
										link: item.link,
									}}
									color={item.background}
									image={item.image}
								/>
							)}
							{!item.link && (
								<Card
									content={{
										header: item.header,
										text: item.text,
									}}
									color={item.background}
									image={item.image}
								/>
							)}
						</>
					))}
					<Curve top="290" right="-25" color={color.orange2}>
						<CurveSVG2 />
					</Curve>
				</Grid>
			</ContentObject>
		</InnerSection>
	</AdvantagesSection>
);

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	position: relative;
	width: 100%;

	@media (min-width: 769px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export default SearchSection;
