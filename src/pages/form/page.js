import React from "react";
import parse from "html-react-parser";
import SEO from "../../components/seo";
import Top from "../../atomic/partials/top";
import Layout from "../../components/layout";
import { top, opinions, choose } from "../../static/form/page";
import CartBlock from "../../atomic/molecules/blocks/cart-block";
import RatingBlock from "../../atomic/molecules/blocks/rating-block";
import RatingRow from "../../atomic/atoms/boxes/rating-row";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
import About from "../../atomic/sections/incfile-vs/about";
import Conclusion from "../../atomic/sections/incfile-vs/conclusion";
import Selections from "../../atomic/sections/incfile-vs/selections";
import Rocket from "../../atomic/sections/rocket";
import Opinions from "../../atomic/sections/form/opinions";
import Choose from "../../atomic/sections/form/choose";
import { setup } from "../../static/manage-your-company/home-page-v3";
const IncfileVsLegalzoom = () => {
	return (
		<Layout>
			<SEO
				title="Incfile vs. LegalZoom LLC Incorporation Services"
				description="Wev'e put together an objective review comparing Incfile's company formation services with one of our competitors, LegalZoom. Read more."
			/>

			<Top
				ovalColor="darkblue"
				imageName="mr-bulb-get-started-2927"
				imageAlt="Mr Bulb Get Started"
				headlineWidth={700}
				textWidth={400}
				imageMobilePosition="-8%"
			>
				<h1>{top.header}</h1>
				<p>{parse(top.text)}</p>
				<Buttonsbox>
					<Button content={top.buttons[0]} theme="primary56" arrow />
					<Button content={top.buttons[1]} theme="secondary56" arrow />
				</Buttonsbox>
				<RatingRow topMargin="0">
					<CartBlock />
					<RatingBlock />
				</RatingRow>
			</Top>
			<Opinions content={opinions} />
			<Choose content={choose} />
			<Rocket />
		</Layout>
	);
};

export default IncfileVsLegalzoom;
