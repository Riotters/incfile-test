import { color } from "../../../components/styles/colors";

import BgBoxDBAName from "../../../images/icons/states/dba-name-01.png";
import BgBoxTrademark from "../../../images/icons/states/trademark-01.png";
import BgBoxBusinessNameIdea from "../../../images/icons/states/business-name-idea.inline.png";
import BgBoxIncorporationPaperWork from "../../../images/icons/states/incorporation-paperwork-01.png";

export const businessNamesContent = {
	header: {
		title: `Florida Business Entity Searches and Naming Your LLC`,
		subline: `Learn how to conduct a business entity search with the Florida Division of Corporations and register your LLC name.`,
		boxes: [
			{
				title: `Starting a Florida LLC? Have Incfile do all the paperwork for you for free.`,
				desc: `<span style="color:#FD8550">Incorporate today for $0 + State fee.</span>`,
				button: {
					text: `Form Your LLC Now`,
					url: `${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL`,
				},
			},
		],
	},
	content: [
		{
			type: `paragraph`,
			content: `We’re here to help you find the right business name for your Florida LLC. From searching for a business name with the FL Department of State to understanding naming rules or creating a “Doing Business As” name to register your entity, you’re in the right place.`,
		},
		{
			type: `heading`,
			size: 2,
			template: 3,
			left: true,
			content: `Florida Department of State (DOS) Rules for Naming LLCs`,
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
							content: `The business name you have chosen cannot be used by any other LLC or corporation in the state of Florida. This is why you should check business name availability on the FL DOS website.`,
						},
					],
				},
				{
					count: 2,
					question: `Your LLC Business Name Must Not Be Confusable With Another Business Name`,
					answer: [
						{
							type: `paragraph`,
							content: `It’s not enough for your LLC name to be unique. It also cannot be similar to the name of a corporation or LLC in Florida. For example, you cannot use the following factors to say your name is different from the name of another business:`,
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
								`Are very similar to the name of a federal or FL agency or organization (e.g. FBI, FDA, Florida Department of Revenue, Florida Police, Treasury, etc.)`,
								`Suggest affiliation with a federal or state agency or organization`,
								`Use the term “Olympic” or any terms that are trademarks of the Olympic organization`,
								`Imply a purpose that it would be illegal for your business to carry out`,
							],
						},
					],
				},
			],
			header: 3,
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
			size: 2,
			template: 3,
			left: true,
			content: `Florida Business Entity Searches`,
		},
		{
			type: `paragraph`,
			content: `Once you’ve narrowed it down to a few name options, it’s important to check with the Florida Division of Corporations to make sure your preferred business name isn’t already taken by another Florida business. There are a few ways to do this.`,
		},
		{
			type: `heading`,
			size: 3,
			content: `Incfile’s Business Name Search Tool`,
		},
		{
			type: `paragraph`,
			content: `The Incfile Business Name Search tool lets you effortlessly search for your business name in Florida and any other state. Our tool integrates with Sunbiz business searches to query the FL Department of State register and let you know about name availability.`,
		},
		{
			type: `button`,
			theme: `secondary56`,
			width: `450px`,
			content: {
				text: `Search for your Florida LLC name`,
				url: `/`, // okienko
			},
		},
		{
			type: `heading`,
			size: 3,
			content: `Sunbiz Business Search`,
		},
		{
			type: `paragraph`,
			content: `Start naming your business by first completing a Florida business entity search with the FL Department of State, or more specifically, the Division of Corporations. Florida's DOS website, called Sunbiz, has a helpful tool that lets you run an LLC and corporation search to see if someone already has your desired business name. Just enter the business name you want to use, then search to see if it’s already taken. The Sunbiz search tool lets you enter details and search all Florida corporations or LLCs by the following fields:`,
		},
		{
			type: `list-dot-without-bg`,
			content: [
				`Entity Name`,
				`Officer/Registered Agent`,
				`Registered Agent Name`,
				`Trademark Name`,
				`Trademark Owner Name`,
				`FEI/EIN`,
				`Detail by Document Number`,
				`Zip Code`,
				`Street Address`,
			],
		},
		{
			type: `paragraph`,
			content: `If the business name is already used by an LLC or corporation in Florida, that means it’s not available and you won’t be able to register it. Try searching for a different business name instead.`,
		},
		{
			type: `button`,
			theme: `secondary56`,
			width: `450px`,
			content: {
				text: `Florida Department of State business name search tool`,
				url: `/`,
			},
		},
		// Assumed Name
		{
			type: `heading`,
			size: 2,
			template: 3,
			left: true,
			content: `Fictitious Names or DBAs in Florida`,
		},
		{
			type: `paragraph`,
			content: `You might choose to do business under a different name from your legal LLC name. In Florida, doing business under a different name is known as either a “Fictitious” or “Doing Business As” name. You might choose to use a different name from your FL formal LLC name for a variety of reasons.`,
		},
		{
			type: `paragraph`,
			content: `For example, your LLC might be called Florida Keys Holding Company LLC and you have a chain called Hemingway’s Bookstores. You should file a fictitious name to let the Florida Department of State know. In Florida, you do that through a Fictitious Name Application, or you can have Incfile do it on your behalf through our Assumed Business Name service.`,
		},
		{
			type: `paragraph`,
			content: `The Florida DOS also requires you to advertise the LLC name you register at least once in a newspaper that is located within the county where your principal place of business is located.`,
		},
		{
			type: `box-cta`,
			color: color.orange3,
			styles: { fontSize: `clamp(1.5rem, 5vw, 1.2rem)` },
			bgImage: [BgBoxDBAName],
			content: {
				title: `Register and manage an assumed name or DBA name through our easy-to-use service.`,
				button: {
					text: `Icfile’s fictitious name service`,
					url: `/fictitious-business-or-trade-name/`,
				},
			},
		},
		// Register Your Business Name With the Florida Secretary of State
		{
			type: `heading`,
			size: 2,
			template: 3,
			left: true,
			content: `Ready to Register Your Business Name?`,
		},
		{
			type: `paragraph`,
			content: `Once you’ve
        <a href="/business-name-search/">searched for your Florida business name</a>
        checked availability, followed the naming rules and decided whether you need a fictitious name, you can register your FL LLC name. Just file your Articles of Organization with the Florida Department of State on the
        <a href="https://dos.myflorida.com/sunbiz/">Sunbiz</a>
        website, or
        <a href="${process.env.ORDER_URL}/form-order-now.php?entityType=LLC&entityState=FL">let Incfile take care of it for you.</a>`,
		},
		{
			type: `box-cta`,
			color: color.blue3,
			styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
			bgImage: [BgBoxIncorporationPaperWork],
			content: {
				title: `Incfile can handle all your incorporation paperwork with the State of Florida for you—and we’ll do it for free!`,
				subtitle: `Incorporate in Florida for $0 + State Fee ($125)`,
				button: {
					text: `Start Your LLC Now`,
					url: `/`,
				},
			},
		},
		// Faqs section
		{
			type: `heading`,
			size: 3,
			content: `FAQs About Naming Your Florida LLC`,
		},
		{
			type: `accordion`,
			content: {
				items: [
					{
						question: `How Do I Search for My Florida LLC Business Name?`,
						answer: `Just go to the <a href="/business-name-search/" target="_blank" rel="noopener noreferrer">business name search tool</a> and enter your proposed business name. You can search the register of the Florida Secretary of State, which will tell you if there are any FL corporations or LLCs with that name.`,
					},
					{
						question: `Are There Any Rules on Naming My Florida LLC?`,
						answer: `Yes. Most LLCs will be bound by general rules (applicable to all LLCs) and specific rules (applicable in the state of Florida). We’ve detailed these rules above.`,
					},
					{
						question: `Can I Do Business Under a Different Name Than My LLC Name in Florida?`,
						answer: `Yes. Known as “assumed names,” “fictitious names,” “doing business as names” or “trade names,” you can choose to conduct business under a different name. Details are above.`,
					},
					{
						question: `Can I Reserve a Name for My Florida LLC?`,
						answer: `No. The Florida Department of State does not have any provisions to allow you to reserve your business name.`,
					},
				],
			},
		},
		// Trademark section
		{
			type: `heading`,
			size: 3,
			content: `Trademarks and Service Marks`,
		},
		{
			type: `paragraph`,
			content: `You must be careful that your Florida LLC name does not infringe on the trademark or service mark of another business. The easiest way to make sure your proposed business name does not infringe is to carry out a trademark search through Incfile. If it doesn’t infringe, you can even register it as a trademark yourself.`,
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
		{
			type: `heading`,
			size: 3,
			content: `Get a Street Address for Your Florida LLC`,
		},
		{
			type: `paragraph`,
			content: `If you need a street address in Florida, Incfile provides a convenient and safe Virtual Mailbox service. Please note that this may not meet the requirements of the Department of State for a registered office or Registered Agent address.`,
		},
		{
			type: `box-cta`,
			color: color.blue3,
			styles: { fontSize: `clamp(1rem, 5vw, 1.5rem)` },
			bgImage: [BgBoxTrademark],
			content: {
				title: `Give your business its own Florida mailing address and have your mail scanned for you.`,
				button: {
					text: `Florida virtual mailbox service`,
					url: `/florida-virtual-mailbox/`,
				},
			},
		},
	],
};
