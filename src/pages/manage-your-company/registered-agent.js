import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/registered-agent/about";
import Includes from "../../atomic/sections/manage-your-company/registered-agent/includes";
import Offering from "../../atomic/sections/manage-your-company/registered-agent/offering";
import Faq from "../../atomic/sections/manage-your-company/registered-agent/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
import ProductSchema from "../../components/product-schema";

//Texts
import {
	top,
	about,
	includes,
	offering,
	faq,
} from "../../static/manage-your-company/registered-agent";
import { servicePrice } from "../../helpers/global-variables";
import { HeadingP } from "../../atomic/atoms/typography/heading-to-p";

const RegisteredAgent = () => (
	<Layout>
		<SEO
			title="Registered Agent Services for LLCs, S Corps, & More"
			description="Get an official Registered Agent for your business. Dependable, easy, and free for the first year when you incorporate with Incfile. Learn more. "
		/>
		<ProductSchema
			productUrl={`${process.env.ORDER_URL}/ra-form.php`}
			productName="Registered Agent Service"
			productPrice={servicePrice.ra}
			productDescription="Get an official registered agent to receive legal correspondence and tax documents for your business."
		/>
		<Top
			imageName="mrs-bulb-registered-agent"
			imageAlt="registed agent service"
			ovalColor="purple"
		>
			<h1>{top.header}</h1>
			<HeadingP size={2} big>
				{top.text}
			</HeadingP>
			<Buttonsbox>
				<Button
					externalLink
					content={top.button[0]}
					theme="primary56"
					width="200px"
					arrow
				/>
			</Buttonsbox>
		</Top>
		<About content={about} />
		<Includes content={includes} />
		<Offering content={offering} />
		<Faq content={faq} />
		<Benefits page="registered-agent" />
		<Articles categoryId={324} />
	</Layout>
);

export default RegisteredAgent;
