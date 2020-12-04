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
import Card from "../../../../atomic/molecules/mixed-blocks/top-image-box";

const AdvantagesSection = styled.section`
	position: relative;
	padding: 108px 0;
	background: linear-gradient(${color.orange3}, #fff);
	overflow: hidden;
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
					{content.cards2.map((item, i) => (
						<>
							{item.link && (
                                <Card
                                    key={i}
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
                                    key={i}
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