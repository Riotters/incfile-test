import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/general-research/required-business-account-paperwork";
import Related from "../../../atomic/sections/learning-center-entity/help-center-article/related";
import Categories from "../../../atomic/sections/learning-center-entity/help-center-article/categories";
import Service from "../../../atomic/sections/learning-center-entity/help-center/service";
import Tools from "../../../atomic/sections/learning-center-entity/help-center-article/tools";
import Rocket from "../../../atomic/sections/review-entity-types/c-corporation/rocket";
import Searchbar from "../../../atomic/molecules/form/help-center-searchbar";
//Texts
import {
	top,
	rocket,
	categories,
	service,
	tools,
} from "../../../static/learning-center-entity/help-center-article";
import { about } from "../../../static/research-topics/general-research/required-business-account-paperwork";

import { related } from "../../../static/research-topics/general-research";
import { Helmet } from "react-helmet";
import { HeadingP } from "../../../atomic/atoms/typography/heading-to-p";

const HelpCenter = () => {
	const currentUri =
		typeof window !== "undefined" ? window.location.pathname : "";
	const relatedInfo = {
		header: `Related Articles`,
		text: `Other users were also interested in knowing about…`,
		buttons: related.buttons.filter((item) => {
			return item.url !== currentUri;
		}),
	};

	React.useEffect(() => {
		const el = document.getElementById("answers");
		el.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});

	return (
		<Layout>
			<SEO
				title="What Do I Need to Open a Business Banking Account? | Incfile"
				description="If you run certain types of businesses, you will need to have a bank account specifically for your business finances. Learn how to get started."
			/>
			<Top
				imageName="mrs-bulb-help-center-article"
				imageAlt="Mrs Bulb and with checklist"
				ovalColor="green"
			>
				<Heading size={2} template={1} left>
					{top.header}
				</Heading>
				<HeadingP size={3}>{top.text}</HeadingP>
				<Searchbar />
			</Top>
			<About content={about} />
			<Related content={relatedInfo} />
			<Categories content={categories} />
			<Service content={service} />
			<Tools content={tools} />
			<Rocket content={rocket} />
			<Helmet>
				<script type="application/ld+json">
					{`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": {
                        "@type": "Question",
                        "name": "What paperwork is required in order to open a business checking account?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In most cases in order to open a business checking account for an LLC or
                        corporation the bank will require that the client provide a copy of the filed articles of organization
                        for LLC’s or articles of incorporation for a corporation and an Employer Identification Number
                        (EIN). Unless these two items are presented to the banking officer a business checking account
                        will be difficult to open."
                        }}
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
