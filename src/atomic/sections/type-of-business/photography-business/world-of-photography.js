import Container from "../../../container";
import { Paragraph } from "../../../atoms/typography/paragraph";
import { color } from "../../../atoms/styles/colors";
import React from "react";
import styled from "styled-components";
import OvalSvg from "../../../../images/ovals/top-right-transparent-orange.inline.svg";
import OvalSvg2 from "../../../../images/ovals/bottom-left-transparent-orange.inline.svg";
import TextCenterLayout from "../../../partials/heading-left";
import { gradient } from "../../../atoms/styles/colors";
import { shadow } from "../../../../components/styles/shadows";
import AdventagesWithLongText from "../../../molecules/mixed-blocks/adventages-with-long-text";

const ContainerWrapper = styled.div`
	background: rgb(255, 255, 255);
	background-image: ${gradient.orange3};
	padding-bottom: 100px;
	position: relative;
	padding-top: 120px;
`;

const GridSection = styled.div`
	width: 100%;
`;

const TitleBox = styled.div`
	width: 100%;
	position: relative;
	max-width: 750px;

	@media (min-width: 750px) {
		margin: 0 auto;
	}

	h3 {
		color: #1d1d1d;
		font-size: 40px;
		text-align: left;
		margin-bottom: 24px;
	}
`;

const OvalCenter = styled.div`
	position: absolute;
	right: 0;
	top: 721px;
	width: 100%;

	@media (min-width: 720px) {
		width: 720px;
	}
`;

const OvalCenter2 = styled.div`
	position: absolute;
	left: 0;
	top: 50%;
	width: 100%;

	@media (min-width: 420px) {
		width: 420px;
	}
`;

const AdventagesBox = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 100%;
	justify-content: center;
	column-gap: 30px;
	row-gap: 70px;
	margin-top: 76px;
	margin-bottom: 76px;

	@media (min-width: 490px) {
		grid-template-columns: 470px;
	}

	@media (min-width: 992px) {
		grid-template-columns: 470px 470px;
	}
`;

const WorldOfPhotography = () => (
	<ContainerWrapper>
		<OvalCenter>
			<OvalSvg />
		</OvalCenter>
		<OvalCenter2>
			<OvalSvg2 />
		</OvalCenter2>
		<Container>
			<GridSection>
				<TitleBox>
					<TextCenterLayout
						headline="Understanding the World of the Photography Business"
						headlineWidth={770}
					/>
					<Paragraph big>
						Photography is a very specialized skill; it requires people with
						both a keen eye and an understanding of composition, editing,
						framing and more to create stunning images. Add to that the need to
						manage others well plus a solid understanding of business
						principles...you'll see that freelance photographers need to be
						well-rounded individuals.
					</Paragraph>

					<Paragraph
						big
						style={{
							fontFamily: "Engram",
							fontWeight: "900",
							color: color.black,
						}}
					>
						There are dozens of different niches you can choose to pursue as a
						photographer.
					</Paragraph>

					<Paragraph big>
						If you can make your name in one of them, your reputation will carry
						you a long way. Here are some areas to consider when choosing the
						type of photographer you want to be.
					</Paragraph>
					<Paragraph big>
						When you’re deciding which route to follow, look at local
						competition, your skillset, demand for these services in your area
						and any other local factors likely to impact the amount of
						photography business you can win.
					</Paragraph>
				</TitleBox>

				<AdventagesBox>
					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={1}
						title="Fashion photography"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="fashion-photography"
						width="100%"
					>
						<Paragraph mixed={true}>
							Shooting clothes and models in a variety of situations and editing
							to show apparel in the most beautiful and evocative way.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={2}
						title="Landscape photography"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="landscape-photography-01"
						width="100%"
					>
						<Paragraph mixed={true}>
							Wide-angle lenses, beautiful contrasts and perfect framing means
							landscape photographers produce stunning shots of natural vistas.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={3}
						title="Family, baby and pet photography"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="family-baby-and-pet-photography"
						width="100%"
					>
						<Paragraph mixed={true}>
							Whether it’s individual portraits and headshots or capturing
							someone’s furry friend, great family and pet photographers are in
							high demand.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={4}
						title="Real estate and property photographer"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="keep-your-real-adress-private"
						width="100%"
					>
						<Paragraph mixed={true}>
							Photographers can partner with real estate agents and property
							developers to help showcase homes in the best possible light.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={5}
						title="Event and concert photographer"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="event-an-concert-photographer"
						width="100%"
					>
						<Paragraph mixed={true}>
							For those who love the adrenaline rush and atmosphere of a live
							event, these photographers bring the vibrancy of music and
							entertainment out in their images.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={6}
						title="Aerial photography"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="aerial-photography"
						width="100%"
					>
						<Paragraph mixed={true}>
							With the rise of drones as great vehicles for cameras, aerial
							photography is one of the most rapidly growing areas for
							photographers to specialize in.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={7}
						title="Food photographer"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="meal-design"
						width="100%"
					>
						<Paragraph mixed={true}>
							In great demand by brands, restaurants and advertisers, food
							photographers use a variety of tricks and techniques to make
							people’s mouths water!
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={8}
						title="Marketing and advertising photographer"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="marketing-and-advertising-photographer"
						width="100%"
					>
						<Paragraph mixed={true}>
							These photographers capture the images that grace magazines,
							websites and TV screens.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={9}
						title="Stock photographer"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="stock-photographer"
						width="100%"
					>
						<Paragraph mixed={true}>
							With the huge rise in website owners and others using stock
							photos, there’s an enormous demand for images that capture
							specific moments in life and work.
						</Paragraph>
					</AdventagesWithLongText>

					<AdventagesWithLongText
						style={{ textAlign: "left" }}
						circleText={10}
						title="Wedding photographer"
						circlePosition="center"
						circleBackgroundColor={color.blue1}
						circleBackgroundShadow={shadow.blue1}
						imageName="wedding-planning"
						width="100%"
					>
						<Paragraph mixed={true}>
							Perhaps the most popular and in-demand type of photographer, they
							immortalize the most important day of a couple’s life.
						</Paragraph>
					</AdventagesWithLongText>
				</AdventagesBox>
				<Paragraph
					big
					style={{
						justifyContent: "center",
						width: "100%",
						maxWidth: "750px",
						margin: "auto",
					}}
				>
					The most popular types of photography in descending order are:
					portrait, fine arts, events, wedding, advertising, photojournalism,
					nature, marketing, products and architecture.
				</Paragraph>
			</GridSection>
		</Container>
	</ContainerWrapper>
);

export default WorldOfPhotography;
