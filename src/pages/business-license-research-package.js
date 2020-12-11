import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/manage-your-company/business-license/about";
import Requirements from "../atomic/sections/manage-your-company/business-license/requirements";
import WhatYouGet from "../atomic/sections/manage-your-company/business-license/what-you-get";
import ResearchPackage from "../atomic/sections/manage-your-company/business-license/research-package";
import Cta from "../atomic/sections/manage-your-company/business-license/cta";
import Articles from "../atomic/sections/articles";
import ProductSchema from "../components/product-schema";
//Texts
import {
	top,
	about,
	requirements,
	whatyouget,
	researchpackage,
	cta,
} from "../static/manage-your-company/business-license";
import { Heading } from "../atomic/atoms/typography/heading";
import { color } from "../atomic/atoms/styles/colors";

const BusinessLicence = () => (
	<Layout>
		<SEO
			title="Business License Research Package - Incfile"
			description="As a business owner, you are responsible for making sure your business has the proper federal, state and local licenses and permits to operate legally."
		/>

		<ProductSchema
			productUrl="https://orders.incfile.com/order-business-license"
			productName="Business License Research Package"
			productPrice="99"
			productDescription="Find out what business licenses and permits you need and have Incfile do the paperwork for you."
		/>
		<Top
			imageName="mrs-bulb-business-license-882"
			imageAlt=""
			ovalColor="darkblue"
		>
			<h1>{top.header}</h1>
			<Heading
				size={2}
				template={4}
				bottomMargin={32}
				style={{ fontWeight: "normal", color: color.grey2 }}
			>
				{top.text}
			</Heading>
			<Buttonsbox>
				<Button externalLink content={top.button[0]} theme="primary56" width="200px" arrow />
			</Buttonsbox>
		</Top>
		<About content={about} />
		<Requirements content={requirements} />
		<WhatYouGet content={whatyouget} />
		<ResearchPackage content={researchpackage} />
		<Cta content={cta} />
		<Articles categoryId={279} />
	</Layout>
);

export default BusinessLicence;
