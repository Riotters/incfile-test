import React from "react";
import styled from "styled-components";
import Link from "gatsby";
import HeadingCenter from "../../partials/heading-center";
import ContentCenter from "../../partials/content-center";
import Image from "../../atoms/image/image_nobase64";
import Oval from "../../atoms/icons/oval";
import { color } from "../../../components/styles/colors";
import OvalSVG from "../../../images/ovals/top-left-transparent-blue2.inline.svg";
import PopularSVG from "../../../images/icons/popular-articles-to-help-you-get-started.inline.svg";
import ShapeCurve from "../../atoms/shapes/curve";
import RelativeElement from "../../elements/relative-e";
import AbsoluteShapCure from "../../elements/absolute-shape-curve-e";
import Whitebox from "../../atoms/boxes/white-box";
import Circle from "../../atoms/icons/circle";
import ArrowSVG from "../../../images/arrow.inline.svg";
import { Heading } from "../../atoms/typography/heading";
import { Paragraph } from "../../atoms/typography/paragraph";
import Button from "../../molecules/buttons/button";

const Wrapper = styled.section`
	position: relative;
	padding: 60px 0 64px;

	@media (min-width: 992px) {
		padding: 140px 0 64px;
	}

	.article {
		gap: 0 1em;
		padding: 24px;

		.gatsby-image-wrapper {
			width: 120px;
			border-radius: 5px;
			margin-bottom: 16px;

			@media (min-width: 769px) {
				margin-bottom: 0;
			}

			img {
				max-width: 100%;
				height: auto;
			}
		}

		p {
		}
	}
`;

const Content = styled.div`
	flex: 1;

	p {
		&:last-child {
			margin-bottom: 16px;

			@media (min-width: 769px) {
				margin-bottom: 0;
			}
		}
	}
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	margin-top: 130px;

	span {
		margin-right: 24px;
	}
`;

const AlignCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 48px 0;
`;

const Article = styled(Whitebox)`
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 769px) {
		flex-direction: row;
		align-items: center;
	}
`;

const ClientDashboardSection = ({ className, content, isNewSale }) => (
	<Wrapper className={className}>
		<Oval className="oval" height="720" width="720" top="20" left="0" y="-35">
			<OvalSVG />
		</Oval>

		<HeadingCenter
			className="heading"
			headline={content.header}
			headlineWidth="770"
			text={content.text}
		/>
		<ContentCenter>
			<Button
				content={content.button}
				theme="primary56"
				arrow
				margin="0 0 32px"
			/>
			{!isNewSale && (
				<RelativeElement style={{ width: `100%` }}>
					<AbsoluteShapCure left="170px" top="73%" rotate={180}>
						<ShapeCurve color={color.blue1} />
					</AbsoluteShapCure>
					<Image filename="contact-01.inline" />
				</RelativeElement>
			)}

			{content.articles && (
				<div>
					<IconWrapper>
						<Circle height="80" width="80" circleColor={color.blue3}>
							<PopularSVG />
						</Circle>
						<Heading size="3" bottomMargin="0">
							Popular articles to help you get started
						</Heading>
					</IconWrapper>
					{content.articles.map((item) => (
						<a href={item.url} style={{ width: `100%`, display: `block` }}>
							<Article className="article" flex bottomMargin="8px">
								<Image filename={item.icon} alt="" />
								<Content>
									<Paragraph
										style={{ fontWeight: `bold`, marginBottom: `8px` }}
									>
										{item.title}
									</Paragraph>
									<Paragraph mixed={true}>{item.desc}</Paragraph>
								</Content>
								<Circle
									circleColor={color.orange3}
									iconColor={color.orange1}
									rightMargin="24"
									transform="rotate(0deg)"
									className="circle"
								>
									<ArrowSVG />
								</Circle>
							</Article>
						</a>
					))}

					{/*<AlignCenter>*/}
					{/*<Button content={{ text: "Read our blogs", url: "/blog/" }} theme="secondary56" arrow width="250px" />*/}
					{/*</AlignCenter>*/}
				</div>
			)}
		</ContentCenter>
	</Wrapper>
);

export default ClientDashboardSection;
