import React from "react";
import Layout from "../components/layout";
import parse from "html-react-parser";
import SEO from "../components/seo";
//Sections
import Top from "../atomic/partials/top";
import {
	business_formation,
	setup,
	top,
} from "../static/manage-your-company/home-page-v3";
import Button from "../atomic/molecules/buttons/button";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import BusinessFormation from "../atomic/sections/manage-your-company/home-page-v3/business-formation";
import SetupYourBusiness from "../atomic/sections/manage-your-company/home-page-v3/setup-your-business";
import Rocket from "../atomic/sections/rocket";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";

const HomePageV3 = () => {
	return (
		<Layout>
			<SEO
				title="LLC Filing & Business Formation - Start Your Company Today"
				description="Start your business today for as little as $0 + state fees. Incfile helps you quickly and easily create your LLC or other business entity. Learn more."
			/>
			<Top
				imageName="home-page-v3-top-9458"
				imageAlt="llc filing & business formation"
				ovalColor="green"
				headlineWidth="700"
				textWidth="700"
				imageMobilePosition="-8%"
			>
				<h1>{top.header}</h1>
				<p>{parse(top.text)}</p>
				<Buttonsbox>
					<Button externalLink content={top.button[0]} theme="primary56" arrow />
				</Buttonsbox>
				<RatingRow>
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>
			<BusinessFormation content={business_formation} />
			<SetupYourBusiness content={setup} />
			<Rocket index />
		</Layout>
	);
};

export default HomePageV3;
