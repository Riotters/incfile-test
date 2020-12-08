import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/llc-info/llc-meaning";
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
import { about } from "../../../static/research-topics/llc-info/llc-meaning";
import { related } from "../../../static/research-topics/llc-info";
import { Helmet } from "react-helmet";
import {HeadingP} from "../../../atomic/atoms/typography/heading-as-p";

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
				title="What does LLC mean?"
				description="Q & A for LLC and other forms of corporations. Learning Center for Incorporating in every state."
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
                        "mainEntity": [{
                        "@type": "Question",
                        "name": "What Does LLC Mean?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "LLC stands for “Limited Liability Company,” and it’s one of several different types of
                        business you can create in the United States. An LLC provides some distinct advantages to an
                        entrepreneur or business owner, including liability protection, tax advantages and easier
                        administration than some other types of entities."
                        }
                        },{
                        "@type": "Question",
                        "name": "What Is an LLC, and What Is It Used For?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An LLC is a business entity that can be created by one or more people. Once an LLC
                        is created, it effectively becomes a separate company that you can use to run every aspect of
                        your business through. LLCs are quick and easy to set up and require minimal overhead or
                        administration to run. Simply put, creating an LLC means that you have set up a company —
                        separate from your personal finances and assets — and can use that company to conduct
                        business."
                        }
                        },{
                        "@type": "Question",
                        "name": "How Do I Create an LLC?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You create an LLC by filing paperwork with your secretary of state (or a similar body
                        in your state’s government that is responsible for administering businesses). You will typically
                        need to complete “Articles of Organization” and file them. You can do this yourself or have
                        Incfile complete the process on your behalf."
                        }
                        },{
                        "@type": "Question",
                        "name": "How Does an LLC Protect You?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Because your Limited Liability Company is a separate entity from you as an
                        individual, the liabilities of your business belong to that entity fully. This matters if your business
                        is sued or needs to pay a major debt or penalty. Effectively, an LLC helps make all of your
                        business assets (including its bank account, equipment, office building, etc.) separate from your
                        personal assets, like your savings account, home or car. Even if a penalty is levied against your
                        business, your personal assets are insulated from that penalty. Without the protection of a
                        separate business entity, your personal assets could be vulnerable if the business runs into
                        trouble."
                        }
                        }]
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
