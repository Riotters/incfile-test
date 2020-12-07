import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Buttonsbox from "../atomic/atoms/boxes/top-buttons-box";
import Button from "../atomic/molecules/buttons/button-action";

//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/business-name-search/about";
import Care from "../atomic/sections/learning-center-entity/business-name-search/care";
import Features from "../atomic/sections/learning-center-entity/business-name-search/features";
import Faq from "../atomic/sections/learning-center-entity/business-name-search/faq";
import Articles from "../atomic/sections/articles";
//Texts
import {
	top,
	about,
	care,
	faq,
	features,
} from "../static/learning-center-entity/business-name-search";
import { Helmet } from "react-helmet";

const BusinessNameSearch = () => {
	const scrollToElement = (e, l) => {
		e.preventDefault();

		const el = document.getElementById(l);
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	return (
		<Layout>
			<SEO
				title="Business Name Search | Is Your Company Name Available?"
				description="Starting a new business? Check to see if your preferred business name is available in your state with Incfile’s easy name search tool. Try it now."
			/>
			<Top
				imageName="mr-bulb-business-name-search-5927"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="blue"
				headlineWidth="500"
			>
				<h1>{top.header}</h1>
				<p>{top.text}</p>
				<Buttonsbox>
					<Button
						content={top.buttons[0]}
						theme="primary56"
						onClick={(e) => scrollToElement(e, "js-business-name-search-form")}
					/>
				</Buttonsbox>
			</Top>
			<About content={about} />
			<Care content={care} id="js-business-name-search-form" />
			<Features content={features} />
			<Faq content={faq} />
			<Articles categoryId={273} />

			<Helmet>
				<script type="application/ld+json">
					{`{
                    "@context": "http://schema.org",
                    "@type": "VideoObject",
                    "name": "How Do I Perform a Business Name Search? by Incfile",
                    "description": "Picking the perfect business name is hard! Once you've narrowed down your options, you'll need to run a business entity search to ensure your preferred name is available and not already taken by another business in your state. This can be done on your state's Secretary of State website using their business lookup tool, or through Incfile's Business Name Search Tool, which searches your state's business registry for you.   To check your business name's availability, visit the Incfile Business Name Search Tool here: https://www.incfile.com/business-name-search/.",
                    "thumbnailUrl": "https://i.ytimg.com/vi/XePRillB3UE/default.jpg",
                    "uploadDate": "2020-08-03T15:43:17Z",
                    "duration": "PT1M19S",
                    "embedUrl": "https://www.youtube.com/embed/XePRillB3UE",
                    "interactionCount": "1"
                }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default BusinessNameSearch;
