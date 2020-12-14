import { color } from "../../../components/styles/colors";

import BgBoxDBAName from "../../../images/icons/states/dba-name-01.png";
import BgBoxTrademark from "../../../images/icons/states/trademark-01.png";
import BgBoxBusinessNameIdea from "../../../images/icons/states/business-name-idea.inline.png";
import BgBoxIncorporationPaperWork from "../../../images/icons/states/incorporation-paperwork-01.png";
import BgBoxBusinessNameSearchTool from "../../../images/icons/states/business-name-search-tool.inline.png";

export const businessNamesContent = {
	header: {
		title: `California Business Entity Searches and Naming Your LLC`,
		subline: `Learn how to conduct a business entity search with the California Secretary of State and register your LLC name.`,
		boxes: [
			{
				title: `Incorporate today for <span style="color:#FD8550">$0 + State fee.</span>`,
				desc: `Starting a California LLC? Have Incfile do all the paperwork for you for free.`,
				button: {
					text: `Form Your LLC Now`,
					url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
				},
			},
		],
	},
	content: [
		{
			type: `paragraph`,
			content: `Your California business entity needs the perfect name, and we’re here to help. In this section, we’ll guide you through searching the CA Secretary of State business register, tell you about the rules for naming your business, describe “Fictitious Business Names” and get you started with registering your LLC.`,
		},
		{
			type: `heading`,
			size: 2,
			template: 3,
			left: true,
			content: `Business Name Rules for California LLCs`,
		},
		{
			type: `accordingTabWithCountingLeft`,
			content: [
				{
					count: 1,
					question: `Your LLC Business Name Must Be Unique`,
					answer: [
						{
							type: `paragraph`,
							content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of California. This is why you should check business name availability on the CA SOS website or Incfile’s <a href="/california-entity-search/">free Business Name Search</a>`,
						},
					],
				},
				{
					count: 2,
					question: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
					answer: [
						{
							type: `paragraph`,
							content: `It’s not enough for your CA LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in California. For example, you cannot use the following factors to say your name is different from the name of another business:`,
						},
						{
							type: `list-dot-without-bg`,
							content: [
								`Suffixes, such as Corporation, Company, Incorporated, Incorporation, Limited, Corp., Co., Inc., Ltd., LLC, etc.`,
								`Definite articles like “A,” “And,” “An,” “&,” “The,” etc.`,
								`The singular, plural or possessive forms of a word`,
								`Abbreviations, punctuation, symbols, fonts, typefaces, etc.`,
							],
						},
					],
				},
				{
					count: 3,
					question: `Your LLC Business Name Must Contain Certain Words`,
					answer: [
						{
							type: `paragraph`,
							content: `All LLCs must have the words “Limited Liability Company,” “L.L.C.” or “LLC” in their name. These words should normally come at the end of the name.`,
						},
					],
				},
				{
					count: 4,
					question: `Your LLC Business Name May Have Other General Restrictions`,
					answer: [
						{
							type: `paragraph`,
							content: `Most states will not allow you to form LLCs with names that:`,
						},
						{
							type: `list-dot-without-bg`,
							content: [
								`Are very similar to the name of a federal or CA agency or organization (e.g., FBI, FDA, California Department of Taxation and Finance, California Police, Treasury, etc.)`,
								`Suggest affiliation with a federal or state agency or organization`,
								`Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
								`Imply a purpose that it would be illegal for your business to carry out`,
							],
						},
					],
				},
				{
					count: 5,
					question: `Avoid Using Words That Are Restricted or Prohibited by the California Secretary of State`,
					answer: [
						{
							type: `list-dot-without-bg`,
							content: [
								`The business name may not include the words "corporation, corp, trustee, bank, trust, incorporated or inc."`,
								`Your California business name cannot include any words suggesting you are an insurer or assume insurance risks.`,
								`The business name cannot include “Agency,” “Commission,” “Department,” “Bureau,” “Division,” “Municipal” or “Board.”`,
							],
						},
						{
							type: `paragraph`,
							content: `<a href="https://www.sos.ca.gov/administration/regulations/current-regulations/business/business-entity-names" target="_blank" rel="noopener noreferrer">Read More About California Business Naming Rules</a>`,
						},
					],
				},
			],
		},
		{
			type: `heading`,
			size: 4,
			content: `Coming up with a Great Business Name`,
		},
		{
			type: `paragraph`,
			content: `The perfect business name can be elusive. We have a complete guide to choosing the right business name, but basically, you'll want to choose a name that will:`,
		},
		{
			type: `textBoxWithCheckIcon`,
			content: [
				`Appeal to your customers`,
				`Be memorable enough to stand out`,
				`Best represent your product or services`,
				`Not be used by another business`,
			],
		},
		{
			type: `button`,
			theme: `secondary56`,
			width: `450px`,
			content: {
				text: `Incfile Guide To Choosing A Business Name`,
				url: `https://www.incfile.com/blog/post/llc-name-search-50-states/`,
			},
		},
		{
			type: `box-cta`,
			color: color.purple3,
			bgImage: [BgBoxBusinessNameIdea],
			content: {
				title: `Need help coming up with business name ideas?`,
				subtitle: `Try Incfile’s free Business Name Generator.`,
				button: {
					text: `Get Business Name Ideas`,
					url: `/business-name-generator/`,
				},
			},
		},
		// Business name search
		{
			type: `heading`,
			size: 3,
			content: `California Business Entity Searches`,
		},
		{
			type: `paragraph`,
			content: `Once you’ve narrowed it down to a few name options, it’s important to check with the California Secretary of State to make sure your preferred business name isn’t already taken by another California business. You can do this using the Secretary of State’s business search tool, or you can use Incfile’s free Business Name Search tool. The tool integrates with California’s business search database to find out if your name is available.`,
		},
		{
			type: `paragraph`,
			styles: { marginTop: `42px` },
			content: `If our search shows the name is already in use, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
		},
		{
			type: `box-cta`,
			color: color.purple3,
			styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
			bgImage: [BgBoxBusinessNameSearchTool],
			content: {
				title: `Find out if your preferred business name is available in California with Incfile’s free tool.`,
				button: {
					text: `Check Your California LLC Name`,
					url: `/business-name-generator/`,
				},
			},
		},
		// Assumed Name
		{
			type: `heading`,
			size: 2,
			left: true,
			template: 3,
			content: `DBA / Assumed Names for California LLCs`,
		},
		{
			type: `paragraph`,
			content: `You might choose to do business under a different name from your legal LLC name. In California, doing business under a different name is known as an “Assumed Name.” You might choose to use a different name from your CA formal LLC name for a variety of reasons.`,
		},
		{
			type: `paragraph`,
			content: `For example, your LLC might be called California Leisure and Travel Holding Company LLC, and you have a chain called Hollywood Bus Tours. You should file a fictitious name to let the California Secretary of State know. In California, you do that through filing a form with the county administration that your business is located in. You can also have Incfile do it on your behalf through our Fictitious Name service.`,
		},
		{
			type: `box-cta`,
			color: color.orange3,
			styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
			bgImage: [BgBoxDBAName],
			content: {
				title: `Register and manage an assumed name or DBA name through our easy-to-use service.`,
				button: {
					text: `Icfile’s Assumed Name Service`,
					url: `/fictitious-business-or-trade-name/`,
				},
			},
		},
		// Register Your Business Name?
		{
			type: `heading`,
			size: 2,
			left: true,
			template: 3,
			content: `Register Your Business Name?`,
		},
		{
			type: `paragraph`,
			content: `Once you’ve searched for your California business name, checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your LLC name with California. There are a couple of ways to do this.`,
		},
		{
			type: `numberBoxList`,
			styles: { marginBottom: `55px` },
			content: [
				{
					text: `If you don’t want to form your California LLC right now, you can reserve the business name with the California Secretary of State. You will need to complete a Name Reservation form and file it with the CA SOS. You do not need to reserve a name if you are forming your business right away.`,
					button: {
						text: `California SOS LLC Name Reservation Form`,
						theme: `secondary56`,
						width: `385px`,
						url: `https://bpd.cdn.sos.ca.gov/corp/pdf/name-reservation-request-form.pdf`,
					},
				},
				`If you’re ready to start your California LLC, you can formally file your Certificate of Formation with the California Secretary of State, or have Incfile do it for you.`,
			],
		},
		{
			type: `box-cta`,
			color: color.blue3,
			styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
			bgImage: [BgBoxIncorporationPaperWork],
			content: {
				title: `Incfile can handle all your incorporation paperwork with the State of California for you—and we’ll do it for free!`,
				subtitle: `Incorporate in California for $0 + State Fee ($75)`,
				button: {
					text: `Start Your LLC Now`,
					url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=CA`,
				},
			},
		},
		// Faqs section
		{
			type: `heading`,
			size: 2,
			left: true,
			template: 3,
			content: `FAQs About Naming Your California LLC`,
		},
		{
			type: `paragraph`,
			content: `You’ll find plenty more insight and guidance on the other pages of this guide, including:`,
		},
		{
			type: `accordion`,
			content: {
				items: [
					{
						question: `How Do I Search for My California LLC Business Name?`,
						answer: `You can use Incfile’s <a href="/" target="_blank" rel="noopener noreferrer">Business Name Search tool</a> or search the California business registry yourself on the <a href="/" target="_blank" rel="noopener noreferrer">Secretary of State</a> website. Just go to the business name search tool and enter your proposed business name.`,
					},
					{
						question: `Are There Any Rules on Naming My California LLC?`,
						answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of California). We’ve detailed these rules above.`,
					},
					{
						question: `Can I Do Business Under a Different Name Than My LLC Name in California?`,
						answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
					},
					{
						question: `Can I Reserve a Name for My California LLC?`,
						answer: `Yes. The California Secretary of State allows you to reserve a name if you don’t want to start your business immediately. Details are above. If you are ready to start your business now, you do not need to reserve a name.`,
					},
				],
			},
		},
		// Trademark section
		{
			type: `heading`,
			size: 2,
			left: true,
			template: 3,
			content: `Trademarks and Service Marks`,
		},
		{
			type: `paragraph`,
			content: `You must be careful that your California LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
		},
		{
			type: `box-cta`,
			color: color.blue3,
			styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
			bgImage: [BgBoxTrademark],
			content: {
				title: `Make sure your business is starting off on the right foot when it comes to intellectual property.`,
				subtitle: `Have Incfile run a trademark search for you.`,
				button: {
					text: `Incfile’s Trademark & Registration Service`,
					url: `/trademark-name-search/`,
				},
			},
		},
	],
};
