import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Buttonsbox from "../../atomic/atoms/boxes/top-buttons-box";
import Button from "../../atomic/molecules/buttons/button";
//Sections
import Top from "../../atomic/partials/top";
import About from "../../atomic/sections/manage-your-company/dissolution/about";
import Requirements from "../../atomic/sections/manage-your-company/dissolution/requirements";
import Faq from "../../atomic/sections/manage-your-company/dissolution/faq";
import Benefits from "../../atomic/sections/benefits";
import Articles from "../../atomic/sections/articles";
//Texts
import {
	top,
	about,
	requirements,
	faq,
} from "../../static/manage-your-company/dissolution";
import ProductSchema from "../../components/product-schema";
import { servicePrice } from "../../helpers/global-variables";
import { Helmet } from "react-helmet";

const Dissolution = () => (
	<Layout>
		<SEO
			title="Company Dissolution | How to Dissolve an LLC or Corporation"
			description="To legally close a corporation or LLC, the company must file Articles of Dissolution with the state of incorporation. Learn more. "
		/>
		<ProductSchema
			productUrl={`${process.env.ORDER_URL}/dissolution.php`}
			productName="Corporate Dissolution"
			productPrice={servicePrice.dissolution}
			productDescription="File official dissolution paperwork for your LLC or corporation."
		/>
		<Top
			imageName="mrs-bulb-dissolution"
			imageAlt="Company Dissolution"
			ovalColor="darkblue"
		>
			<h1>{top.header}</h1>
			<Buttonsbox>
				<Button externalLink content={top.button[0]} theme="primary56" width="200px" arrow />
			</Buttonsbox>
		</Top>
		<About content={about} />
		<Requirements content={requirements} />
		<Faq content={faq} />
		<Benefits page="dissolution" />
        <Articles categoryId={336} />
        <Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How to Dissolve an LLC by Incfile",
                    "description": "There are tons of reasons to close a business.  And whatever yours is, you need to ensure you’re no longer on the hook for fees, reports and taxes by officially calling it quits.  Here’s how to dissolve an LLC in three steps.   Step 1: Hold a meeting with the board of directors. Step 2: File Articles of Dissolution. Step 3: Notify the IRS.  Completing these steps can be stressful. So that’s why you should have Incfile complete the dissolution of business paperwork for you.  Check out the link below to get started.  Filing Articles of Dissolution: https://www.incfile.com/manage-your-company/dissolution/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/G7xC0hdx2rk/default.jpg",
                    "uploadDate": "2020-12-11T20:03:53Z",
                    "duration": "PT1M15S",
                    "embedUrl": "https://www.youtube.com/embed/G7xC0hdx2rk",
                    "interactionCount": "23"
                }`}
            </script>
        </Helmet>
	</Layout>
);

export default Dissolution;
