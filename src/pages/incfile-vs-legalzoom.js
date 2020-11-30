import React from "react";
import SEO from "../components/seo";
import Top from "../atomic/partials/top";
import ButtonsBox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Layout from "../components/layout";
import Resources from "../atomic/sections/learn-more/resources";
import Video from "../atomic/sections/learn-more/video";
import ToolsSection from "../atomic/sections/learn-more/tools";
import { tools, help } from "../static/learn-more";
import { top } from "../static/incfile-vs-legalzoom";
import Comparison from "../atomic/sections/learn-more/comparison";
import Help from "../components/partials/sections/help";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import OrderNow from "../atomic/sections/type-of-business/cleaning-business/order-now";

const IncfileVsLegalzoom = () => (
	<Layout>
		<SEO
			title="LLC, Nonprofit and Incorporation Resource Center | Incfile"
			description="Learn about the LLC (Limited Liability Company) and Corporation are filed as well as other reporting and compliance requirements"
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
		<OrderNow />
		<Resources />
		<Video />
		<ToolsSection content={tools} />
		<Comparison />
		<Help content={help} />
	</Layout>
);

export default IncfileVsLegalzoom;
