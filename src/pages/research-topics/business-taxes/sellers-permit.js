import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Heading } from "../../../atomic/atoms/typography/heading";
//Sections
import Top from "../../../atomic/partials/top";
import About from "../../../atomic/sections/research-topics/business-taxes/sellers-permit";
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
import { about } from "../../../static/research-topics/business-taxes/sellers-permit";
import { related } from "../../../static/research-topics/business-taxes";
import { Helmet } from "react-helmet";
import { PHeading } from "../../../atomic/atoms/typography/p-as-heading";
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
				title="How to Get a Seller’s Permit or Sales Tax Permit"
				description="If you’re required to collect sales tax, you’ll need to get a seller’s permit from your state’s Department of Revenue. Learn more. "
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
                        "name": "How to Get a Seller’s Permit for Your Sales Tax",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Many states across the U.S. impose a “sales and use” tax on the sale of certain
                        products and services. This sales tax is typically added to the price of goods and charged as an
                        extra to customers. Sellers then collect this sales tax and pay it to their state department of
                        revenue on a regular basis.
                        Sales tax rates and rules vary widely between states, and regulations that apply to one state
                        may not apply to another. Sales tax can be influenced by whether you have a “nexus” in a state,
                        and may be applicable to your business whether you’re selling locally or online. If you’re
                        required to collect sales tax on the goods and services you sell, you will be required to obtain a
                        seller’s permit or sales tax permit from your state’s Department of Revenue."
                        }
                        },{
                        "@type": "Question",
                        "name": "When to Obtain a Seller’s Permit",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You will typically need to get a seller’s permit when you start your business or
                        expand into a new state where you’re selling goods and services. These expansions into new
                        states may also require you to register as a foreign business there, or get a Certificate of
                        Authority to operate.
                        Seller’s permits may be called something else depending on your state. Common related terms
                        include permit license, sales tax license, sales tax permit, reseller license permit, resale permit
                        and reseller number."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Types of Businesses That Need a Seller’s Permit",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your business will typically need to get a seller’s permit under the following
                        circumstances:
                        You are selling goods and services locally into a specific state, and sales tax is payable on
                        those goods or services.
                        You have a “nexus” in a state, such as employees or contractors that are operating on your
                        behalf or selling or shipping products to a buyer in the state.
                        You are selling remotely into a state and the total revenue you are bringing in is above a certain
                        amount, or you complete a certain number of transactions.You will need to get a sales permit for
                        every state where you are making sales.
                        There are other circumstances where you may need to get a seller’s permit. Because every
                        business situation is unique, we recommend talking to an accountant with a specialty in sales
                        tax for any states you’re planning to expand into."
                        }
                        },{
                        "@type": "Question",
                        "name": "Online Sellers and Sales Tax Permits",
                        
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Online sellers and ecommerce stores may be liable for paying sales tax on products
                        they sell into a state, although the rules do vary. In general, you need to sell over a certain
                        amount into a state or complete a certain number of transactions. The Streamlined Sales Tax
                        Governing Board provides a useful overview of these requirements."
                        }
                        },{
                        "@type": "Question",
                        "name": "The Process for Getting a Sales Tax or Seller’s Permit",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most states will allow you to register for sales tax and get a seller’s permit online.
                        This is the typical process:
                        Gather together information about your business, such as its legal name, any tax identification
                        numbers (for example, your Employer Identification Number) and other identifying factors.
                        Find your state’s Department of Revenue website, typically by searching “state name” and
                        “department of revenue.”
                        Go to the “Sales and Use Tax” section of the website.
                        Review the rules and regulations there to see if you’re liable to pay sales tax.
                        See if you can register for sales tax and a seller’s permit online.
                        If you have any questions, speak to the Department of Revenue.
                        You will likely need to provide additional information about your business, including:
                        When your business operates during the year
                        When you are going to start collecting sales tax
                        The types of products and services that you sell
                        The NAICS codes for your type of business, products and services — these are standardized
                        codes that define what you sell
                        How much sales tax you estimate you will collect and pay"
                        }
                        },{
                        "@type": "Question",
                        "name": "States That Don’t Collect Sales Tax",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There are some states that do not impose sales taxes: Alaska, Delaware, Hawaii,
                        Montana, New Hampshire and Oregon. Many localities in Alaska do have their own local sales
                        taxes.
                        Best and Worst States for Small Business Taxes"
                        }
                        },{
                        "@type": "Question",
                        "name": "Sales Tax Rates Can Vary Within a State",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "States will often impose a flat rate of sales tax that applies to all taxable transactions
                        there. Counties and local municipalities may also apply their own local sales taxes on top of
                        those rates. We have a very helpful sales tax calculator that shows sales tax rates across all
                        states and most big cities and regions in the U.S."
                        }
                        },{
                        "@type": "Question",
                        "name": "Collecting Sales Taxes",
                        "acceptedAnswer": {
                        
                        "@type": "Answer",
                        "text": "Sales tax is collected from clients and customers at the point of payment. For
                        example, if a customer is purchasing from your local retail store, your point-of-sale software
                        should add the sales tax amount to the transaction total. If you’re sending out an invoice for
                        goods or services, you can add the sales tax there. You will need to keep accurate records of
                        the sales tax you have collected."
                        }
                        },{
                        "@type": "Question",
                        "name": "Reporting On and Paying Sales Taxes",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your state will require you to file reports on the sales tax you have collected. These
                        reports, and the methods for filing them, vary between states. You will also need to pay the
                        sales tax you have collected to the state on a regular basis. Your state’s department of revenue
                        will provide instructions on how to file your reports and how frequently you should pay sales tax.
                        You will typically need to pay sales tax on a monthly or quarterly basis."
                        }
                        },{
                        "@type": "Question",
                        "name": "Other Types of Business Permits and Licenses",
                        "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seller and reseller permits for sales tax are not the only types of permits and licenses
                        that your business might need. Many businesses will require additional permits and licenses
                        based on a number of factors:
                        Where you’re located, as your city or local municipality may require you to obtain a business
                        license
                        What your business does, as certain types of business must obtain special licenses
                        Federal regulations may mean you need additional licensing
                        Zoning restrictions may mean you need a specialized permit to operate
                        Incfile offers a complete Business License Research Package that tells you exactly what
                        permits you need to operate your business."
                        }
                        }]
                    }`}
				</script>
			</Helmet>
		</Layout>
	);
};

export default HelpCenter;
