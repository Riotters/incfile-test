import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import Layout from "../components/layout";
import {
	top,
	about,
	conclusion,
	selections,
} from "../static/incfile-vs-legalzoom";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";

import About from "../atomic/sections/incfile-vs/legalzoom/about";
import Conclusion from "../atomic/sections/incfile-vs/legalzoom/conclusion";
import Selections from "../atomic/sections/incfile-vs/legalzoom/selections";

const IncfileVsLegalzoom = () => {
	return (
		<Layout>
			<SEO
				title="Incfile vs. LegalZoom LLC Incorporation Services"
				description="Wev'e put together an objective review comparing Incfile's company formation services with one of our competitors, LegalZoom. Read more."
			/>

			<Top
				ovalColor="green"
				imageName="mr-bulb-incfile-vs-legalzoom-7299"
				imageAlt="Mr Bulb Incfile vs Legalzoom"
				headlineWidth={700}
				imageMobilePosition="-8%"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<RatingRow topMargin="0">
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>
			<About content={about} />
			<Conclusion content={conclusion} />
			<Selections content={selections} />
		</Layout>
	);
};

export default IncfileVsLegalzoom;
