import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Button from "../../atomic/molecules/buttons/button";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import Top from "../../atomic/partials/top";
import styled from "styled-components";
import { Paragraph } from "../../atomic/atoms/typography/paragraph";
import { Heading } from "../../atomic/atoms/typography/heading";
import Conclusion from "../../atomic/sections/general/conclusion";
import BusinessStructure from "../../atomic/sections/type-of-business/photography-business/business-structure";
import SettingBusiness from "../../atomic/sections/type-of-business/photography-business/setting-business";
import OrderNow from "../../atomic/sections/type-of-business/photography-business/order-now";
import WorldOfPhotography from "../../atomic/sections/type-of-business/photography-business/world-of-photography";
import PhotographyIntroduce from "../../atomic/sections/type-of-business/photography-business/photography-introduce";
import Statistics from "../../atomic/sections/type-of-business/photography-business/statistics";
import QuestionToAsk from "../../atomic/sections/type-of-business/photography-business/question-to-ask";
import MainSkils from "../../atomic/sections/type-of-business/photography-business/main-skils";
import MainChallenges from "../../atomic/sections/type-of-business/photography-business/main-challenges";
import ToolsAndLinks from "../../atomic/sections/type-of-business/photography-business/tools";

const WithNoMoneyBusiness = () => (
	<Layout>
		<SEO
			title="How to Start a Photography Business"
			description="For those with a creative eye, a flair for framing and the ability to capture memories, photography can be a great career choice. Whether you’re taking photos yourself, editing photos after they’ve been taken or you’re involved in post production, there are plenty of ways to use your skills."
		/>

		<Top
			ovalColor="love"
			imageName="photography-business-main"
			imageAlt="Mr Bulb with seedling"
			headlineWidth={700}
		>
			<h1>How to Start a Photography Business</h1>
			<p>
				For those with a creative eye, a flair for framing and the ability to
				capture memories, photography can be a great career choice. Whether
				you’re taking photos yourself, editing photos after they’ve been taken
				or you’re involved in post production, there are plenty of ways to use
				your skills.
			</p>
			<ButtonsBox>
				<Button
					theme="primary56"
					marginMD="0 24px 0 0"
					arrow
					content={{
						url: `${process.env.ORDER_URL}/form-order-now.php`,
						text: "Start Now",
					}}
				/>
			</ButtonsBox>

			<RatingRow>
				<CartBlock />
				<RatingBlock />
			</RatingRow>
		</Top>

		<PhotographyIntroduce />

		<WorldOfPhotography />

		<Statistics />

		<QuestionToAsk />

		<MainSkils />

		<MainChallenges />

		<BusinessStructure />

		<SettingBusiness />

		<OrderNow />

		<ToolsAndLinks />

		<Conclusion
			to="/"
			buttonTitle="Start your Photography Business with us, today"
		>
			<Heading size={3} style={{ fontSize: "48px" }}>
				Conclusion
			</Heading>
			<Paragraph big>
				Running a photography business is a way to bring together art and
				commerce. You can combine your creative flair with your excellent
				business sense to create images your clients will love. Start now, and
				build something beautiful.
			</Paragraph>
		</Conclusion>
	</Layout>
);

const ButtonsBox = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 769px) {
		flex-direction: row;
	}
`;

export default WithNoMoneyBusiness;
