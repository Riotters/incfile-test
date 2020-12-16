import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";

//Sections
import Top from "../atomic/partials/top";
import DecidingSection from "../atomic/sections/why-choose-incfile/deciding";
import ChooseLists from "../atomic/sections/why-choose-incfile/choose-lists";
import Rocket from "../atomic/sections/review-entity-types/c-corporation/rocket";

//Texts
import {
	seo,
	hero,
	deciding,
	whyChoose,
	rocket,
} from "../static/other/why-choose-incfile";

const WhyChooseIncfile = () => (
	<Layout>
		<SEO title={seo.title} description={seo.desc} />

		<Top
			imageName="hero-why-choose-us"
			imageAlt="why choose Incfile"
			imageWidth="330"
			imageMobileWidth="240"
			imagePositionRight="45%"
			imageMobilePosition="22%"
			ovalColor="blue"
			headlineWidth="550"
		>
			<h1>{hero.header}</h1>
			<p>{hero.subtitle}</p>
			<Buttonsbox>
				{/*<Button content={hero.button} theme="primary56" arrow />*/}
			</Buttonsbox>

			<RatingRow>
				<CartBlock />
				<RatingBlock />
			</RatingRow>
		</Top>

		<DecidingSection content={deciding} />
		<ChooseLists content={whyChoose} />
		<Rocket content={rocket} />
	</Layout>
);

export default WhyChooseIncfile;
