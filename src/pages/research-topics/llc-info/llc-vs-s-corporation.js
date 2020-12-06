import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/llc-info/llc-vs-s-corporation";
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
import { about } from "../../../static/research-topics/llc-info/llc-vs-s-corporation";

import { related } from "../../../static/research-topics/llc-info";
import { Helmet } from "react-helmet";

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
				title="S-Corporation vs LLC: Which Is Best for Your Business?"
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
				<p>{top.text}</p>
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
                        "name": "S-Corporation vs LLC: Which Is Best for Your Business?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For many business owners, selecting the right entity comes down to a choice
                        between the Limited Liability Company (LLC) and the S-Corporation. These are the two most
                        common forms of small business incorporation, with S-Corporations, or S-Corps, being the most
                        
                        popular business entity in America. While quite similar in many respects, LLCs and S-
                        Corporations both have advantages over one another. Which one is right for your business?"
                        
                        }
                        },{
                        "@type": "Question",
                        "name": "How LLCs and S-Corps Are Similar",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "LLCs and S-Corporations share the same “separate entity” status enjoyed by
                        corporations (meaning the company is a separate entity from its owners). This offers liability
                        protection from the many risks of doing business."
                        }
                        },{
                        "@type": "Question",
                        "name": "How LLCs and S-Corps Differ: Profits and Voting Power",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An S-Corporation divides profits between its shareholders evenly. Someone with
                        30% of the stock would receive 30% of the profits while another with 10% of the stock would
                        receive 10% of the profits, and so on.
                        This is not the case with the LLC. In an LLC, the members (akin to stockholders, although LLC’s
                        usually issue “member units” as opposed to common stock) decide how profits should be
                        divided. There may be someone with 10% of the “stock”, but they put in 30% of the work. This
                        stockholder can receive more than what they have invested if the other members agree that
                        they deserve it.
                        The same goes with voting power. S-Corporations follow a more traditional structure by which
                        voting power is determined by stock ownership. An LLC can give more or less voting power to
                        stockholders regardless of how much stock they may own."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Benefits Of An LLC",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are several benefits to forming an LLC instead of an S-Corporations. There
                        are less requirements on this more flexible business entity. You can almost think of an LLC as a
                        marriage between a classic small business (partnership / sole proprietorship) and a corporation.
                        Forming an LLC offers you:
                        No ownership restrictions – virtually anyone (individuals, Corporations, other LLC’s, and even
                        foreign entities may be owners of an LLC).
                        
                        The ability to operate with a single member.
                        No required annual annual meetings.
                        Pass through taxation: the net income/loss is “passed through” to the personal income of the
                        owner(s)/member(s), and is simply taxed as personal income, An S-Corporation has separate
                        ownership provisions. The S-Corporation is limited to 75 shareholders all of which are required
                        to be US citizens. They are also required to hold shareholder and corporate meetings, which
                        can affect record-keeping needs and continuity within a company."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Benefits Of An S-Corp",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Forming an S-Corp does offer benefits not available to LLCs. If you have employees
                        that you provide benefits to, an S-Corporation will get better deductions in regards to benefits
                        (health insurance, disability, and more.)
                        In addition, the status of the pass through income is a little different as well for the personal
                        service principals (the principals that are employees.) It is considered “passive income” and not
                        “earned income (like it is with an LLC.) Thus, Social Security and Medicare taxes (at this writing)
                        are not levied.
                        Have you been in business for a long time, with no end in sight? An S-Corp may be a better
                        choice for you as LLC’s may have a limited shelf-life. Some states have a cap on how long they
                        can stay in business (30 years, etc.)"
                        }
                        },{
                        "@type": "Question",
                        "name": "Choose The Right Business Entity To Protect Yourself (And Your Profits)",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Overall, S-Corporations allow for more shareholder uniformity and tax savings, while
                        an LLC allows more free negotiations and possibilities for ownership and accountability.
                        Choosing which one is right for you depends on the unique needs and goals of your business."
                        }
                        },{
                        "@type": "Question",
                        "name": "S-Corporation vs LLC: Which Is Best for Your Business?",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For many business owners, selecting the right entity comes down to a choice
                        between the Limited Liability Company (LLC) and the S-Corporation. These are the two most
                        common forms of small business incorporation, with S-Corporations, or S-Corps, being the most
                        
                        popular business entity in America. While quite similar in many respects, LLCs and S-
                        Corporations both have advantages over one another. Which one is right for your business?"
                        
                        }
                        },{
                        "@type": "Question",
                        "name": "How LLCs and S-Corps Are Similar",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "LLCs and S-Corporations share the same “separate entity” status enjoyed by
                        corporations (meaning the company is a separate entity from its owners). This offers liability
                        protection from the many risks of doing business."
                        }
                        },{
                        "@type": "Question",
                        
                        "name": "How LLCs and S-Corps Differ: Profits and Voting Power",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An S-Corporation divides profits between its shareholders evenly. Someone with
                        30% of the stock would receive 30% of the profits while another with 10% of the stock would
                        receive 10% of the profits, and so on.
                        This is not the case with the LLC. In an LLC, the members (akin to stockholders, although LLC’s
                        usually issue “member units” as opposed to common stock) decide how profits should be
                        divided. There may be someone with 10% of the “stock”, but they put in 30% of the work. This
                        stockholder can receive more than what they have invested if the other members agree that
                        they deserve it.
                        The same goes with voting power. S-Corporations follow a more traditional structure by which
                        voting power is determined by stock ownership. An LLC can give more or less voting power to
                        stockholders regardless of how much stock they may own."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Benefits Of An LLC",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are several benefits to forming an LLC instead of an S-Corporations. There
                        are less requirements on this more flexible business entity. You can almost think of an LLC as a
                        marriage between a classic small business (partnership / sole proprietorship) and a corporation.
                        Forming an LLC offers you:
                        No ownership restrictions – virtually anyone (individuals, Corporations, other LLC’s, and even
                        foreign entities may be owners of an LLC).
                        The ability to operate with a single member.
                        No required annual annual meetings.
                        Pass through taxation: the net income/loss is “passed through” to the personal income of the
                        owner(s)/member(s), and is simply taxed as personal income, An S-Corporation has separate
                        ownership provisions. The S-Corporation is limited to 75 shareholders all of which are required
                        to be US citizens. They are also required to hold shareholder and corporate meetings, which
                        can affect record-keeping needs and continuity within a company."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Benefits Of An S-Corp",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Forming an S-Corp does offer benefits not available to LLCs. If you have employees
                        that you provide benefits to, an S-Corporation will get better deductions in regards to benefits
                        (health insurance, disability, and more.)
                        In addition, the status of the pass through income is a little different as well for the personal
                        service principals (the principals that are employees.) It is considered “passive income” and not
                        “earned income (like it is with an LLC.) Thus, Social Security and Medicare taxes (at this writing)
                        are not levied.
                        Have you been in business for a long time, with no end in sight? An S-Corp may be a better
                        choice for you as LLC’s may have a limited shelf-life. Some states have a cap on how long they
                        can stay in business (30 years, etc.)"
                        }
                        },{
                        
                        "@type": "Question",
                        "name": "Choose The Right Business Entity To Protect Yourself (And Your Profits)",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Overall, S-Corporations allow for more shareholder uniformity and tax savings, while
                        an LLC allows more free negotiations and possibilities for ownership and accountability.
                        Choosing which one is right for you depends on the unique needs and goals of your business."
                        }
                        }]
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};
export default HelpCenter;
