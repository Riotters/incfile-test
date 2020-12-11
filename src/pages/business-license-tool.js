import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/business-license-req/about";
import SearchTool from "../atomic/sections/learning-center-entity/business-license-req/search-tool";
import Articles from "../atomic/sections/articles";
//Texts
import {
	top,
	about,
	searchTool,
	businessIndustryList,
} from "../static/learning-center-entity/business-license-req";
import { Helmet } from "react-helmet";

const BusinessLicenseReq = () => (
	<Layout>
		<SEO
			title="Do I Need a Business License? Business License Search Tool"
			description="Wondering what licenses you need to start your business? Incfile's license search tool tells you what the requirements are for your industry. Try it now."
		/>
		<Top
			imageName="mrs-bulb-business-license-requirements"
			imageAlt="business license requirement"
			ovalColor="sun"
			headlineWidth="460"
			textWidth="480"
		>
			<h1>{top.header}</h1>
			<p>{top.text}</p>
			<RatingRow topMargin="0">
				<CartBlock />
				<RatingBlock />
			</RatingRow>
		</Top>
		<About content={about} />
		<SearchTool
			content={searchTool}
			businessIndustryList={businessIndustryList}
		/>
		<Articles categoryId={279} />

		<Helmet>
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "Do I Need A Business License? by Incfile",
                    "description": "Wondering if you need a business license for your new company? Whether you’re starting a home-based business or running an early-stage startup, it’s important to make sure you fulfill all official licensing requirements in your state.   Your required business licenses can depend on a variety of factors, including the services you offer, your location, the type of business you’re running and the products you sell. Some businesses require special permits or registrations for serving food, building structures, paying payroll, and more. Use Incfile's Business License Search Tool to narrow down the types of licenses and permits you might need, from sales tax registration to food handling permits. If you need help, you can also use our Business License Research Package to have a professional do the research for you.   - Incfile's Business License Search Tool: https://www.incfile.com/business-license-tool/ - Business License Research Package: https://www.incfile.com/business-license-research-package/",
                    "thumbnailUrl": "https://i.ytimg.com/vi/ZHQDyf2-kYk/default.jpg",
                    "uploadDate": "2020-07-04T21:04:01Z",
                    "duration": "PT1M1S",
                    "embedUrl": "https://www.youtube.com/embed/ZHQDyf2-kYk",
                    "interactionCount": "13"
                }`}
            </script>
		</Helmet>
	</Layout>
);

export default BusinessLicenseReq;
