import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/s-corporation-info/s-corp-taxing";
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
import { about } from "../../../static/research-topics/s-corporation-info/s-corp-taxing";
import { related } from "../../../static/research-topics/s-corporation-info";
import { Helmet } from "react-helmet";
import {HeadingP} from "../../../atomic/atoms/typography/heading-to-p";

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
				title="How is an S Corporation Taxed?"
				description="Q & A for LLC and other forms of corporations. Learning Center for
    Incorporating in every state."
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
                        "name": "How is an S Corporation Taxed?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For purposes of federal taxation, an S Corporation is taxed differently than a C
                        Corporation. Typically, the S Corporation files its annual return using the Form 1120S, as
                        opposed to the 1120 for a C Corporation. The 1120S is an informational return; it simply informs
                        the federal tax authorities the amount of net profit/loss made by the S Corporation, the
                        shareholders amongst which the profit/loss will be distributed, and the proportion in which the
                        profit/loss is distributed to the shareholders. There is no tax payment/refund associated with the
                        1120S tax return, as the S Corporation does not have the independent tax status that a C
                        Corporation has. Instead, the profits/losses of the S Corporation are considered distributed to
                        the shareholders in proportion to the ownership interest of the shareholder."
                        }}
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};
export default HelpCenter;
