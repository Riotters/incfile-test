import React from "react";
import styled from "styled-components";
import Container from "../container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Article from "../../components/article";
import PurpleCurveSVG from "../../images/purple-curve.inline.svg";
import PinkCurveSVG from "../../images/pink-curve.inline.svg";
import VisibilitySensor from "../VisibilitySensor";
import Oval from "../../atomic/atoms/icons/oval";
import OvalSVG from "../../images/ovals/top-right-transparent-purple2.inline.svg";
import { getRelatedPosts } from "../../api/Api";
import HTMLReactParser from "html-react-parser";
import { Heading } from "../atoms/typography/heading";

const Wrapper = styled.div`
	padding-top: 80px;
	padding-bottom: 80px;
	position: relative;
	overflow: hidden;
`;

const PurpleCurve = styled.div`
	height: 25px;
	width: 29px;
	position: absolute;
	top: 38px;
	right: -15px;
`;

const PinkCurve = styled.div`
	height: 21px;
	width: 24px;
	position: absolute;
	bottom: 52px;
	left: -10px;
`;

const CarouselWrapper = styled.div`
	margin: 0 -15px;
	overflow: hidden;
	padding: 0 10px 42px 10px;

	@media (max-width: 768px) {
		contact/new-sales .react-multi-carousel-list {
			overflow: visible;

			.react-multi-carousel-item {
				opacity: 0;
			}
		}
	}

	.react-multi-carousel-list {
		overflow: visible;

		.react-multi-carousel-item {
			//opacity: 0;
			pointer-events: none;
			transition: opacity 0.3s ease;

			&--active {
				opacity: 1;
				pointer-events: auto;

				a {
					box-shadow: 0 20px 30px 0 #e6e6e6;
				}
			}
		}
	}

	.react-multi-carousel-dot-list {
		position: relative;
		z-index: 1;
		margin-top: 48px;

		.react-multi-carousel-dot {
			button {
				width: 8px;
				height: 8px;
				background-color: #fce7d0;
				border: none;
				border-radius: 4px;
				transition: width 0.3s ease;
			}

			&--active {
				button {
					width: 16px;
					background-color: #fd8550;
				}
			}
		}
	}
`;

const responsive = {
	desktop: {
		breakpoint: { max: 9999, min: 992 },
		items: 3,
		slidesToSlide: 3,
	},
	tablet: {
		breakpoint: { max: 992, min: 768 },
		items: 2,
		slidesToSlide: 2,
	},
	mobile: {
		breakpoint: { max: 769, min: 0 },
		items: 1,
	},
};

const Articles = ({ oval, categoryId }) => {
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		getRelatedPosts(categoryId).then((data) => {
			setPosts(data);
		});
	}, [categoryId]);

	return (
		<Wrapper>
			{oval && (
				<Oval height="341" width="341" top="25" right="0">
					<OvalSVG />
				</Oval>
			)}
			{posts.length > 0 && (
				<Container>
					<div>
						{/* <VisibilitySensor partialVisibility once>
							{({ isVisible }) => ( */}
						<Heading
							size={2}
							template={3}
							bottomMargin={36}
							//className={isVisible ? "slideUp enter" : "slideUp"}
						>
							Related Articles
						</Heading>
						{/* )}
						</VisibilitySensor> */}
						<CarouselWrapper>
							<PurpleCurve>
								<PurpleCurveSVG />
							</PurpleCurve>
							<PinkCurve>
								<PinkCurveSVG />
							</PinkCurve>
							<Carousel
								responsive={responsive}
								arrows={false}
								showDots
								renderDotsOutside
							>
								{posts.map((post, index) => (
									<Article
										img={post.featured_image}
										top="0"
										topLG="-50px"
										scale="1.1"
										href={post.link}
										key={index}
									>
										{HTMLReactParser(post.title.rendered)}
									</Article>
								))}
							</Carousel>
						</CarouselWrapper>
					</div>
				</Container>
			)}
		</Wrapper>
	);
};

export default Articles;
