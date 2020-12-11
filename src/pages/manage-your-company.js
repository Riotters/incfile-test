import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button";
import Top from "../atomic/partials/top";
import Benefits from "../atomic/sections/manage-your-company/manage-your-company/benefits";
import Certificates from "../components/partials/sections/certificates";
import Articles from "../atomic/sections/articles";
import Help from "../components/partials/sections/help";
//Texts
import { top, help, certificates } from "../static/manage-your-company";
import { HeadingP } from "../atomic/atoms/typography/heading-to-p";

const ManageYourCompany = () => (
	<Layout>
		<SEO
			title="Documents Needed to Manage your LLC or Corporation"
			description=""
		/>
		<Top
			imageName="mrs-bulb-final-paper-stock"
			imageAlt="Mr Bulb with a briefcase holding a sign pointing foward"
			ovalColor="purple"
			tabletVariantClass="tablet--shopper"
			tabletImgScale={0.8}
			tabletImgPosX={40}
		>
			<h1>{top.header}</h1>
			<HeadingP size={2} left big>
				{top.text}
			</HeadingP>
		</Top>
		<Benefits />
		<Certificates content={certificates} />
		<Help content={help} />
		<Articles oval categoryId={310} />
	</Layout>
);

export default ManageYourCompany;
