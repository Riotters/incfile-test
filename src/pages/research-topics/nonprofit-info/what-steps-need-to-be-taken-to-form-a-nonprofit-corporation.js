import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/nonprofit-info/non-profit-by-steps";
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
import { about } from "../../../static/research-topics/nonprofit-info/non-profit-by-steps";
import { related } from "../../../static/research-topics/nonprofit-info";
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
				title="What steps need to be taken to form a Nonprofit Corporation?"
				description="Learn about the key differences between nonprofit and not-for-profit organizations, including legal status, purpose, tax exemption and more."
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
                        "name": "What Steps Need to be Taken to Form a Nonprofit Corporation?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You must incorporate the nonprofit organization in your particular state, which
                        consists of filing your organization’s articles of incorporation with the state. It is important that
                        your organizing documents contain the required language and specific clauses, such as a
                        detailed exempt purpose statement, to ensure that your nonprofit will meet the requirements to
                        qualify for Federal 501(c)(3) tax-exempt status. If you choose to incorporate your nonprofit
                        through IncFile, you only need to complete the online order form. IncFile will prepare and file
                        your organizing documents."
                        }}
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
